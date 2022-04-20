import { createStore,compose, combineReducers } from "redux";
import counterReducer from "./CounterFeatures/Reducer";

let rootReducers = combineReducers({
    counter:counterReducer
});
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENTIONS_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnchancers);

export default  store;