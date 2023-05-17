import { legacy_createStore as createStore } from "redux";
import mainReducer from "./Redux/Reducers";


export const store = createStore(mainReducer);