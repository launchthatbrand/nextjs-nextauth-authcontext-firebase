import { SessionProvider, useSession, signIn } from "next-auth/react";
import { useReducer, createContext } from "react";

// initial state
const initialState = {
  user: null,
};

// create context
const Context = createContext();

// root reducer
const rootReducer = (state, actions) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

//  context provider

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <SessionProvider>{children}</SessionProvider>
    </Context.Provider>
  );
};

export { Context, AuthProvider };
