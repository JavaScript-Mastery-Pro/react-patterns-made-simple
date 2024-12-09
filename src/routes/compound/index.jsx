import clsx from "clsx";
import { useState, createContext, useContext } from "react";

const TabsContext = createContext();

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ children }) {
  return (
    <div className="tabs-list flex border-b border-gray-700">{children}</div>
  );
}

function Tab({ index, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <button
      onClick={() => setActiveTab(index)}
      className={clsx(
        "px-4 py-2 rounded-none text-sm font-medium text-white transition-colors bg-black-100 hover:bg-black-200 focus:bg-black-200 focus:outline-none",
        index === activeTab
          ? "border-b-2 border-indigo-500 text-white"
          : "hover:text-gray-200"
      )}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }) {
  const { activeTab } = useContext(TabsContext);
  return (
    <div className="tab-panels mt-4 p-4 bg-black-200 rounded-lg text-gray-300">
      {children[activeTab]}
    </div>
  );
}

function TabPanel({ children }) {
  return <div>{children}</div>;
}

function CompoundPattern() {
  return (
    <main className="container">
      <h2>Themed Tabs</h2>

      <div className="my-5">
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
