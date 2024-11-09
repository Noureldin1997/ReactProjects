import { createContext, useContext, useReducer } from "react";

// Create the context
const AuthContext = createContext();

// Sample reducer function
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, isAuthenticated: false };
    default:
      throw new Error("unkown action type");
  }
}

// Custom hook to use the context
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

// Context provider component
export function AuthContextProvider({ children }) {
  const initialState = { user: {}, isAuthenticated: false }; // Define your initial state here
  const [state, dispatch] = useReducer(reducer, initialState);

  // Example dispatch call (can be removed or modified as needed)
  // dispatch({ type: 'SET_STATE', payload: { /* your payload here */ } });

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  const { user, isAuthenticated } = state;
  const value = { user, isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
