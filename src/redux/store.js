import { applyMiddleware } from "redux";
import { noteReducer } from "./reducers/noteReducer";
import { legacy_createStore as createStore } from "redux";
import {thunk } from "redux-thunk"

export const store = createStore( noteReducer, applyMiddleware(thunk))