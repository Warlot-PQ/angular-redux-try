import {PAYMENT_GIFTCARD_ACTION} from '../store/Action';

export const paymentGiftcardReducer = (state, {type, payload}) => {
  // const newState = JSON.parse(JSON.stringify(state));

  switch (type) {
    case PAYMENT_GIFTCARD_ACTION.ADD_CARD:
      state.giftcard = insertItem(state.giftcard, {
        index: state.giftcard.length,
        item: {
          number: payload.giftcard.number,
            bin: payload.giftcard.bin,
          amount: payload.giftcard.amount
        }
      });


      // newState.giftcard.push({
      //   number: payload.giftcard.number,
      //   bin: payload.giftcard.bin,
      //   amount: payload.giftcard.amount
      // });
  }
  return state;
};

function insertItem(array, action) {
  const newArray = array.slice();
  newArray.splice(action.index, 0, action.item);
  return newArray;
}
