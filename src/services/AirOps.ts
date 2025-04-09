import AirOps from "@airops/airops-js";
import { z } from "zod";

import { WorkflowSchema } from "../types";

const ResponseSchema = z.array(WorkflowSchema);

type Output = {
  count: number;
  data: string;
};

export const getWorkflows = async (count: number = 10) => {
  const airopsInstance = new AirOps();

  const response = await airopsInstance.apps.execute({
    appId: "332ebae0-6c59-456b-aa63-08b0a7a2259a",
    version: 1,
    payload: {
      inputs: {
        count,
      },
    },
  });

  const result = await response.result();

  return parse(result.output as Output);
};

const parse = (output: Output) => {
  try {
    const data = JSON.parse(output?.data);
    const result = ResponseSchema.parse(data);
    return result;
  } catch (error) {
    console.error(error);

    return [];
  }
};
