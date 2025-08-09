import { createPortal } from "react-dom"

function Modal() {
    const portal = document.getElementById("modal")
    if(!portal) return null
  return createPortal (
    <div>modal</div>
  , portal)
}

export default Modal