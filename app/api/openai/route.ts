import { NextRequest, NextResponse } from "next/server";
import { DataAPIClient } from "@datastax/astra-db-ts";
import { OpenAI } from "openai";

export async function POST(req: NextRequest) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);

    const db = client.db(process.env.ASTRA_DB_API_ENDPOINT || "", {
      namespace: process.env.ASTRA_DB_NAMESPACE,
    });
    const { messages } = await req.json();
    const latestMessage = messages[messages.length - 1]?.content;

    let docContent = "";

    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: latestMessage,
      encoding_format: "float",
    });

    try {
      const collection = await db.collection("shasnai");
  
      const queryVector = embedding.data[0].embedding;
      const cursor = collection.find({}, {
        sort:{
          $vector: queryVector,
        },
        limit: 10,
      });
      const results = await cursor.toArray();
      const contentMap = results?.map((result) => result.text);
      docContent = JSON.stringify(contentMap);
    } catch (error) {
      console.log("Error in Query:: ", error);
      docContent = "";
    }

    const template = {
      role: "system",
      content: `You are an expert on the board game SHASN, with complete mastery of all rules, mechanics, and strategic approaches to gameplay. You possess deep knowledge of:

      1. All game components and setup procedures for 2-5 players
      2. Complete understanding of turn structure and gameplay flow
      3. Mastery of resource management (Campaign Funds, Street Clout, Media Attention, Public Trust)
      4. Expert knowledge of all Ideology Card mechanics and their strategic implications
      5. Advanced understanding of all four Ideologues (The Capitalist, The Showman/Showstopper, The Supremo, The Idealist) and optimal paths to unlock their Level 4 and Level 6 powers
      6. Strategic approaches to forming and breaking majorities in different zones
      7. Tactical applications of gerrymandering to control the board
      8. Expert utilization of Conspiracy Cards for maximum advantage
      9. Strategic placement and manipulation of volatile zones and Headline Cards
      10. Advanced coalition formation and negotiation techniques
      11. Optimal voter placement and zone control strategies
      12. Adaptable approaches for different player counts and game scenarios

      When asked about any aspect of SHASN, you provide detailed, accurate information drawn from the official rulebook and supplement it with expert strategic analysis. You can explain complex game situations, evaluate different tactical options, suggest optimal strategies based on specific board states, and provide comprehensive guidance for players of all experience levels, from beginners to advanced competitors.

      You understand the nuances of balancing ideological consistency with pragmatic victory conditions, and can advise on both principled and pragmatic approaches to gameplay. Your knowledge extends to optimal resource trading, auction tactics, and the psychological aspects of player interaction inherent to SHASN's political theme.

      Use the below context to augment what you know about the Shasn game. The context will provide you with the rules of the game, and the rules of the game are the most important thing to know about the game. And please provide shrter and concise answer also format your response in proper markdown.
      ------------------------
      START CONTEXT
      ${docContent}
      END CONTEXT
      ------------------------
      QUESTION: ${latestMessage}
      ------------------------

`,
    };

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [template, ...messages],
      stream: true,
    });

    // Create a TransformStream to handle the streaming response
    const encoder = new TextEncoder();
    const stream = new TransformStream();

    // Process the stream in the background
    const processStream = async () => {
      const writer = stream.writable.getWriter();

      try {
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content || "";
          if (content) {
            await writer.write(encoder.encode(content));
          }
        }
      } catch (error) {
        console.error("Error processing stream:", error);
        await writer.write(encoder.encode("Error processing stream"));
      } finally {
        await writer.close();
      }
    };

    // Start processing the stream
    processStream();

    // Return the readable stream
    return new Response(stream.readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error: any) {
    console.log("Error in POST:: ", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error },
      { status: error?.status || 500 }
    );
  }
}
