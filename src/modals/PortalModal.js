import React from 'react'
import { createPortal } from 'react-dom'
import '../styles/portals/Portal.css'

const PortalModal = ({ children }) => {
  return createPortal(
    <div className='portal'>
      {children}
    </div>, document.getElementById("root2")
  )
}

export { PortalModal }
