import { getRecommended } from "@/lib/recommended-service";
import { Recommended, RecommendedSkeleton } from "./recommended";
import { Toggle, ToggleSkeleton } from "./toggle";
import { SidebarWrapper } from "./wrapper";

export const Sidebar = async () => {
  const recommended = await getRecommended();

  return (
    <SidebarWrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={recommended} />
      </div>
    </SidebarWrapper>
  );
};

export const SideBarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <div className="space-y-4 pt-4 lg:pt-0">
        <RecommendedSkeleton />
      </div>
    </aside>
  );
};
