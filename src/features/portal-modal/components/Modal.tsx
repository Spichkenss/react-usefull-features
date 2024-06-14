import {LazyWrapper} from "./LazyWrapper.tsx";
import {Portal} from "./Portal.tsx";
import {PropsWithChildren, useCallback, useRef} from "react";
import "./Modal.css";
import {useKeyDown} from "../hooks/useKeyDown.tsx";
import {useClickOutside} from "../hooks/useClickOutside.tsx";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({children, isOpen, onClose}: ModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClose = useCallback(() => onClose?.(), [onClose]);

  useKeyDown({key: "Escape", callback: handleClose, condition: isOpen});
  useClickOutside({ref, condition: isOpen, callback: handleClose});

  return (
    <LazyWrapper condition={isOpen}>
      <Portal>
        <div className={'modal'} data-state={isOpen ? 'opened' : 'closed'}>
          <div className={'overlay'}>
            <div className={'content'} ref={ref}>
              {children}
            </div>
          </div>
        </div>
      </Portal>
    </LazyWrapper>
  )
}
