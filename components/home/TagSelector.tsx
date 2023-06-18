import React from "react";

export default function TagSelector() {
  const mockTags = ["Music", "Game", "News", "Animal"];

  return (
    <div className="mb-5 w-full">
      <div className="inline-block px-3 py-1.5 mr-3 rounded-md bg-white text-vdf-gray text-sm  hover:bg-vdf-purple cursor-default">
        All
      </div>
      {mockTags.map((tag, index) => {
        return (
          <div
            key={index}
            className="inline-block px-2.5 py-1.5 mr-3 rounded-md bg-vdf-gray text-gray-200 text-sm cursor-pointer hover:bg-vdf-purple hover:text-gray-100 hover:opacity-70"
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
}
