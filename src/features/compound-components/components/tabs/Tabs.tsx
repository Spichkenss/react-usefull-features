import {PropsWithChildren} from "react";
import {TabsContextProvider} from "./Tabs.context.tsx";
import "./Tabs.css";

interface TabsProps extends PropsWithChildren {
}

export const Tabs = ({children}: TabsProps) => {
  return (
    <TabsContextProvider>
      <div className={'tabs'}>
        {children}
      </div>
    </TabsContextProvider>
  )
}
