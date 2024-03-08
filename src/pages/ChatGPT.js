import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });

export const getChatGPTResponse = async (messages, additionalParams = {}) => {
    try {
      const completion = await openai.chat.completions.create({
        messages,
        model: 'gpt-3.5-turbo',
        ...additionalParams, // Include additional parameters
      });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error from OpenAI:', error);
    throw new Error('Error from OpenAI');
  }
};
