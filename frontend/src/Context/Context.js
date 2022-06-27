import { useContext, createContext } from "react";

const AppContext = createContext(null);

export function useAppContext() {
  return useContext(AppContext);
}
