import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserState {
  userName: string;
}

const initialState: UserState = {
  userName: 'Usuario por defecto'
}

// Definición del reducer
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // recibe un PayloadAction<string>, lo que significa que el payload debe ser una cadena (en este caso, el email del usuario). Luego, actualizamos la propiedad userName del estado con el valor del payload.
    updateInfoUserLoged: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },

  },
  
})


// Funcion que recibe el estado como argumento y retorna una propiedad del estado
export const selecUser = (state: RootState) => state.user.userName;

export const { updateInfoUserLoged } = userSlice.actions;

export default userSlice.reducer;