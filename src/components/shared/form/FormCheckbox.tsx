import React, { Fragment, useEffect } from "react";

import { FormOptionByIdType } from "@/features/form";
import { useInputForm } from "@/hooks/useInputForm";

interface IFormCheckboxProps {
  onUpdate: (value: string) => void
  optionsById: FormOptionByIdType;
  optionIds: number[]
}

export const FormCheckbox = (props: IFormCheckboxProps) => {
  const { optionIds, optionsById, onUpdate } = props
  const { value, setId } = useInputForm(optionsById, true)

  useEffect(() => {
    onUpdate(value)
  }, [onUpdate, value])

  return (
    <>
      {optionIds.map(id => {
        const { text } = optionsById[id]

        return (
          <Fragment key={id}>
            <input
              id={`${id}`}
              name="checkbox_form_options"
              value={text}
              type="checkbox"
              className="form-option"
              onChange={() => setId(id)}
            />
            <label htmlFor={`${id}`}>{text}</label>
          </Fragment>
        )
      })}
    </>
  );
};
