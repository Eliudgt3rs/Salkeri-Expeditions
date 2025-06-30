
import { z } from "zod";

export const SuggestDestinationInputSchema = z.object({
  interests: z.string().min(1, { message: "Please enter your interests." }).describe('The user\'s interests, e.g., wildlife, photography, beaches.'),
  travelerType: z.string().min(1, { message: "Please select a traveler type." }).describe('The type of travelers, e.g., solo, couple, family with kids.'),
  tripStyle: z.string().min(1, { message: "Please select a trip style." }).describe('The desired style of the trip, e.g., adventure, luxury, relaxation.'),
});
export type SuggestDestinationInput = z.infer<typeof SuggestDestinationInputSchema>;

export const SuggestDestinationOutputSchema = z.object({
  slug: z.string().describe('The slug of the suggested destination. Must be one of the provided slugs.'),
  reasoning: z.string().describe('A short, compelling reason why this destination was chosen for the user.'),
});
export type SuggestDestinationOutput = z.infer<typeof SuggestDestinationOutputSchema>;
