import { useState } from "react";

const NOT_SELECT = -1;

export function useInputForm(optionsById: any, isMultiSelect: boolean = false) {
  const [selectedId, setId] = useState(NOT_SELECT);
  const value = optionsById[selectedId]?.text || null;

  return {
    value,
    setId
  };
}
