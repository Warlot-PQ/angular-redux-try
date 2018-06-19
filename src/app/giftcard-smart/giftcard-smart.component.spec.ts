import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftcardSmartComponent } from './giftcard-smart.component';

describe('GiftcardSmartComponent', () => {
  let component: GiftcardSmartComponent;
  let fixture: ComponentFixture<GiftcardSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftcardSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftcardSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
