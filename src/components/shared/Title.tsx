import "./Title.scss"

import React, { ReactNode } from "react"

interface ITitleProps {
  children: ReactNode
}

export const Title = (props: ITitleProps) => {
  return <h1 className="title">{props.children}</h1>
}
