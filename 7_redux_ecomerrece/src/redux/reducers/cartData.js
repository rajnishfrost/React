const initialState = { rj: [] };

const cartData = (state = initialState, action) => {
  switch (action.type) {

    case "savingCartData" :
      state.rj = state.rj.filter((d)=>{return d.id !==action.data.id});
      return { ...state, rj : [...state.rj, action.data]  };

    case "deleteCartData" :
      state.rj = state.rj.filter((ele) => {return ele.id !== action.data})
      return { ...state, rj : [...state.rj]}

      case "increaseQty" : 
      console.log(action.qty , action.id);
      return { ...state, rj : [...state.rj]}

    default:
      return state;
  }
};
export default cartData;
