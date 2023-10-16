import { createContext, useContext, useState } from "react";

type Context = {
  darkMode: boolean;
  toggleDarkMode: VoidFunction;
};

const DarkModeContext = createContext<Context | null>(null);

type Props = {
  children: React.ReactNode;
};

export function DarkModeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  if (!DarkModeContext) {
    throw new Error("Cannot find DarkMode Context");
  }
  return useContext(DarkModeContext) as Context;
};
