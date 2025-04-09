import { useStaticData } from "../../context";
import { Workflow } from "../../types";
import { Icon } from "../Icon";
import { LastUpdate } from "../LastUpdate";
import { Tags } from "../Tags";

export const Table = () => (
  <div className="h-full px-5">
    <table className="w-full">
      <Headers />
      <Rows />
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

const Rows = () => {
  const { workflows, loading } = useStaticData();

  return (
    <tbody className="text-sm  w-full">
      {loading ? (
        <tr className="border-t border-zinc-950/10">
          <td colSpan={5} className="py-5">
            <div
              role="status"
              className="flex justify-center items-center flex-1"
            >
              <span>Loading...</span>
            </div>
          </td>
        </tr>
      ) : (
        workflows.map((item) => (
          <tr key={item.id} className="border-t border-zinc-950/10">
            <Row item={item} />
          </tr>
        ))
      )}
    </tbody>
  );
};

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
