// The "joke" reducer performs actions on our list of articles & price
import { GiftcardUiStep } from '../model/GiftcardUiStep';
import { DISPLAY_GIFTCARD_ACTION } from '../store/Action';
import { initDisplayPaymentGiftcard } from '../store/display.reducer';

export const displayGiftcardReducer = (state, {type, payload}) => {

  const newState = JSON.parse(JSON.stringify(state));
  switch (type) {
    case DISPLAY_GIFTCARD_ACTION.ADD_CARD:
      newState.payment.giftcard.forEach(
        elt => {
          return elt.showAddCardButton = false;
        });
      newState.payment.giftcard.push(initDisplayPaymentGiftcard());
      return newState;

    case DISPLAY_GIFTCARD_ACTION.LOADING:
      newState.payment.giftcard[payload.currentId].number = payload.giftcard.number;
      newState.payment.giftcard[payload.currentId].bin = payload.giftcard.bin;
      newState.payment.giftcard[payload.currentId].amount = payload.giftcard.amount;
      newState.payment.giftcard[payload.currentId].loading = true;
      return newState;

    case DISPLAY_GIFTCARD_ACTION.NEXT_STEP:
      switch (state.payment.giftcard[payload.currentId].step) {
        case GiftcardUiStep.InsertCard:
          newState.payment.giftcard[payload.currentId].number = payload.giftcard.number;
          newState.payment.giftcard[payload.currentId].bin = payload.giftcard.bin;
          newState.payment.giftcard[payload.currentId].amount = payload.giftcard.amount;
          newState.payment.giftcard[payload.currentId].step = GiftcardUiStep.InsertAmount;
          newState.payment.giftcard[payload.currentId].loading = false;
          break;

        case GiftcardUiStep.InsertAmount:
          newState.payment.giftcard[payload.currentId].number = payload.giftcard.number;
          newState.payment.giftcard[payload.currentId].bin = payload.giftcard.bin;
          newState.payment.giftcard[payload.currentId].amount = payload.giftcard.amount;
          newState.payment.giftcard[payload.currentId].step = GiftcardUiStep.RecapCard;
          newState.payment.giftcard[payload.currentId].loading = false;
          newState.payment.giftcard[payload.currentId].showAddCardButton = true;
          break;

        default:
          console.log('NEXT_STEP is not allowed here. Payload:');
          console.log(payload);
      }
      return newState;

    case DISPLAY_GIFTCARD_ACTION.ERROR:
      newState.payment.giftcard[payload.currentId].number = payload.giftcard.number;
      newState.payment.giftcard[payload.currentId].bin = payload.giftcard.bin;
      newState.payment.giftcard[payload.currentId].amount = payload.giftcard.amount;
      newState.payment.giftcard[payload.currentId].loading = false;

      if (payload.errorFields === 'numberOrBin') {
        newState.payment.giftcard[payload.currentId].error.numberOrBin = true;
      } else if ('amount') {
        newState.payment.giftcard[payload.currentId].error.amount = true;
      }
  }
  return newState;
};
