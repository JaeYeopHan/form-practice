import React from "react";

interface IFormCheckboxProps {
  id: number;
  text: string;
}

export const FormCheckbox = ({ id, text }: IFormCheckboxProps) => {
  return (
    <>
      <label htmlFor={`checkbox_${id}`} />
      <input id={`checkbox_${id}`} type="checkbox" className="form-option" />
      <div className="form-contents">{text}</div>
    </>
  );
};
