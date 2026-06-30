const model = require("../ai/gemini");

exports.analyzeRisk = async (req, res) => {

    try {

        const {

            message,

            latitude,

            longitude

        } = req.body;

        const prompt = `

You are an Emergency AI.

User Message:

"${message}"

Latitude:

${latitude}

Longitude:

${longitude}

Return ONLY JSON.

Example:

{
"risk":90,
"category":"Medical",
"recommendation":"Call Ambulance immediately."
}

`;

        const result = await model.generateContent(prompt);

        const response = result.response.text();

        res.json({

            success: true,

            response

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};