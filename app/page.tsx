import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y4">
      <h1>Only auth users cat see this</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
