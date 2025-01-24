import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-03-25', // use your API version
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

client.fetch('*[_type == "post"]').then(data => {
  console.log('Fetched data:', data);
}).catch(err => {
  console.error('Error:', err);
});
