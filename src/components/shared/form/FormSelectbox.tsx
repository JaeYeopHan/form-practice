import React, { ReactNode } from 'react'

interface IFormSelectBoxProps {
  children: ReactNode[]
}

export const FormSelectBox = (props: IFormSelectBoxProps) => {
  return (
    <>
      <label htmlFor="selectbox-option" />
      <select name="" id="selectbox-option">
        {props.children}
      </select>
    </>
  )
}