import { useDarkMode } from "../provider/DarkeModeProvider";

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      onClick={toggleDarkMode}
      className={`fixed bottom-5 right-5 cursor-pointer`}
    >
      <div className="text-4xl w-[50px] h-[50px] bg-slate-50 flex items-center justify-center rounded-md">
        {darkMode ? "☀️" : "🌛"}
      </div>
    </div>
  );
};

export default DarkModeButton;
