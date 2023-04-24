// Switch.tsx
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaList } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

type StateType = "list" | "grid";

interface SwitchProps {
  state: StateType;
  setState: (state: StateType) => void;
  color: "blue" | "red";
  disabled?: boolean;
  darkMode?: boolean;
}

const CoolSwitch: React.FC<SwitchProps> = ({
  state,
  setState,
  color,
  disabled,
  darkMode,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setState(state === "list" ? "grid" : "list");
    }
  };

  return (
    <div
      className={`relative rounded-full border-8 transition-all  ${
        darkMode ? "border-[#413e3e]" : "border-white"
      } ${
        disabled
          ? `opacity-50 ${disabled ? "border-[#413e3e]" : "border-gray-400"}`
          : ""
      }`}
      style={{
        boxSizing: "border-box",
      }}
    >
      <div
        className={`w-24 h-12 rounded-full border-1 transition-all  ${
          darkMode
            ? "border-[#434040]  bg-[#2e2a2b] "
            : "border-[#f0eeeb]  bg-[#fdfbf7] "
        }  ${disabled ? "opacity-80" : ""}`}
      >
        {["grid", "list"].map((item, index) => {
          return (
            <Transition
              key={index}
              show={state === item}
              enter="transition-opacity duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {item === "list" ? (
                <FaList
                  className={`absolute top-2 right-2 text-3xl ${
                    !darkMode ? "text-[#585858]" : "text-[#fdfbf7]"
                  } `}
                />
              ) : (
                <BsGridFill
                  className={`absolute top-2 left-2 text-3xl ${
                    !darkMode ? "text-[#585858]" : "text-[#fdfbf7]"
                  }`}
                />
              )}
            </Transition>
          );
        })}
      </div>
      <div
        className={`absolute ${
          !isOpen
            ? "w-8 rounded-full"
            : darkMode
            ? "w-6 rounded-tr-full rounded-br-full rounded-bl-[230rem] rounded-tl-[230rem]"
            : "w-4 rounded-full"
        } h-8 border-2 ${
          color === "blue"
            ? darkMode
              ? "border-[#294198] bg-[#4b6eee]"
              : "border-[#87a1ff] bg-[#5269bc]"
            : "border-[#C4797D] bg-[#df4d55]"
        }   top-2 left-2 transform transition-all duration-300 ${
          disabled ? "cursor-auto" : "cursor-pointer"
        } ${isOpen ? (darkMode ? "translate-x-14" : "translate-x-14") : ""}`}
        onClick={handleToggle}
        style={{
          boxShadow:
            color === "blue"
              ? "0px 1px 20px #4062DD, inset 0.5px -1.5px 2px rgba(0, 0, 0, 0.25)"
              : "0px 1px 20px #D6455B, inset 0.5px -1.5px 2px rgba(0, 0, 0, 0.25)",
        }}
      />
    </div>
  );
};

export default CoolSwitch;
