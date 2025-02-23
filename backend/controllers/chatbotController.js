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
      model: "gpt-3.5-turbo",
      prompt: `A patient describes their symptoms as: ${symptoms}. Provide a possible medical recommendation.`,
      max_tokens: 100,
    });

    console.log('Response from OpenAI:', response.data.choices[0].text.trim());

    res.json({ reply: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error("Error:", error.message); 
    res.status(500).json({ error: error.message });
  }
};

export default chatWithBot;