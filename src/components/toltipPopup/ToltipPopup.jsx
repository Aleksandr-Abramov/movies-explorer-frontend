import React from 'react'
import './toltioPopup.css'
import { GlobalContext } from '../context/Context'
import { useContext } from 'react'

export default function ToltioPopup({ children }) {
  const { openCloseToltipPopup } = useContext(GlobalContext)

  return (
    <div className={`popup ${openCloseToltipPopup ? 'popup__open' : ''}`}>
      {children}
    </div>
  )
}
