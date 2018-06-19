import { GiftcardUiStep } from '../model/GiftcardUiStep';
import { displayGiftcardReducer } from '../giftcard/giftcard.reducer';
import {DISPLAY_GIFTCARD_ACTION} from './Action';

function displayReducer(state, {type, payload}) {

  if (typeof state === 'undefined') {
    state = {};
  }

  if (typeof type === 'string') {

    if (type.substring(0, 12) === '@@redux/INIT') {
      return initDisplayReducer();
    }

    switch (type.substring(0, type.indexOf('__') + 2)) {
      case DISPLAY_GIFTCARD_ACTION.BASE:
        return displayGiftcardReducer(state, {type, payload});
    }
  }

  return state;
}

function initDisplayReducer() {
  return {
    payment: {
      giftcard: [
        initDisplayPaymentGiftcard()
      ]
    }
  };
}

function initDisplayPaymentGiftcard() {
  return {
    number: null,
    bin: null,
    amount: null,
    step: GiftcardUiStep.InsertCard,
    loading: false,
    showAddCardButton: false,
    error: {
      numberOrBin: false,
      amount: false
    }
  };
}

export { displayReducer, initDisplayPaymentGiftcard };
