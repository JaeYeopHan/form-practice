import "./FormSelectbox.scss"

import React, { ChangeEvent } from "react"

import { FormOption } from "@/features/form"

interface IFormSelectBoxProps {
  onUpdate: (value: string) => void
  options: FormOption[]
  answer: string
}

export const FormSelectBox = (props: IFormSelectBoxProps) => {
  const defaultValue = "default"
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    props.onUpdate(e.target.value)
  }

  return (
    <div className="form-selectbox">
      <label htmlFor="selectbox-option" />
      <select
        name="selectbox"
        id="selectbox-option"
        required={true}
        onChange={handleChange}
        defaultValue={props.answer || defaultValue}
      >
        <option value={defaultValue} disabled={true}>
          --선택--
        </option>
        {props.options.map(({ id, text }) => (
          <option key={id} value={text}>
            {text}
          </option>
        ))}
      </select>
    </div>
  )
}
