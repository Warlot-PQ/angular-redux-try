// The 'joke' reducer performs actions on our list of articles & price
const jokeReducer = (state = {}, {type, payload}) => {
  if (typeof type === 'string' && type.substring(0, 12) === '@@redux/INIT') {
    return { totalPrice: 0, articles: [] };
  }
  switch (type) {
    case 'ADD_ITEM':
      const obj = Object.assign({});
      obj.totalPrice = 42;
      obj.articles = [Object.assign({})];
      obj.articles[0].desc = payload;
      return obj;
    default:
      return state;
  }
};

export { jokeReducer };
