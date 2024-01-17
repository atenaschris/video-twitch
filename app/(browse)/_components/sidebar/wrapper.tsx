"use client";

import { useSidebarStore } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { useIsClient } from "usehooks-ts";

interface WrapperProps {
  children: React.ReactNode;
}

export const SidebarWrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebarStore((state) => state);
  const isClient = useIsClient()

  if (!isClient)
    return (
      <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
        <ToggleSkeleton />
        <div className="space-y-4 pt-4 lg:pt-0">
          <RecommendedSkeleton />
        </div>
      </aside>
    );

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
