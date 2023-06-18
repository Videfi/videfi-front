import { useTagStore } from "@/services/store/tag.store";
import { formatDataFetch } from "@/utils/polybase.util";
import { useCollection, usePolybase } from "@polybase/react";
import React from "react";

export default function TagSelector() {
  const polybase = usePolybase();
  const { data: Tags } = useCollection(polybase.collection("Tag"));
  const { id: tagId, setTag } = useTagStore();
  return (
    <div className="mb-5 w-full">
      <button
        type="button"
        onClick={() => setTag({ id: "all", name: "All" })}
        className={`${
          tagId === "all"
            ? "bg-white text-vdf-gray cursor-default"
            : "bg-vdf-gray text-gray-200 hover:bg-vdf-purple hover:text-gray-100 hover:opacity-70 cursor-pointer"
        } inline-block px-2.5 py-1.5 mr-3 rounded-md text-sm`}      >
        All
      </button>
      {(Object.keys(formatDataFetch(Tags)).length > 0
        ? formatDataFetch(Tags)
        : []
      ).map((tag: any, index: number) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => setTag({ id: tag.id, name: tag.name })}
            className={`${
              tagId === tag.id
                ? "bg-white text-vdf-gray cursor-default"
                : "bg-vdf-gray text-gray-200 hover:bg-vdf-purple hover:text-gray-100 hover:opacity-70 cursor-pointer"
            } inline-block px-2.5 py-1.5 mr-3 rounded-md text-sm`}
          >
            {tag.name}
          </button>
        );
      })}
    </div>
  );
}
