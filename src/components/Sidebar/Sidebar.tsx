import { Icon } from "../Icon";

export const Sidebar = ({ className }: { className: string }) => (
  <nav className={`${className} border-r border-neutral-200`}>
    <div className="p-2 text-sm">
      <div className="flex items-center gap-2 mb-2">
        <Avatar />
        <p className="font-semibold">AirOps</p>
      </div>
      <button className="flex items-center justify-center border border-zinc-950/10 rounded-md w-full py-2">
        New
        <Icon icon="plus" className="w-3 h-3 fill-black ml-2" />
      </button>
    </div>
    <ul>
      <SidebarItem icon="database" label="Data Name" />
      <SidebarItem icon="stats" label="Monitoring" />
      <SidebarItem icon="settings" label="Settings" />
    </ul>
  </nav>
);

const Avatar = () => <div className="w-9 h-9 rounded-md bg-indigo-300"></div>;

const SidebarItem = ({ icon, label }: { icon: string; label: string }) => (
  <li className="px-2 py-1">
    <a href="#" className="flex items-center font-medium text-sm">
      <Icon icon={icon} className="w-3 h-3 mr-2" />
      {label}
    </a>
  </li>
);
