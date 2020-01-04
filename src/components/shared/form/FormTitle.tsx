import "./FormTitle.scss"

import React, { ReactNode } from "react"

interface IFormTitleProps {
  children: ReactNode
}

export const FormTitle = (props: IFormTitleProps) => {
  return <h2 className="form-title">{props.children}</h2>
}
