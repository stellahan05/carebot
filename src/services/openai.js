import axios from "axios";

const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer YOUR_OPENAI_API_KEY`,
  },
});

export const getSymptomAdvice = async (symptoms) => {
  const response = await openai.post("/completions", {
    model: "text-davinci-003",
    prompt: `Please provide a diagnosis or advice for the following symptoms: ${symptoms}`,
    max_tokens: 100,
  });
  return response.data.choices[0].text;
};
