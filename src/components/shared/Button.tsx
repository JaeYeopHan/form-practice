import React, { MouseEvent, MouseEventHandler, ReactNode } from "react"
import { useDispatch } from "react-redux"

import { alertActions } from "@/features/alert"
import { FORM } from "@/features/form"

interface IButtonProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  isDisabled?: boolean
  useAlert?: boolean
}

export const Button = ({
  children,
  isDisabled,
  onClick,
  useAlert,
}: IButtonProps) => {
  const dispatch = useDispatch()
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) {
      dispatch(alertActions.open(FORM))
    } else {
      onClick(e)
    }
  }

  if (useAlert) {
    return <button onClick={handleClick}>{children}</button>
  }
  return (
    <button onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  )
}
