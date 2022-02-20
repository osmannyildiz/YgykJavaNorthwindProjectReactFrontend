import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
	cartReducer,
});

export default function configureStore() {
	return createStore(rootReducer, devToolsEnhancer());
}
