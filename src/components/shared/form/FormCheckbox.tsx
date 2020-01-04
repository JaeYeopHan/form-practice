import "./FormCheckbox.scss"

import React from "react"

import { FormOption } from "@/features/form"
import Map from "@/utils/mapUtils"

interface IFormCheckboxProps {
  onUpdate: (value: string) => void
  options: FormOption[]
}

export const FormCheckbox = (props: IFormCheckboxProps) => {
  const handleChange = (id: number, text: string) => {
    const value = Object.values(Map.toggle(id, text)).join(",")

    props.onUpdate(value)
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
            onChange={() => handleChange(id, text)}
          />
          <label htmlFor={`${id}`}>{text}</label>
        </div>
      ))}
    </>
  )
}
