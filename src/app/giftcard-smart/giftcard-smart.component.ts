import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { select, dispatch, WithSubStore, NgRedux } from '@angular-redux/store';
import { GiftcardUiStep } from '../model/GiftcardUiStep';
import { IAppState } from '../store/IAppState';
import {DISPLAY_GIFTCARD_ACTION, PAYMENT_GIFTCARD_ACTION} from '../store/Action';

@Component({
  selector: 'gl-giftcard-smart',
  templateUrl: './giftcard-smart.component.html',
  styleUrls: ['./giftcard-smart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftcardSmartComponent {

  @Input('id')
  private id;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  getBasePath = () => ['payment', 'giftcard', this.id];

  validate({ validationStep, giftcard, success, failure }) {
    switch (validationStep) {
      case GiftcardUiStep.InsertCard:
        if (!!giftcard && !!giftcard.number && !!giftcard.bin) {
          setTimeout(() => success(), 1000);
        } else {
          setTimeout(() => failure('numberOrBin'), 1000);
        }
        break;

      case GiftcardUiStep.InsertAmount:
        if (!!giftcard && !!giftcard.amount) {
          this.ngRedux.dispatch({
            type: PAYMENT_GIFTCARD_ACTION.ADD_CARD,
            payload: { giftcard }
          });

          setTimeout(() => success(), 1000);
        } else {
          setTimeout(() => failure('amount'), 1000);
        }
        break;
    }
  }
}
