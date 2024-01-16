import React, { Suspense } from "react";
import { Navbar } from "./_components/navbar";
import { SideBarSkeleton, Sidebar } from "./_components/sidebar";
import { Container } from "./_components/container";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex h-full pt-20">
        <Suspense fallback={<SideBarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default BrowseLayout;
