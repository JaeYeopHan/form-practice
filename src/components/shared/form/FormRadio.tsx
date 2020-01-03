import React, { Fragment } from "react";

import { FormOption } from "@/features/form";

interface IFormRadioProps {
  onUpdate: (value: string) => void
  options: FormOption[]
}

export const FormRadio = (props: IFormRadioProps) => {
  return (
    <>
      {props.options.map(({ id, text }) => (
        <Fragment key={id}>
          <input
            id={`${id}`}
            name="radio_form_options"
            value={text}
            type="radio"
            className="form-option"
            onChange={() => props.onUpdate(text)}
          />
          <label htmlFor={`${id}`}>{text}</label>
        </Fragment>
      ))}
    </>
  );
};
