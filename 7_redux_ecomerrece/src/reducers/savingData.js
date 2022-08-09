const initialState = { rj: [] };

const savingData = (state = initialState, action) => {
  switch (action.type) {
    case "savingData":
      return { ...state, rj : [...state.rj, action.data] };
    case "deleteData" :
      const data = state.rj.filter((ele) => {return ele.id !== action.data})
      console.log(...state.rj, data)
      return { ...state, rj : [...data]}
    default:
      return state;
  }
};
export default savingData;
