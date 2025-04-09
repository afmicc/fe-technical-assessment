import { useContext } from "react";

import { StaticDataContext } from "./StaticData";

export const useStaticData = () => {
  const context = useContext(StaticDataContext);

  if (!context) {
    throw new Error("useStaticData must be used within a StaticDataProvider");
  }

  return context;
};
