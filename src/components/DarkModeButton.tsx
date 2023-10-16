const DarkModeButton = () => {
  const handleButtonClick = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <div
      onClick={handleButtonClick}
      className="fixed bottom-5 right-5 cursor-pointer"
    >
      <div className="text-4xl w-[50px] h-[50px] bg-slate-50 flex items-center justify-center rounded-md">
        ☀️
      </div>
    </div>
  );
};

export default DarkModeButton;
