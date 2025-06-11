import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Chatbot = () => {
  const [symptoms, setSymptoms] = useState("");
  const [chatHistory, setChatHistory] = useState([]);  // Store chat history
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  const handleChat = async () => {
    if (symptoms.trim()) {
      // Add user message to chat history
      const newUserMessage = { sender: "user", message: symptoms };
      const updatedChatHistory = [...chatHistory, newUserMessage];
      setShowInitialMessage(false);

      setChatHistory(updatedChatHistory);
      setSymptoms(""); // Clear input field

      try {
        const res = await axios.post("/api/chatbotHandler", { chatHistory: updatedChatHistory });
        const botMessage = { sender: "bot", message: res.data.reply };

        setChatHistory(prevChat => [...prevChat, botMessage]);
      } catch (error) {
        console.error(error); // Log the error
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="chatbot-container">
      {showInitialMessage && <h1>How can I help you?</h1>}
      <div className="chat-messages">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-content">{msg.message}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <textarea
          placeholder="Describe your symptoms..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <button onClick={handleChat}>Submit</button>
      </div>
    </div>
  );
};

export default Chatbot;
