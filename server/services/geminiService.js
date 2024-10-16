const { GoogleGenerativeAI } = require("@google/generative-ai");
const geminiConfig = require("../config/geminiConfig");

const genAI = new GoogleGenerativeAI(geminiConfig.apiKey);

const contextPrompts = {
  education:
    "You are an educational assistant and your context is education.",
  environment:
    "You are an environmental awareness chatbot and your context is environment.",
  general:
    "You are a helpful assistant ",
};

const format =
  "Please provide a brief (that will consume under 100 tokens), informative response for given context only and dont add any asterisks or markdown characters.";

exports.generateResponse = async (messages, context = "general") => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const contextPrompt = contextPrompts[context] || contextPrompts.general;

  let formattedHistory = messages.map((msg) => ({
    role: msg.role,
    parts: [{ text: msg.content }],
  }));

  if (formattedHistory.length === 0 || formattedHistory[0].role !== "user") {
    formattedHistory.unshift({ role: "user", parts: [{ text: "Hello" }] });
  }

  formattedHistory.splice(1, 0, {
    role: "model",
    parts: [{ text: contextPrompt + format }],
  });

  const chat = model.startChat({
    history: formattedHistory.slice(0, -1), 
    generationConfig: {
      maxOutputTokens: 100, 
    },
  });

  const result = await chat.sendMessage(
    formattedHistory[formattedHistory.length - 1].parts[0].text
  );
  const response = await result.response;
  return response.text();
};
