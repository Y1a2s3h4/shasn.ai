"use server"
import { DataAPIClient } from '@datastax/astra-db-ts';
import { OpenAI } from 'openai';

// Initialize OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, {
  namespace: process.env.ASTRA_DB_NAMESPACE
})
export async function fetchStreamedResponse(prompt: string) {
  const response = await openai.completions.create({
    model: 'gpt-3.5-turbo',
    prompt,
    max_tokens: 300,
    stream: true, // Enable streaming
  });

  // Return the readable stream directly to the client
  return response;
}
