import { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [symptoms, setSymptoms] = useState("");
  const [response, setResponse] = useState("");


  const handleChat = async () => {
    try {
    const res = await axios.post("http://localhost:5001/api/chatbot", { symptoms });
    setResponse(res.data.reply);
  } catch (error) {
    console.error(error);  // Log the error
    alert("An error occurred. Please try again.");
  }
};

  return (
    <div>
      <h2>Medical Chatbot</h2>
      <textarea placeholder="Describe your symptoms..." onChange={(e) => setSymptoms(e.target.value)} />
      <button onClick={handleChat}>Submit</button>
      <p>{response}</p>
    </div>
  );
};

export default Chatbot;