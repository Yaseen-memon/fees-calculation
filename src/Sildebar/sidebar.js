import React, { useState } from "react";
import SidebarTabs from "./SidebarTab";
import SidebarUser from "./SidebarUser";
import Home from "../fees.calculation";
import Settings from "../Feeswithdue";


const tabs = [
    { key: "home", label: "Fees Calculation" },
    { key: "profile", label: "Fees with Due" },
    // { key: "settings", label: "Settings" },
];

const user = {
    name: "Test User",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
};

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].key);

    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                width: "100vw",
                margin: 0,
                padding: 0,
                background: "#f5f5f5",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    width: 300,
                    borderRight: "1px solid #ccc",
                    height: "100vh",
                    margin: "0 24px 0 0",
                    background: "#e3f2fd",
                    borderRadius: "0 20px 20px 0",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                }}
            >
                <SidebarUser user={user} />
                <SidebarTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div style={{ padding: 24, flex: 1, height: "100vh", overflow: "auto" }}>
                {/* Tab ke hisaab se component render */}
                {activeTab === "home" && <Home />}
                {activeTab === "profile" && <Settings />}
                {/* {activeTab === "settings" && <div>Settings Content</div>} */}
            </div>
        </div>
    );
};

export default Sidebar;