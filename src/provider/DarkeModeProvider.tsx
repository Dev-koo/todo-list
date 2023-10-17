import { createContext, useContext, useEffect, useState } from "react";

type Context = {
  darkMode: boolean;
  toggleDarkMode: VoidFunction;
};

export const DarkModeContext = createContext<Context | null>(null);

type Props = {
  children: React.ReactNode;
};

export function DarkModeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // setDarkMode의 상태가 업데이트 될때마다 updateDarkMode를 실행한다.
    // updateDarkMode는 HTML 태그의 class를 토글하는 함수.
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

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

function updateDarkMode(darkeMode: boolean) {
  if (darkeMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}
