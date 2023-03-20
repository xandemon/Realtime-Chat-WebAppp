import React, { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "./AuthContext";

export const ChatContext = createContext<Object | null>(null);

export const ChatContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const loggedUser = useContext(AuthContext);
  const INITIAL_STATE = {
    chatID: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatID:
            loggedUser?.uid > action.payload.uid
              ? loggedUser.uid + action.payload.uid
              : action.payload.uid + loggedUser.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
