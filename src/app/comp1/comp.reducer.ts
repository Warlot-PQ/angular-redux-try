// The "joke" reducer performs actions on our list of articles & price
const displayReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case 'SHOW':
      return { show: true };
    case 'HIDE':
      return { show: false };
    default:
      return state;
  }
};

export { displayReducer };
