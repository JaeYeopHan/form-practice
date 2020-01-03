import React, { Fragment } from "react";

import { FormOption } from "@/features/form";
import Map from '@/utils/mapUtils'

interface IFormCheckboxProps {
  onUpdate: (value: string) => void
  options: FormOption[]
}

export const FormCheckbox = (props: IFormCheckboxProps) => {
  const handleChange = (id: number, text: string) => {
    const value = Object.values(Map.toggle(id, text)).join(',')

    props.onUpdate(value)
  }

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
            onChange={() => handleChange(id, text)}
          />
          <label htmlFor={`${id}`}>{text}</label>
        </Fragment>
      ))}
    </>
  );
};
