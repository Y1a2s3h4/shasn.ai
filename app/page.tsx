"use client";
import Image from "next/image";
import Supremo from "@/assets/supremo.jpg";
import Idealist from "@/assets/Idealist.jpg";
import Capitalist from "@/assets/capitalist.jpg";
import Showman from "@/assets/showman.jpg";
import { ShasnCharactersEnum, ShasnCharactersMapType } from "./types/app";
import { getRandomInt } from "./utils";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const ShasnCharactersMap: ShasnCharactersMapType = {
  Supremo: {
    name: "Supremo",
    description: "The Supremo",
    image: Supremo,
  },
  Idealist: {
    name: "Idealist",
    description: "The Idealist",
    image: Idealist,
  },
  Capitalist: {
    name: "Capitalist",
    description: "The Capitalist",
    image: Capitalist,
  },
  Showman: {
    name: "Showman",
    description: "The Showman",
    image: Showman,
  },
};

const ShasnCharactersArr: ShasnCharactersEnum[] = [
  ShasnCharactersEnum.Supremo,
  ShasnCharactersEnum.Idealist,
  ShasnCharactersEnum.Capitalist,
  ShasnCharactersEnum.Showman,
];

const randomVal = getRandomInt();
const randomCharacter =
  ShasnCharactersMap[`${ShasnCharactersArr[randomVal]}`].image;
const randomCharacterDesc =
  ShasnCharactersMap[`${ShasnCharactersArr[randomVal]}`].description;

export default function Home() {
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<
    Array<{ id: string; content: string; role: "user" | "assistant" }>
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    // Create user message
    const userMessage = {
      id: Date.now().toString(),
      content: prompt,
      role: "user" as const,
    };

    // Create loading message
    const loadingMessage = {
      id: (Date.now() + 1).toString(),
      content: "",
      role: "assistant" as const,
    };

    // Update messages state first (using functional update to ensure we have latest state)
    setMessages(prevMessages => [...prevMessages, userMessage, loadingMessage]);
    
    // Clear input field
    setPrompt("");
    setLoading(true);

    try {
      // Store the current messages plus the new user message to send to API
      const currentMessages = [...messages, userMessage];
      
      // Call the API route
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: currentMessages,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("Failed to get reader from response");
      }

      const decoder = new TextDecoder();
      let assistantMessage = "";

      let done = false;
      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;
        if (value) {
          const chunk = decoder.decode(value);
          assistantMessage += chunk;

          // Update the loading message with the current content
          setMessages(prevMessages =>
            prevMessages.map(msg =>
              msg.id === loadingMessage.id
                ? { ...msg, content: assistantMessage }
                : msg
            )
          );
        }
      }

      // Replace the loading message with the complete assistant message
      setMessages(prevMessages =>
        prevMessages
          .filter(msg => msg.id !== loadingMessage.id)
          .concat({
            id: (Date.now() + 2).toString(),
            content: assistantMessage,
            role: "assistant" as const,
          })
      );
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("An error occurred while fetching the response.");

      // Update the loading message to show error.
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === loadingMessage.id
            ? {
                ...msg,
                content: "⚠️ Unable to process request. Please try again.",
              }
            : msg
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div className={`grid grid-cols-1 ${messages.length === 0 ? "md:grid-cols-[50%_50%]" : ""} grid-rows-1 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section className={`${messages.length === 0 ? "hidden md:flex" : "hidden"} justify-center items-center h-full w-full p-4 md:p-0`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={randomCharacter}
          alt={randomCharacterDesc}
          className="max-w-full h-auto max-h-[300px] md:max-h-none"
        />
      </motion.section>
      <motion.main
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center h-full w-full p-4"
      >
        <motion.div className={`w-full ${messages.length === 0 ? "max-w-[550px]" : "max-w-[850px]"} flex flex-col gap-7 items-center justify-center`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-xl md:text-2xl font-bold text-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              staggerChildren: 0.05,
              delayChildren: 0.2,
            }}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {Array.from("Shasn.ai: Your Quick Rulebook & Strategy Hub").map(
              (letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                  }}
                >
                  {letter}
                </motion.span>
              )
            )}
          </motion.h1>
                    
          <motion.div 
            ref={messagesEndRef} 
            className={`chatContainer ${messages.length === 0 ? "hidden" : "w-full h-full min-h-[500px] max-h-[500px] overflow-y-auto flex flex-col gap-4 p-4"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {messages.map((message) => (
              <motion.div 
                key={message.id} 
                className="flex flex-col gap-4"
                initial={false} // Prevent initial animation for existing messages
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                // Only apply entry animation for new messages, not streaming updates
                {...(message.content === "" && loading ? {} : {
                  initial: { opacity: 0, x: message.role === "user" ? 20 : -20 }
                })}
              >
                {message.role === "user" ? (
                  <motion.div 
                    className="flex items-start gap-3 justify-end"
                    layout
                  >
                    <motion.div 
                      className="flex-1 bg-blue-500 rounded-lg p-4 max-w-[80%]"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm text-white">{message.content}</p>
                    </motion.div>
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <span className="text-white text-sm">U</span>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="flex items-start gap-3"
                  >
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-white text-sm">AI</span>
                    </motion.div>
                    <motion.div 
                      className="flex-1 bg-gray-100 rounded-lg p-4 max-w-[80%] text-black"
                    >
                      <div className="prose prose-sm max-w-none">
                        {message.content === "" && loading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
                            <span>Thinking...</span>
                          </div>
                        ) : (
                          <ReactMarkdown>{message.content}</ReactMarkdown>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
          <form onSubmit={handleSubmit} className="relative w-full">
            <input
              className="w-full bg-transparent placeholder:text-foreground text-foreground text-sm border-2 border-foreground rounded-xl ps-10 py-3.5 transition duration-300 ease focus:outline-none focus:border-foreground hover:border-foreground shadow-sm focus:shadow"
              ref={inputRef}
              id="prompt"
              name="prompt"
              autoComplete="off"
              placeholder="Can I use multiple resources in one turn?"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button className="absolute left-3 top-3.5" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="var(--foreground)"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </motion.div>
      </motion.main>
    </motion.div>
  );
}