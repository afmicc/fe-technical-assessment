import { createContext, useEffect, useState } from "react";

import { Workflow } from "../types";
import { getWorkflows } from "../services/AirOps";

type StaticDataContextType = {
  workflows: Workflow[];
  loading: boolean;
};

export const StaticDataContext = createContext<StaticDataContextType>({
  workflows: [],
  loading: false,
});

export const StaticDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getWorkflows().then((result) => {
      setWorkflows(result);
      setLoading(false);
    });
  }, []);

  return (
    <StaticDataContext.Provider value={{ workflows, loading }}>
      {children}
    </StaticDataContext.Provider>
  );
};
