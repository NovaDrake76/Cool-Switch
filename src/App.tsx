import React, { useState } from "react";
import CoolSwitch from "./components/Switch";

const App: React.FC = () => {
  const [state, setState] = useState<"list" | "grid">("list");
  const [color, setColor] = useState<"blue" | "red">("blue");
  const [disableSwitch, setDisableSwitch] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const buttons = [
    {
      label: "Color",
      onClick: () => setColor(color === "blue" ? "red" : "blue"),
    },
    {
      label: "Dark Mode",
      onClick: () => setDarkMode(!darkMode),
    },
    {
      label: "Disabled",
      onClick: () => setDisableSwitch(!disableSwitch),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <CoolSwitch
        state={state}
        setState={setState}
        color={color}
        disabled={disableSwitch}
        darkMode={darkMode}
      />
      <div className="flex mt-4 gap-2 flex-col md:flex-row">
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={button.onClick}
            >
              Toggle {button.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
