import RootReducer from "./reducer/RootReducer";
import { legacy_createStore } from "redux";


export default legacy_createStore(RootReducer)