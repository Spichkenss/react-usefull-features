import {createPortal} from "react-dom";
import {PropsWithChildren} from "react";

interface ModalProps extends PropsWithChildren {
  element?: HTMLElement;
}

export const Portal = ({children, element = document.body}: ModalProps) => {
  return createPortal(children, element)
}
