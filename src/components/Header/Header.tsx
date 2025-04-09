import { useStaticData } from "../../context";
import { Icon } from "../Icon";

export const Header = ({ className }: { className: string }) => {
  const { search, sort } = useStaticData();

  return (
    <div
      className={`${className} flex justify-between border-b-[.5px] border-gray-200 px-5 pt-5 pb-6`}
    >
      <h1 className="text-3xl font-bold">Workflows</h1>
      <div className="flex gap-2">
        <Sort
          options={["Type", "Name", "Last Update"]}
          onSort={(option) => sort(option)}
        />
        <Search onSearch={(term) => search(term)} />
      </div>
    </div>
  );
};

const Sort = ({
  options,
  onSort,
}: {
  options: string[];
  onSort: (option: string) => void;
}) => (
  <div className="relative inline-block text-left group">
    <button
      className="inline-flex justify-center items-center w-full px-3 py-2 text-sm font-semibold border-[.5px] border-gray-200 rounded-md"
      type="button"
      aria-haspopup="true"
      aria-expanded="true"
      aria-controls="menu-items"
    >
      <span>Sort</span>
      <Icon icon="caret" className="w-3 h-3 ml-2" />
    </button>
    <div className="hidden group-focus-within:block">
      <div
        className="absolute right-0 w-56 mt-1 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
        id="menu-items"
        role="menu"
      >
        {options.map((option) => (
          <button
            key={option}
            className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer"
            role="menuitem"
            onClick={() => onSort(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const Search = ({ onSearch }: { onSearch: (value: string) => void }) => (
  <div className="flex justify-center items-center w-full px-3 py-2 text-sm font-semibold border-[.5px] border-gray-200 rounded-md shadow-sm">
    <button className="mr-2">
      <Icon icon="search" className="w-3 h-3" />
    </button>
    <input
      type="text"
      placeholder="Search workflows"
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);
