import changeTheNumber from "./upDown";
import savingData from "./savingData";
import savingAPI from "./savingAPI"; 
import {combineReducers} from "redux";

const rootReducer = combineReducers({changeTheNumber , savingData , savingAPI });

export default rootReducer ;