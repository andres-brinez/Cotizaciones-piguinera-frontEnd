import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./reducers/user.reduce";
import bookRedue from "./reducers/book.reduce";

export const store = configureStore({
  reducer: {
    user: userReduce,
    books: bookRedue,
  }
});

// La raiz del estado es lo que retorna store.getState
// store.getState retorna todo el estado con sus propiedades
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;