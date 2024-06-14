import {useEffect} from 'react';

type EventListenerHook = <K extends keyof HTMLElementEventMap>(
  eventType: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element?: HTMLElement | Document | Window
) => void;

export const useEventListener: EventListenerHook = (eventType, handler, element = window) => {
  useEffect(() => {
    if (!element || !(element instanceof HTMLElement || element instanceof Document || element instanceof Window)) {
      return;
    }

    element.addEventListener(eventType, handler as EventListener);
    
    return () => {
      element.removeEventListener(eventType, handler as EventListener);
    };
  }, [eventType, handler, element]);
};

