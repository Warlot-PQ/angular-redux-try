
import { PAYMENT_GIFTCARD_ACTION } from './Action';
import { paymentGiftcardReducer } from '../giftcard-smart/giftcard-smart.reducer';
function paymentReducer(state, {type, payload}) {

  if (typeof state === 'undefined') {
    state = {};
  }

  if (typeof type === 'string') {

    if (type.substring(0, 12) === '@@redux/INIT') {
      return initPaymentReducer();
    }

    switch (type.substring(0, type.indexOf('__') + 2)) {
      case PAYMENT_GIFTCARD_ACTION.BASE:
        return paymentGiftcardReducer(state, {type, payload});
    }
  }

  return state;
}

function initPaymentReducer() {
  return {
    giftcard: []
  };
}


export { paymentReducer };
