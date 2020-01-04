import React, { ReactNode } from "react"

interface ITitleProps {
  children: ReactNode
}

export const Title = (props: ITitleProps) => {
  return <h1>{props.children}</h1>
}
