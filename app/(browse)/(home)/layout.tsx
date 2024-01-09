import React from "react";
import { Navbar } from "../_components/navbar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar/>
      <main className="flex h-full pt-20">{children}</main>
    </>
  );
};

export default BrowseLayout;
