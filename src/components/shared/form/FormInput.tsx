import "./FormInput.scss"

import React, { ChangeEvent } from "react"

interface IFormInputProps {
  onUpdate: (value: string) => void
  answer: string
}

export const FormInput = (props: IFormInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    props.onUpdate(e.target.value)
  }

  return (
    <div className="form-input">
      <label htmlFor="text_input" />
      <input
        id="text_input"
        type="text"
        autoFocus={true}
        required={true}
        onChange={handleChange}
        value={props.answer || ""}
      />
    </div>
  )
}
