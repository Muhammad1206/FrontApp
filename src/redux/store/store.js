import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducer } from "../reducers/users-reducer";
import thunk from 'redux-thunk';


const redusers = combineReducers({
    users: usersReducer,
})

const store = createStore(redusers, applyMiddleware(thunk));

window.store = store;

export default store;