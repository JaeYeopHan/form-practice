import React, { Fragment } from "react";

import { FormOption } from "@/features/form";

interface IFormCheckboxProps {
  onUpdate: (value: string) => void
  options: FormOption[]
}

export const FormCheckbox = (props: IFormCheckboxProps) => {
  return (
    <>
      {props.options.map(({ id, text }) => (
        <Fragment key={id}>
          <input
            id={`${id}`}
            name="checkbox_form_options"
            value={text}
            type="checkbox"
            className="form-option"
            onChange={() => props.onUpdate(text)}
          />
          <label htmlFor={`${id}`}>{text}</label>
        </Fragment>
      ))}
    </>
  );
};
