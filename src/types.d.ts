type Tag = {
  name: string;
  color: string;
};

type Workflow = {
  type: "workflow" | "agent";
  name: string;
  tags: Array<Tag>;
  lastUpdate: number;
  id: number;
};
