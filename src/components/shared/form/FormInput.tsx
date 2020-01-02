import React from 'react'

interface IFormInputProps {
}

export const FormInput = (props: IFormInputProps) => {
  return (
    <>
      <label htmlFor="text_input" />
      <input id="text_input" type="text" autoFocus={true} />
    </>
  )
}