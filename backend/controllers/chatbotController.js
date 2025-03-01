import openai from "../config/openaiConfig.js";

export const chatWithBot = async (req, res) => {
  try {
    const { symptoms } = req.body;


    // Validate input
    if (!symptoms) {
      console.log('No symptoms provided');
      return res.status(400).json({ error: 'Symptoms are required' });
    }

    console.log(symptoms); 

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful medical chatbot designed to streamline the hospital check-in process, providing possible recommendations based on symptoms, clearly and within 100 tokens." },
        { role: "user", content: `Me, a patient describes their symptoms as: ${symptoms}. Provide a clear possible medical recommendation, such as what steps to take, whether it is necessary to be admitted to the hospital.` }
      ],
      max_tokens: 100,
      temperature: 0.3,
    });

    console.log('Response from OpenAI:', response.choices[0].message.content);

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error.message); 
    res.status(500).json({ error: error.message });
  }
};

export default chatWithBot;