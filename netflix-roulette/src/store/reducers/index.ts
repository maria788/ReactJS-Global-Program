import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  moviesState: moviesReducer,
  appState: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
