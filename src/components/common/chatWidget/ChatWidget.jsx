import { useState, useRef, useEffect } from "react";
import { sendMessageToClaude } from "../../../utils/claudeApi";
import "./chatWidget.css";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue("");

    // Add user message to chat
    const newMessages = [
      ...messages,
      { role: "user", content: userMessage }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Get conversation history for Claude (exclude the welcome message)
      const conversationHistory = newMessages
        .slice(1) // Skip the initial welcome message
        .map(msg => ({
          role: msg.role,
          content: msg.content
        }));

      // Get Claude's response
      const response = await sendMessageToClaude(userMessage, conversationHistory.slice(0, -1));

      // Add Claude's response to chat
      setMessages([
        ...newMessages,
        { role: "assistant", content: response }
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Lo siento, hubo un error. Por favor, intenta de nuevo." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Button */}
      <button 
        className="chat-button" 
        onClick={toggleChat}
        aria-label="Abrir chat"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Asistente Virtual</h3>
            <span className="chat-status">● En línea</span>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.role === "user" ? "user-message" : "assistant-message"}`}
              >
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message assistant-message">
                <div className="message-content typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
              className="chat-input"
            />
            <button 
              type="submit" 
              disabled={isLoading || !inputValue.trim()}
              className="chat-send-button"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
};
