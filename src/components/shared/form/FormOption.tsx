import React from "react";

interface IFormOptionProps {
  formType: number;
  id: number;
  text: string;
}

export const FormOption = ({ formType, id, text }: IFormOptionProps) => {
  return (
    <>
      <label htmlFor={`${formType}_${id}`} />
      <input id={`${formType}_${id}`} type="checkbox" className="checkbox" />
      <div className="form-contents">{text}</div>
    </>
  );
};
