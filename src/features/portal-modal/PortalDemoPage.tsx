import {Modal} from "./components/Modal.tsx";
import {useState} from "react";

export const PortalDemoPage = () => {
  const [isOuterModalOpen, setIsOuterModalOpen] = useState(false);
  const [isInnerModalOpen, setIsInnerModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOuterModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isOuterModalOpen} onClose={() => setIsOuterModalOpen(false)}>
        Outer Modal Content
        <button onClick={() => setIsInnerModalOpen(true)}>Open Modal</button>
        <Modal isOpen={isInnerModalOpen} onClose={() => setIsInnerModalOpen(false)}>
          Inner Modal Content
        </Modal>
      </Modal>
    </>
  )
}
