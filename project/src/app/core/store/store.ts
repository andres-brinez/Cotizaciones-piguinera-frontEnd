import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./reducers/user.reduce";

export const store = configureStore({
  reducer: {
    user: userReduce
  }
});

// La raiz del estado es lo que retorna store.getState
// store.getState retorna todo el estado con sus propiedades
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;