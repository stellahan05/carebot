import openai from "../../../lib/openaiConfig";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { chatHistory } = req.body;

        if (!chatHistory || chatHistory.length === 0) {
            return res.status(400).json({ error: "Chat history is required" });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful medical chatbot designed to assist Canadian users in evaluating their symptoms and providing home-based solutions. Provide clear, concise and emphathetic guidance on self-care options for mild symptoms within 300 characters. If the symptoms suggest a need for emergency care, advise seeking immediate medical attention." },
                ...chatHistory.map(msg => ({
                    role: msg.sender === "user" ? "user" : "assistant",
                    content: msg.message
                }))
            ],
            max_tokens: 300,
            temperature: 0.3,
        });

        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: error.message });
    }
}
