import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./blogs/blogsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";


const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  blogs: blogsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
 
});

export const persistor = persistStore(store);
