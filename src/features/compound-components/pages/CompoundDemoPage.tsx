import {Tabs} from "../components/tabs/Tabs.tsx";
import {TabsList} from "../components/tabs/TabsList.tsx";
import {Tab} from "../components/tabs/Tab.tsx";
import {TabPanel} from "../components/tabs/TabPanel.tsx";

export const CompoundDemoPage = () => {
  return (
    <Tabs>
      <TabsList>
        <Tab name="tab1">Tab 1</Tab>
        <Tab name="tab2">Tab 2</Tab>
        <Tab name="tab3">Tab 3</Tab>
      </TabsList>
      <TabPanel name="tab1">
        <p>Content for Tab 1</p>
      </TabPanel>
      <TabPanel name="tab2">
        <p>Content for Tab 2</p>
      </TabPanel>
      <TabPanel name="tab3">
        <p>Content for Tab 3</p>
      </TabPanel>
    </Tabs>
  )
}
