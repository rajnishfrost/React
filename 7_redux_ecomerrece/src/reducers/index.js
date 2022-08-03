import changeTheNumber from "./upDown";
import savingData from "./savingData"
import {combineReducers} from "redux";

const rootReducer = combineReducers({changeTheNumber , savingData});

export default rootReducer ;