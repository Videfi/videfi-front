import React from "react";

export default function SettingBar() {
  return (
    <>
      <div className="flex px-10 space-x-5 select-none">
        <p className="text-indigo-400 border-b-4 border-indigo-400 text-xl cursor-default">
          Display name
        </p>
        <p className="text-gray-400 hover:border-b-4 border-gray-400 text-xl cursor-not-allowed">
          Profile Picture
        </p>
      </div>
      <div className="w-full border-b-2 shadow-lg border-vdf-black" />
    </>
  );
}
