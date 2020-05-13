import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";

import { rootReducer } from "./reducers";

const logger = createLogger({
  predicate: () => process.env.NODE_ENV !== "production",
});

export const store = createStore(rootReducer, applyMiddleware(logger));
