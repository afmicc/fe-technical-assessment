import { Sidebar } from "../Sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-dvh w-dvw">
    <Sidebar className="w-1/6" />
    <main className="flex flex-col w-5/6">{children}</main>
  </div>
);
