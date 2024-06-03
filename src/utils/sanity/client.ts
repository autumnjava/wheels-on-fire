import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'ga4fa7y6',
  dataset: 'production',
  apiVersion: '2024-06-03',
  // Set to `true` for production environments
  useCdn: true,
});
