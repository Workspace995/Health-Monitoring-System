const { Configuration, OpenAIApi } = require("openai");

async function testOpenAI() {
  try {
    const configuration = new Configuration({
      apiKey: "your_openai_api_key", // Replace with your actual key for testing
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say hello!",
      max_tokens: 5,
    });

    console.log(response.data.choices[0].text.trim());
  } catch (error) {
    console.error("Error:", error.message);
  }
}

testOpenAI();
