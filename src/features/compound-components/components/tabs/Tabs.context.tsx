import {createContext, PropsWithChildren, useContext, useMemo, useState} from "react";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

interface TabsContextProviderProps extends PropsWithChildren {
}

export const TabsContextProvider = ({children}: TabsContextProviderProps) => {
  const [activeTab, setActiveTab] = useState('');

  const memoizedContextValue = useMemo(() => ({activeTab, setActiveTab}), [activeTab, setActiveTab]);

  return (
    <TabsContext.Provider value={memoizedContextValue}>
      {children}
    </TabsContext.Provider>
  )
};

export const useTabs = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('useTabs must be used within a TabsProvider');
  return ctx;
}
