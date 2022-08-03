const initialState = { rj: [] };

const savingData = (state = initialState, action) => {
  switch (action.type) {
    case "savingData":
      return { ...state, rj : [...state.rj, action.data] };
    default:
      return state;
  }
};
export default savingData;
