import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, sectionsRef }) => {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {/* Pass sectionsRef to Navbar for smooth scrolling */}
      <Navbar sectionsRef={sectionsRef} />
      <div style={{ marginTop: 0 }}>{children}</div>
    </div>
  );
};

export default Layout;
