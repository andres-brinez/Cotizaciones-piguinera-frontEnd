import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBookModel } from "../../models/book.model";
import { RootState } from "../store";
import { useBooks } from "../../hooks/useBooks";

export interface Books {
  books: IBookModel[];
}

const initialState: Books = {
  books: [],
}

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async () => {
    const { books } = useBooks();
    return books;
  }
);

// Definición del reducer
export const userSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // recibe un PayloadAction<string>, lo que significa que el payload debe ser una cadena (en este caso, el email del usuario). Luego, actualizamos la propiedad userName del estado con el valor del payload.
    updateBooks: (state, action: PayloadAction<IBookModel[]>) => {
      state.books = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
  }

})


// Funcion que recibe el estado como argumento y retorna una propiedad del estado
export const selecBooks = (state: RootState) => state.books.books;

export const { updateBooks } = userSlice.actions;

export default userSlice.reducer;