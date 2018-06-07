// The "joke" reducer performs actions on our list of articles & price
const jokeReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case 'ADD_ITEM':
      let obj = Object.assign({});
      obj.totalPrice = 42;
      obj.articles = [Object.assign({})];
      obj.articles[0].desc = payload;
      return obj;
    default:
      return state;
  }
};

export { jokeReducer };
