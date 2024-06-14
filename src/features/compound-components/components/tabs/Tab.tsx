import {PropsWithChildren} from "react";
import {useTabs} from "./Tabs.context.tsx";

interface TabProps extends PropsWithChildren {
  name: string;
}

export const Tab = ({name, children}: TabProps) => {
  const {activeTab, setActiveTab} = useTabs();

  const handleClick = () => {
    setActiveTab(name);
  };

  return (
    <button
      className={`tab ${activeTab === name ? 'active' : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
