import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: "wtrzag8v", 
  dataset: "production", 
  apiVersion: "2024-03-11",
  // Set to `true` for production environments
  useCdn: true,
});
