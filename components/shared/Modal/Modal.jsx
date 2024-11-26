import React, { useContext } from 'react'
import './modal.scss'
import Image from 'next/image'
import x from '../../../public/assets/close.png'
import { ModalCTX } from '@/context/ModalCTX'
export default function Modal() {
  const {modal, setModal} = useContext(ModalCTX)
  return (
<div className={`modal-overlay ${modal ? "active" : ''}`}>
  <div className="modal">
  
    <button onClick={()=> setModal(false)} className="close-btn"><Image src={x} alt='close'/></button>

  </div>
</div>
  )
}
