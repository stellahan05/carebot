import openai from "../../../lib/openaiConfig";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { symptoms } = req.body;

        if (!symptoms) {
            return res.status(400).json({ error: "Symptoms are required" });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful medical chatbot designed to streamline the hospital check-in process, providing possible recommendations based on symptoms, clearly and within 100 tokens." },
                { role: "user", content: `Me, a patient describes their symptoms as: ${symptoms}. Provide a clear possible medical recommendation, such as what steps to take, whether it is necessary to be admitted to the hospital.` }
            ],
            max_tokens: 100,
            temperature: 0.3,
        });

        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: error.message });
    }
}
