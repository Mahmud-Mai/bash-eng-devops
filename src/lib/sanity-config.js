import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "lqz0ui35r2xd8o01",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});
