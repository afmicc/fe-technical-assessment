import { Workflow } from "../../types";
import { Icon } from "../Icon";
import { LastUpdate } from "../LastUpdate";
import { Tags } from "../Tags";

type Response = {
  count: number;
  data: Array<Workflow>;
};

// TODO: replace
const items: Response = {
  count: 2,
  data: [
    {
      type: "workflow",
      name: "🌟 Star Tracker",
      tags: [
        { name: "analytics", color: "#1E90FF" },
        { name: "tracking", color: "#FF4500" },
      ],
      lastUpdate: 1743553440970,
      id: 101,
    },
    {
      type: "agent",
      name: "📈 Growth Guru",
      tags: [
        { name: "marketing", color: "#32CD32" },
        { name: "business", color: "#FF6347" },
        { name: "analytics", color: "#1E90FF" },
      ],
      lastUpdate: 1744071822048,
      id: 102,
    },
    {
      type: "workflow",
      name: "🌟 Star Tracker",
      tags: [],
      lastUpdate: 1743553440970,
      id: 106,
    },
    {
      type: "agent",
      name: "📈 Growth Guru",
      tags: [{ name: "Content Creation", color: "#32CD32" }],
      lastUpdate: 1744071822048,
      id: 105,
    },
  ],
};

export const Table = () => (
  <div className="h-full px-5">
    <table className="w-full">
      <Headers />
      <Rows data={[...items.data, ...items.data]} />
    </table>
  </div>
);

const Headers = () => (
  <thead className="text-sm font-semibold">
    <tr>
      <th className="text-left w-28 py-4 pl-4 ">Type</th>
      <th className="text-left w-auto py-4 pl-4">Name</th>
      <th className="text-left w-44 py-4 pl-4">Tags</th>
      <th className="text-left w-36 py-4 pl-4">Last Update</th>
      <th className="text-center py-4 w-20">Actions</th>
    </tr>
  </thead>
);

const Rows = ({ data }: { data: Workflow[] }) => (
  <tbody className="text-sm">
    {data.map((item) => (
      <tr key={item.id} className="border-t border-zinc-950/10">
        <Row item={item} />
      </tr>
    ))}
  </tbody>
);

const Row = ({ item }: { item: Workflow }) => (
  <>
    <td className="text-zinc-500 capitalize py-5 pl-4">{item.type}</td>
    <td className="py-5 pl-4">{item.name}</td>
    <td className="py-5 pl-4">
      <Tags tags={item.tags} />
    </td>
    <td className="text-slate-500 py-5 pl-4">
      <LastUpdate lastUpdate={item.lastUpdate} />
    </td>
    <td className="flex justify-center py-5 gap-2">
      <button className="rounded-md bg-zinc-950/10 p-1">
        <Icon icon="pencil" className="w-3 h-3" />
      </button>
      <button className="rounded-md bg-zinc-950/10 p-1">
        <Icon icon="trash" className="w-3 h-3" />
      </button>
    </td>
  </>
);
