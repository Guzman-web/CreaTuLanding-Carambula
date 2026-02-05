import Anthropic from "@anthropic-ai/sdk";

// Initialize the Anthropic client
const getClaudeClient = () => {
  const apiKey = import.meta.env.VITE_CLAUDE_API_KEY;
  
  if (!apiKey) {
    console.warn("Claude API key not found. Please set VITE_CLAUDE_API_KEY in your environment.");
    return null;
  }
  
  return new Anthropic({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true // Note: In production, API calls should go through a backend
  });
};

/**
 * Send a message to Claude and get a response
 * @param {string} userMessage - The user's message
 * @param {Array} conversationHistory - Previous messages in the conversation
 * @returns {Promise<string>} - Claude's response
 */
export const sendMessageToClaude = async (userMessage, conversationHistory = []) => {
  const client = getClaudeClient();
  
  if (!client) {
    return "Lo siento, el servicio de chat no está disponible en este momento. Por favor, configura tu API key de Claude.";
  }
  
  try {
    // Build the messages array with conversation history
    const messages = [
      ...conversationHistory,
      {
        role: "user",
        content: userMessage
      }
    ];
    
    // System prompt to define Claude's role as a shopping assistant
    const systemPrompt = `Eres un asistente de compras amigable y útil para una tienda en línea llamada "CreaTuLanding-Carambula". 
Tu trabajo es ayudar a los clientes con:
- Recomendaciones de productos
- Responder preguntas sobre productos
- Ayudar con el proceso de compra
- Brindar excelente servicio al cliente

Responde siempre en español de manera amigable y profesional. Si no conoces información específica sobre un producto, 
admítelo honestamente y ofrece ayudar de otra manera.`;
    
    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages
    });
    
    // Extract the text from Claude's response
    return response.content[0].text;
  } catch (error) {
    console.error("Error communicating with Claude:", error);
    return "Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.";
  }
};
