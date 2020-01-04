import "./FormRadio.scss"

import React from "react"

import { FormOption } from "@/features/form"

interface IFormRadioProps {
  onUpdate: (value: string) => void
  options: FormOption[]
  answer: string
}

export const FormRadio = (props: IFormRadioProps) => {
  return (
    <>
      {props.options.map(({ id, text }) => (
        <div key={id} className="form-radio">
          <input
            id={`${id}`}
            name="radio_form_options"
            value={text}
            type="radio"
            onChange={() => props.onUpdate(text)}
            checked={text === props.answer}
          />
          <label htmlFor={`${id}`}>{text}</label>
        </div>
      ))}
    </>
  )
}
