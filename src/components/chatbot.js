import React, { useState } from "react";

const Chatbot = ({ onSubmit }) => {
  const [symptoms, setSymptoms] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(symptoms);
  };

  return (
    <div>
      <h2>Enter your symptoms</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Enter symptoms here"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Chatbot;
