import React, { Fragment, useEffect } from "react";

import { FormOptionByIdType } from "@/features/form";
import { useInputForm } from "@/hooks/useInputForm";

interface IFormRadioProps {
  onUpdate: (value: string) => void
  optionsById: FormOptionByIdType;
  optionIds: number[]
}

export const FormRadio = (props: IFormRadioProps) => {
  const { optionIds, optionsById, onUpdate } = props
  const { value, setId } = useInputForm(optionsById)

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
              name="radio_form_options"
              value={text}
              type="radio"
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
