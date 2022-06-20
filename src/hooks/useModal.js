import { useState } from 'react'

export const useModal = () => {
    
    const [isModalOpen, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }
  
  
    return {
        isModalOpen,
        closeModal,
        openModal,
    }
}
