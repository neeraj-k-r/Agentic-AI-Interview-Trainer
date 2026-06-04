const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Dynamic import for node-fetch to avoid ESM/CommonJS module conflicts
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const baseUrl = process.env.LANGFLOW_BASE_URL || 'http://127.0.0.1:7860';
        const flowId = process.env.LANGFLOW_FLOW_ID || '5f0a9c53-803c-4e86-8b37-a8b7b3196d40';
        const apiToken = process.env.LANGFLOW_API_TOKEN;

        const headers = {
            'Content-Type': 'application/json'
        };
        if (apiToken) {
            headers['Authorization'] = `Bearer ${apiToken}`;
        }

        const response = await fetch(`${baseUrl}/api/v1/run/${flowId}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                input_value: message,
                output_type: "chat",
                input_type: "chat"
            })
        });

        const data = await response.json();
        
        // ADD THIS LINE TO DEBUG:
        console.log("LANGFLOW JSON:", JSON.stringify(data, null, 2));
        
        // Safely traverse Langflow's deeply nested response object
        const aiMessage = 
            data?.outputs?.[0]?.outputs?.[0]?.outputs?.message?.message?.text ||
            data?.outputs?.[0]?.outputs?.[0]?.results?.message?.text ||
            "Error: Could not parse the AI response format from Langflow.";
        
        res.json({ reply: aiMessage });

    } catch (error) {
        console.error("Error communicating with Langflow:", error);
        res.status(500).json({ error: "Failed to connect to the AI engine." });
    }
});

// Added a fallback to port 5000 just in case the .env file is still acting up
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});