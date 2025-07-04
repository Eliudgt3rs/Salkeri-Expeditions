
'use server';
/**
 * @fileOverview A destination suggestion AI agent.
 *
 * This file exports the `suggestDestination` function, which suggests a travel
 * destination based on user preferences.
 */

import { ai } from '@/ai/genkit';
import { destinations } from '@/lib/destinations';
import {
  SuggestDestinationInput,
  SuggestDestinationInputSchema,
  SuggestDestinationOutput,
  SuggestDestinationOutputSchema,
} from '@/ai/schemas/suggestion-schemas';


// Prepare a string of destinations for the prompt
const destinationsText = destinations
  .map(d => `- ${d.title} (slug: ${d.slug}): ${d.description} ${d.longDescription}`)
  .join('\n');

const prompt = ai.definePrompt({
  name: 'suggestDestinationPrompt',
  input: { schema: SuggestDestinationInputSchema },
  output: { schema: SuggestDestinationOutputSchema },
  prompt: `You are an expert safari travel agent for Salkeri Expeditions. Your job is to recommend the perfect destination from the list below based on the user's preferences.

You must choose exactly one destination from this list.

Available Destinations:
${destinationsText}

User Preferences:
- Interests: {{{interests}}}
- Traveler Type: {{{travelerType}}}
- Trip Style: {{{tripStyle}}}

Based on the preferences, choose the single best destination. Provide a compelling, personalized reason for your choice (2-3 sentences), explaining why it's a great fit for the user.

Your response MUST be in the format defined by the output schema. Only return the slug of the chosen destination and your reasoning.`,
});

const suggestDestinationFlow = ai.defineFlow(
  {
    name: 'suggestDestinationFlow',
    inputSchema: SuggestDestinationInputSchema,
    outputSchema: SuggestDestinationOutputSchema,
  },
  async (input): Promise<SuggestDestinationOutput> => {
    if (!process.env.GOOGLE_API_KEY) {
      console.error("FATAL: GOOGLE_API_KEY environment variable is not set.");
      // Return a structured error instead of throwing
      return {
          slug: 'error-config',
          reasoning: "The AI service is not configured. Please ensure the GOOGLE_API_KEY is set in your environment variables."
      };
    }
    
    try {
        const { output } = await prompt(input);
        if (!output) {
            // The AI returned an empty response. This is a recoverable error.
            return {
                slug: 'error-generic',
                reasoning: "The AI returned an empty response. Please try again with different inputs."
            };
        }
        return output;
    } catch (e) {
        console.error("Error during AI suggestion flow:", e);
        // Return a structured error for other exceptions
        return {
            slug: 'error-generic',
            reasoning: "An unexpected error occurred while getting your AI suggestion. Please try again later."
        };
    }
  }
);

export async function suggestDestination(input: SuggestDestinationInput): Promise<SuggestDestinationOutput> {
  return suggestDestinationFlow(input);
}
