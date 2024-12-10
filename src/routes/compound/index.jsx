import clsx from "clsx";
import { useState, createContext, useContext } from "react";

const TabsContext = createContext();

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ children }) {
  return <div className="tabs-list">{children}</div>;
}

function Tab({ index, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <button
      onClick={() => setActiveTab(index)}
      className={clsx(
        "tab",
        index === activeTab ? "tab-active" : "tab-inactive"
      )}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }) {
  const { activeTab } = useContext(TabsContext);
  return <div className="tab-panels">{children[activeTab]}</div>;
}

function TabPanel({ children }) {
  return <div>{children}</div>;
}

function CompoundPattern() {
  return (
    <main className="container">
      <h2>Themed Tabs</h2>

      <div className="compound">
        <Tabs>
          <TabsList>
            <Tab index={0}>Tab 1</Tab>
            <Tab index={1}>Tab 2</Tab>
            <Tab index={2}>Tab 3</Tab>
          </TabsList>
          <TabPanels>
            <TabPanel>
              <p>Content for Tab 1</p>
            </TabPanel>
            <TabPanel>
              <p>Content for Tab 2</p>
            </TabPanel>
            <TabPanel>
              <p>Content for Tab 3</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </main>
  );
}

export default CompoundPattern;
