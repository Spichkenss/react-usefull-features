import {RefObject, useCallback} from "react";
import {useEventListener} from "./useEventListener.tsx";

interface UseClickOutsideProps<T> {
  ref: RefObject<T>
  condition: boolean
  callback: () => void
}


export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  {ref, condition, callback}: UseClickOutsideProps<T>): void => {

  const clickOutSideCallback = useCallback((event: MouseEvent) => {
    if (!condition) return;
    const elem = ref?.current;
    if (!elem || elem.contains(event?.target as Node) || null) {
      return;
    }
    callback();
  }, [callback, ref]);

  useEventListener('mousedown', clickOutSideCallback);
};
