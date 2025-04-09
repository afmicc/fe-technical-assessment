import { Caret } from "./Caret";
import { Database } from "./Database";
import { Pencil } from "./Pencil";
import { Plus } from "./Plus";
import { Search } from "./Search";
import { Settings } from "./Settings";
import { Stats } from "./Stats";
import { Trash } from "./Trash";

export const icons: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  [Caret.toString()]: Caret,
  [Database.toString()]: Database,
  [Pencil.toString()]: Pencil,
  [Plus.toString()]: Plus,
  [Search.toString()]: Search,
  [Settings.toString()]: Settings,
  [Stats.toString()]: Stats,
  [Trash.toString()]: Trash,
};
