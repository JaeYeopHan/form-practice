import React from "react";

interface IFormRadioProps {
  itemId: number;
  id: number;
  text: string;
}

export const FormRadio = (props: IFormRadioProps) => {
  const { id, text } = props

  return (
    <>
      <input
        id={`radio_${id}`}
        name={'radio_form_options'}
        value={text}
        type="radio"
        className="form-option"
      />
      <label htmlFor={`radio_${id}`}>{text}</label>
    </>
  );
};
