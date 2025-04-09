import { Database } from "./Database";
import { Pencil } from "./Pencil";
import { Plus } from "./Plus";
import { Settings } from "./Settings";
import { Stats } from "./Stats";
import { Trash } from "./Trash";

export const icons: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  [Database.toString()]: Database,
  [Pencil.toString()]: Pencil,
  [Plus.toString()]: Plus,
  [Settings.toString()]: Settings,
  [Stats.toString()]: Stats,
  [Trash.toString()]: Trash,
};
