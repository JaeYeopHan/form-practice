import React, { MouseEventHandler, ReactNode } from "react"

interface IButtonProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  isDisabled?: boolean
}

export const Button = (props: IButtonProps) => {
  return (
    <button onClick={props.onClick} disabled={props.isDisabled}>
      {props.children}
    </button>
  )
}
