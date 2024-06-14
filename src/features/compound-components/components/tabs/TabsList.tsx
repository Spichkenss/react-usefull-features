import {PropsWithChildren} from "react";

interface TabsListProps extends PropsWithChildren {
}

export const TabsList = ({children}: TabsListProps) => {
  return (
    <div className={'tabs-list'}>{children}</div>
  )
}
