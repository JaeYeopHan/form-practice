import React, { ChangeEvent } from 'react'

import { FormOption } from '@/features/form'

interface IFormSelectBoxProps {
  onUpdate: (value: string) => void
  options: FormOption[]
}

export const FormSelectBox = (props: IFormSelectBoxProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    props.onUpdate(e.target.value)
  }

  return (
    <>
      <label htmlFor="selectbox-option" />
      <select
        name="selectbox"
        id="selectbox-option"
        required={true}
        onChange={handleChange}
      >
        {props.options.map(({ id, text }) => (
          <option key={id} value={text}>{text}</option>
        ))}
      </select>
    </>
  )
}