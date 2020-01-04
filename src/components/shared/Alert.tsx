import "./Alert.scss"

import React, { ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootState } from "@/features"
import { ALERT, alertActions, AlertState } from "@/features/alert"

interface AlertProps {
  children: ReactNode
  id: string
}

export const Alert = (props: AlertProps) => {
  const dispatch = useDispatch()
  const alert = useSelector<RootState, AlertState>(state => state[ALERT])
  const isOpen = alert[props.id]

  const handleClickButton = () => dispatch(alertActions.close(props.id))

  return (
    <div className="dimmed" style={{ display: isOpen ? "block" : "none" }}>
      <div className="alert-wrapper">
        <h3 className="alert-title">Info</h3>
        <div className="alert-contents">{props.children}</div>
        <button className="alert-button" onClick={handleClickButton}>
          OK
        </button>
      </div>
    </div>
  )
}
