import React from "react";

interface IFormRadioProps {
  id: number;
  text: string;
}

export const FormRadio = ({ id, text }: IFormRadioProps) => {
  return (
    <>
      <label htmlFor={`radio_${id}`} />
      <input id={`radio_${id}`} type="radio" className="form-option" />
      <div className="form-contents">{text}</div>
    </>
  );
};
