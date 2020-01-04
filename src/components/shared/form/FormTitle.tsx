import React, { ReactNode } from "react"

interface IFormTitleProps {
  children: ReactNode
}

export const FormTitle = (props: IFormTitleProps) => {
  return <h2 className="title">{props.children}</h2>
}
