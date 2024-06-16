'use client'
import { createClient } from 'contentful';
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY!,
});
let index =0;
  if(Math.random() < 0.5){
    index=1
  }
export async function fetchContent(slug: string) {
  
  const entries = await client.getEntries({
    content_type: 'pages',
    'fields.slug': slug,
  });
  return entries.items[index].fields;
}

export async function fetchCard(id: string) {
  const entry = await client.getEntries({content_type: 'cards'});
  
  // console.log(entry.items)
  return entry.items[index].fields;
}