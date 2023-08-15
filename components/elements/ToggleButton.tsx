import { useState, useEffect, useMemo } from "react";

import AudioMic from "@/jsx-icons/AudioMic";
import VideoCamera from "@/jsx-icons/VideoCamera";

export default function ToggleButton({ type, disabled = false, title, onToggle }: ToggleButtonProps) {
  const [ toggle, setToggle ] = useState <boolean> (false);

  useEffect(() => typeof onToggle === "function" && onToggle(toggle), [toggle])

  return (
    <label className={`${disabled ? "disabled" : ""} inline-flex flex-col justify-center items-center`}>
      <button
        title={title}
        disabled={disabled}
        onClick={() => setToggle(n => !n)}
        className={`${
          toggle
          ? "border-0 bg-blue-500 text-white outline-none ring-4"
          : "border-2 hover:bg-blue-500 hover:text-white hover:border-0 hover:outline-none hover:ring-4"
        } transition ease-in-out w-[40px] h-[40px] text-gray-600 flex items-center justify-center border-gray-500 rounded-full`}>
        {useMemo(() => {
          switch(type) {
            case "audio": return <AudioMic />;
            case "video": return <VideoCamera />;
            default: return <></>;
          }
        }, [type])}
      </button>
      <span className={`${
        toggle
        ? "text-blue-500"
        : "text-gray-500"
      } px-2 text-sm font-bold mt-2 capitalize`}>{ type } { toggle ? "on" : "off" }</span>
    </label>
  );
}

interface ToggleButtonProps {
  type?: string;
  title?: string;
  disabled?: boolean;
  onToggle?: (state: boolean) => any;
};