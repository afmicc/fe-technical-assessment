import { Pencil } from "./Pencil";
import { Plus } from "./Plus";
import { Trash } from "./Trash";

export const icons: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  [Pencil.toString()]: Pencil,
  [Plus.toString()]: Plus,
  [Trash.toString()]: Trash,
};
