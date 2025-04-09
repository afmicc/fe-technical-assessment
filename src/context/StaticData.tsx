import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { Workflow } from "../types";
import { getWorkflows } from "../services/AirOps";

type StaticDataContextType = {
  workflows: Workflow[];
  loading: boolean;
  search: (searchTerm: string) => void;
  sort: (sort: string) => void;
  destroy: (id: number) => void;
};

const initialState: StaticDataContextType = {
  workflows: [],
  loading: false,
  search: () => {},
  sort: () => {},
  destroy: () => {},
};

export const StaticDataContext =
  createContext<StaticDataContextType>(initialState);

export const StaticDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, search] = useState("");
  const [sortParam, setSortParam] = useState<
    "name" | "type" | "lastUpdate" | undefined
  >();

  useEffect(() => {
    setLoading(true);
    getWorkflows().then((result) => {
      setWorkflows(result);
      setLoading(false);
    });
  }, []);

  const results = useMemo(() => {
    const filtered = !searchTerm
      ? workflows
      : workflows.filter(
          ({ name, type, tags }) =>
            name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tags.some((tag) =>
              tag.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );

    if (sortParam === "name" || sortParam === "type") {
      return filtered.sort((a, b) => a[sortParam].localeCompare(b[sortParam]));
    } else if (sortParam === "lastUpdate") {
      return filtered.sort((a, b) => a.lastUpdate - b.lastUpdate);
    }

    return filtered;
  }, [searchTerm, workflows, sortParam]);

  const sort = useCallback((sort: string) => {
    if (sort === "Name") {
      setSortParam("name");
    } else if (sort === "Type") {
      setSortParam("type");
    } else if (sort === "Last Update") {
      setSortParam("lastUpdate");
    }
  }, []);

  const destroy = useCallback(
    (id: number) => {
      setWorkflows(workflows.filter((workflow) => workflow.id !== id));
    },
    [workflows]
  );

  return (
    <StaticDataContext.Provider
      value={{ workflows: results, loading, search, sort, destroy }}
    >
      {children}
    </StaticDataContext.Provider>
  );
};
