import React from "react";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { Container } from "./_components/container";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default BrowseLayout;
