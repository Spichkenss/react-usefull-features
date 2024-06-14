import {FC, useCallback} from "react";
import {useEventListener} from "./useEventListener.tsx";

interface UseKeyDownProps {
  key: string,
  condition: boolean,
  callback: () => void
}

export const useKeyDown: FC<UseKeyDownProps> = ({key, callback, condition}) => {

  const onKeyPress = useCallback((event: KeyboardEvent) => {
    if (!condition) return;
    if (event.key === key) {
      callback();
    }
  }, [callback, key]);

  useEventListener('keydown', onKeyPress);

  return null;
};
