import saveUP from "./saveUP";
import todo from "./todo"
import {combineReducers} from "redux";

const rootReducer = combineReducers({ saveUP , todo});

export default rootReducer ;