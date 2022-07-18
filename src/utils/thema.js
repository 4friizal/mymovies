import { createContext } from "react";

const darkMode = {
  thema: "",
  setThema: () => {},
};

export const ThemaContext = createContext(darkMode);
