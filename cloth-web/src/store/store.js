import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import { thunk } from "redux-thunk";

import { rootReducer } from "./root-reducer";
import { loggerMiddleware } from "./middleware/logger";

// allow us to use localStorage to store the data
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  import.meta.env.MODE !== "production" && loggerMiddleware,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (import.meta.env.MODE !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
