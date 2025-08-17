import React from "react";

const SidebarTabs = ({ tabs, activeTab, setActiveTab }) => (
  <>
    {tabs.map((tab) => (
      <div
        key={tab.key}
        onClick={() => setActiveTab(tab.key)}
        style={{
          padding: 16,
          cursor: "pointer",
          background: activeTab === tab.key ? "#bbdefb" : "transparent",
          borderRadius: "12px",
          margin: "8px",
          transition: "background 0.2s",
        }}
      >
        {tab.label}
      </div>
    ))}
  </>
);

export default SidebarTabs;