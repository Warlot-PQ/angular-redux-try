import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { select, select$, dispatch, WithSubStore, NgRedux } from '@angular-redux/store';
import { GiftcardUiStep } from '../model/GiftcardUiStep';
import { IAppState } from '../store/IAppState';
import { DISPLAY_GIFTCARD_ACTION } from '../store/Action';
import { emptyReducer } from '../store/empty.reducer';
import {Giftcard} from '../model/Giftcard';

@WithSubStore({
  basePathMethodName: 'getBasePath',
  localReducer: emptyReducer,
})
@Component({
  selector: 'gl-giftcard',
  templateUrl: './giftcard.component.html',
  styleUrls: ['./giftcard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftcardComponent implements OnInit {

  @Input('id')
  id;
  @Output()
  validate = new EventEmitter();

  @select('step')
  readonly currentStep;
  @select('loading')
  readonly loading;
  @select('showAddCardButton')
  readonly showAddCardButton;
  @select(['error', 'numberOrBin'])
  readonly errorNumberOrBin;
  @select(['error', 'amount'])
  readonly errorAmount;

  GiftcardUiStep: typeof GiftcardUiStep = GiftcardUiStep;
  number: String;
  bin: String;
  amount: String;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
    this.number = this.ngRedux.getState().display.payment.giftcard[this.id].number;
    this.bin = this.ngRedux.getState().display.payment.giftcard[this.id].bin;
    this.amount = this.ngRedux.getState().display.payment.giftcard[this.id].amount;
  }

  getBasePath = () => ['display', 'payment', 'giftcard', this.id];

  @dispatch()
  addGiftCard = () => ({ type: DISPLAY_GIFTCARD_ACTION.ADD_CARD })

  displayNextStep = () => {
    const giftcard = Giftcard.build().number(this.number).bin(this.bin).amount(this.amount).build();

    // LOADING...
    this.ngRedux.dispatch({
      type: DISPLAY_GIFTCARD_ACTION.LOADING,
      payload: { currentId: this.id, giftcard: giftcard } });

    // VALIDATING...
    this.validate.emit(
      {
        validationStep: this.ngRedux.getState().display.payment.giftcard[this.id].step,
        giftcard: giftcard,
        success: () =>
          this.ngRedux.dispatch({
            type: DISPLAY_GIFTCARD_ACTION.NEXT_STEP,
            payload: {
              currentId: this.id,
              giftcard: giftcard,
            }}),
        failure: (errorFields) =>
          this.ngRedux.dispatch({
            type: DISPLAY_GIFTCARD_ACTION.ERROR,
            payload: {
              currentId: this.id,
              giftcard: giftcard,
              errorFields: errorFields
            }})
      }
    );
  }
}
