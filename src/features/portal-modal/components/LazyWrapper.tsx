import {Fragment, PropsWithChildren, useEffect, useState} from "react";

interface LazyWrapperProps extends PropsWithChildren {
  condition: boolean;
}

export const LazyWrapper = ({children, condition}: LazyWrapperProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(condition);
  }, [condition])

  if (!isMounted) return null;

  return <Fragment>{children}</Fragment>
}
