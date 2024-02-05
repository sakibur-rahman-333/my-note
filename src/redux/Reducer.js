const initState = {
  editableNote: "",
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ITEM_SELECTED") {
    return {
      ...state,
      editableNote: action.value,
    };
  }
  if (action.type === "ITEM_UNSELECTED") {
    return {
      ...state,
      editableNote: action.value,
    };
  }
  return state;
};

export default rootReducer;
