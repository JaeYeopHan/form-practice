import React, { MouseEventHandler, ReactNode } from "react"

interface IButtonProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: IButtonProps) => {
  return <button onClick={props.onClick}>{props.children}</button>
}
