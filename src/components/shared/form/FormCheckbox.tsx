import "./FormCheckbox.scss"

import React from "react"

import { FormOption } from "@/features/form"
import Map from "@/utils/mapUtils"

const DELIMITER = ","

interface IFormCheckboxProps {
  onUpdate: (value: string) => void
  options: FormOption[]
  answer: string
}

export const FormCheckbox = (props: IFormCheckboxProps) => {
  const handleClickLabel = (id: number, text: string) => {
    const value = Object.values(Map.toggle(id, text)).join(DELIMITER)

    props.onUpdate(value)
  }
  const isChecked = (text: string) => {
    return props.answer?.split(DELIMITER)?.indexOf(text) > -1
  }

  return (
    <>
      {props.options.map(({ id, text }) => (
        <div key={id} className="form-option">
          <input
            id={`${id}`}
            name="checkbox_form_options"
            value={text}
            type="checkbox"
            checked={isChecked(text)}
            onChange={() => handleClickLabel(id, text)}
          />
          <label htmlFor={`${id}`}>{text}</label>
        </div>
      ))}
    </>
  )
}
