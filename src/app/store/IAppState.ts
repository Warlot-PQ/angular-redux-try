import {GiftcardUiStep} from '../model/GiftcardUiStep';

export interface IAppState {
  payment: {
    giftcard: [{
      number: String,
      bin: String,
      amount: String
    }]
  },
  display: {
    payment: {
      giftcard: [{
        number: String,
        bin: String,
        amount: String,
        step: GiftcardUiStep,
        loading: boolean,
        showAddCardButton: boolean,
        error: {
          numberOrBin: boolean,
          amount: boolean
        }
      }]
    }
  }
}
