import React, { ReactNode } from "react"

interface IFormWrapperProps {
  children: ReactNode
}

export const FormWrapper = (props: IFormWrapperProps) => {
  return <section className="form">{props.children}</section>
}
