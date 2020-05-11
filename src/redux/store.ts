import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";

import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(logger));
