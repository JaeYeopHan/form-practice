import React, { ChangeEvent } from "react"

interface IFormInputProps {
  onUpdate: (value: string) => void
}

export const FormInput = (props: IFormInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onUpdate(e.target.value)
  }

  return (
    <>
      <label htmlFor="text_input" />
      <input
        id="text_input"
        type="text"
        autoFocus={true}
        required={true}
        onChange={handleChange}
      />
    </>
  )
}
