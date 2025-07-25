import { createContext } from "react";

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
