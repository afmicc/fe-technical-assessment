import { z } from "zod";

export const TagSchema = z.object({
  name: z.string(),
  color: z.string(),
});

export const WorkflowSchema = z.object({
  id: z.number(),
  name: z.string(),
  lastUpdate: z.number(),
  tags: z.array(TagSchema),
  type: z.enum(["workflow", "agent"]),
});

export type Workflow = z.infer<typeof WorkflowSchema>;
export type Tag = z.infer<typeof TagSchema>;
