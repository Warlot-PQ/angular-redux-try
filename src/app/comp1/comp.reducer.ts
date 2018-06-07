// The "joke" reducer performs actions on our list of articles & price
const displayReducer = (state = {}, {type, payload}) => {
  if (typeof type === "string" && type.substring(0, 12) === "@@redux/INIT") {
    return {show: true};
  }
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
