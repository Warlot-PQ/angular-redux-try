// describe('main test', () => {
//   it('always fails', () => {
//     expect(1).toBe(1);
//   });
// });

import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

import { GiftcardComponent } from './giftcard.component';
import { Giftcard } from '../model/Giftcard';
import {GiftcardUiStep} from '../model/GiftcardUiStep';
import {DISPLAY_GIFTCARD_ACTION} from '../store/Action';

describe('GiftcardComponent', () => {
  let component:GiftcardComponent;
  let fixture:ComponentFixture<GiftcardComponent>;
  let spyConfigureSubStore;

  let giftcardComponentSubStore = ['display', 'payment', 'giftcard', 0];
  let giftcardComponentSubState = {
    display: {
      payment: {
        giftcard: [
          {
            step: GiftcardUiStep.InsertCard,
            number: "TEST123456789",
            bin: "BIN1234",
            amount: "101.1"
          }
        ]
      }
    }
  };

  beforeEach(async(() => {
    spyConfigureSubStore = spyOn(MockNgRedux.mockInstance, 'configureSubStore')
      .and.callThrough();
    spyOn(MockNgRedux.getInstance(), 'getState').and.returnValue(giftcardComponentSubState);

    MockNgRedux.reset();
    TestBed.configureTestingModule({
      declarations: [ GiftcardComponent ],
      imports: [ FormsModule, NgReduxTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftcardComponent);
    component = fixture.componentInstance;

    component.id = 0;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(spyConfigureSubStore).toHaveBeenCalledWith(
      giftcardComponentSubStore,
      jasmine.any(Function));
  });

  it ('displayNextStep', (done) => {
    let spyDispatch = spyOn(MockNgRedux.getInstance(), 'dispatch').and.stub();

    let expectedGiftcard = Giftcard.build().number("TEST123456789").bin("BIN1234").amount("101.1").build();
    let actionsExpected = [
      {
        type: DISPLAY_GIFTCARD_ACTION.LOADING,
        payload: {
          currentId: 0,
          giftcard: expectedGiftcard
        }
      },
      {
        type: DISPLAY_GIFTCARD_ACTION.NEXT_STEP,
        payload: {
          currentId: 0,
          giftcard: expectedGiftcard
        }
      },
      {
        type: DISPLAY_GIFTCARD_ACTION.ERROR,
        payload: {
          currentId: 0,
          giftcard: expectedGiftcard,
          errorFields: "testErrorField"
        }
      }
    ];

    component.validate.subscribe((data) => {
      expect(data.validationStep).toEqual(GiftcardUiStep.InsertCard);
      expect(data.giftcard).toEqual(expectedGiftcard);

      MockNgRedux.reset();
      data.success();
      expect(spyDispatch).toHaveBeenCalledWith(actionsExpected[1]);

      MockNgRedux.reset();
      data.failure("testErrorField");
      expect(spyDispatch).toHaveBeenCalledWith(actionsExpected[2]);

      done();
    });

    component.displayNextStep();

    expect(spyDispatch).toHaveBeenCalledWith(actionsExpected[0]);
  });
});
