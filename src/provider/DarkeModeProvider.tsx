import { createContext, useState } from "react";

type Context = {
  darkMode: boolean;
};

const DarkModeContext = createContext<Context | null>(null);

type Props = {
  children: React.ReactNode;
};

function DarkModeProvider({ children }: Props) {
  const [darkMode, isDarkMode] = useState<boolean>(false);

  return (
    <DarkModeContext.Provider value={{ darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
