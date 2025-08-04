import { createContext } from "react";

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

/**
 * <UserProvider>
 *  <app />
 * </UserProvider>
 */
