import "./ButtonWrapper.scss"

import React, { ReactNode } from "react"

interface IButtonWrapperProps {
  children: ReactNode
}

export const ButtonWrapper = (props: IButtonWrapperProps) => {
  return <div className="form-button-wrapper">{props.children}</div>
}
