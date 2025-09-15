import React from "react";

const SidebarUser = ({ user }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: "24px 16px 16px 16px",
      borderBottom: "1px solid #bbdefb",
      marginBottom: 8,
    }}
  >
    <img
      // src={user.avatar}
      // alt="Abc"
      // style={{
      //   width: 48,
      //   height: 48,
      //   borderRadius: "50%",
      //   marginRight: 16,
      //   objectFit: "cover",
      //   border: "2px solid #90caf9",
      // }}
    />
    <span style={{ fontWeight: "bold", fontSize: 18, color: "#1976d2" }}>
      {user.name}
    </span>
  </div>
);

export default SidebarUser;