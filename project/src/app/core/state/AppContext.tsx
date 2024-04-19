import { ReactElement, ReactNode, createContext, useReducer } from "react";
import { IBookModel } from "../models/book.model";
// Envuelve varios componentes en este contexto para estos componentes puedan acceder a los valores del contexto
// Puede ser utiles para los libros y usuarios

// Props que se pasan a los componentes que se envuelven en el contexto

export const initialState: IState = {
  isUserLogged: false,
  email: '',
  books: []
}

interface IState {
  isUserLogged: boolean;
  email: string;
  books: IBookModel[];
}

interface IAppContext {
  state: IState;
  dispatch: any
}
export const AppContext = createContext<IAppContext>({ state: initialState, dispatch: null });

interface IAppProviderProps {
  children: ReactNode;
}

interface IAction {
  type: string;
  payload?: any;
}

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'USER_LOGGED':
      return { ...state, isUserLogged: true, email: action.payload };
    case 'USER_LOGGED_OUT':
      return { ...state, isUserLogged: false, books: [], email: "" };
    case 'BOOKS_GOTTEN':
      return { ...state, books: action.payload }
    default:
      return state;
  }
}

export const AppProvider = ({ children }: IAppProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}