import React from 'react'

interface IFormSelectOptionProps {
  text: string
}

export const FormSelectOption = (props: IFormSelectOptionProps) => {
  return (
    <option value={props.text}>{props.text}</option>
  )
}