import { DataAPIClient } from "@datastax/astra-db-ts";
import { OpenAI } from "openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import fs from "fs/promises";
import "dotenv/config";
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const loadData = async () => {
  const {
    OPENAI_API_KEY,
    ASTRA_DB_API_ENDPOINT: endpoint,
    ASTRA_DB_APPLICATION_TOKEN: token,
    ASTRA_DB_ID,
    ASTRA_DB_NAMESPACE,
    ASTRAS_DB_COLLECTION,
  } = process.env;

  if (!token || !endpoint) {
    throw new Error(
      "Environment variables ASTRA_DB_API_ENDPOINT and ASTRA_DB_APPLICATION_TOKEN must be defined."
    );
  }

  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });
  const astraDB = new DataAPIClient(token);

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 512,
    chunkOverlap: 100,
  });
  const db = await astraDB.db(endpoint, {
    namespace: ASTRA_DB_NAMESPACE,
  });
  await db.dropCollection("shasnai");
  const collection = await db.createCollection("shasnai", {
    vector: {
      dimension: 1536,
      metric: "dot_product",
    },
  });
  console.log({collection});
  try {
    const data = await fs.readFile(path.resolve(process.cwd(), "app/shasn.rules.txt"), "utf-8");
    console.log("File data: FOUND!!!");
    const chunks = await splitter.splitText(data.toString());
    for await (const chunk of chunks) {
      console.log("Chunk: Created!!!");
      const embedding = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: chunk,
        encoding_format: "float",
      });
      const vector = embedding.data[0].embedding;
      console.log("Vector: Created:: ", vector.length);
      const result = await collection.insertOne({
        $vector: vector,
        text: chunk,
      });
      console.log("Result: Inserted:: ", result);
    }
  } catch (error) {
    console.error("Error reading file:: ", error);
    console.log(path.resolve(process.cwd(), "app/shasn.rules.txt"));
  }
  //   const chunks = await splitter.splitText(data.toString());
//   const data = await collection.find();
//   console.log(data);
  // console.log(chunks);
};

loadData();
