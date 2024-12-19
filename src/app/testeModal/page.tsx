'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/Modal'

export default function TesteModal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleSubmit = () => {
    console.log('submitado')
  }

  return (
    <>
      <div>Home</div>
      <Button onClick={handleOpenModal}>abrir modal</Button>
      <Modal.Root isOpen={isOpen}>
        <Modal.Header>
          <Modal.Title>TITULO MODAL</Modal.Title>
          <Modal.Action onClick={handleCloseModal} title="close">
            <div className="text-lg text-gray-700">X</div>
          </Modal.Action>
        </Modal.Header>
        <Modal.Content>
          <h2 className="text-yellow-400">TEXTO IMPORTANTE</h2>
        </Modal.Content>

        <Modal.Actions>
          <Modal.Action color="error" onClick={handleCloseModal}>
            Close
          </Modal.Action>
          <Modal.Action color="success" onClick={handleSubmit}>
            Salvar
          </Modal.Action>
        </Modal.Actions>
      </Modal.Root>
    </>
  )
}
