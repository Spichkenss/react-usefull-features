import {PropsWithChildren} from "react";
import {useTabs} from "./Tabs.context.tsx";

interface TabPanelProps extends PropsWithChildren {
  name: string;
}

export const TabPanel = ({name, children}: TabPanelProps) => {
  const {activeTab} = useTabs();

  if (activeTab !== name) {
    return null;
  }

  return <div className="tab-panel">{children}</div>;
};
