'use server';
/**
 * @fileOverview An AI flow to generate different biography versions for Arjun.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const BioPersonaSchema = z.enum(['Default', 'Tech Innovator', 'Musical Prodigy', 'Future Entrepreneur']);
export type BioPersona = z.infer<typeof BioPersonaSchema>;

const BioGeneratorInputSchema = z.object({
  persona: BioPersonaSchema.describe("The persona to adopt for the biography."),
});
export type BioGeneratorInput = z.infer<typeof BioGeneratorInputSchema>;

const BioGeneratorOutputSchema = z.string().describe("The generated biography text.");
export type BioGeneratorOutput = z.infer<typeof BioGeneratorOutputSchema>;

const bioGeneratorFlow = ai.defineFlow(
  {
    name: 'bioGeneratorFlow',
    inputSchema: BioGeneratorInputSchema,
    outputSchema: BioGeneratorOutputSchema,
  },
  async ({ persona }) => {

    const personaPrompt = {
        'Default': "a talented 10-year-old creator passionate about technology, music, and sports.",
        'Tech Innovator': "a young but experienced software developer who loves turning complex problems into elegant software solutions using modern technologies.",
        'Musical Prodigy': "a dedicated musician with years of experience in both Hindustani classical singing and classical piano, who has won multiple awards.",
        'Future Entrepreneur': "an ambitious 10-year-old with dreams of creating his own hotel group and airline, inspired by world-class brands."
    }[persona];


    const llmResponse = await ai.generate({
      prompt: `You are a creative copywriter. Write a short, engaging, and inspiring "About Me" paragraph (2-3 sentences) for a 10-year-old named Arjun.
      
      Adopt the persona of: ${personaPrompt}.
      
      Keep the tone light, impressive, but not arrogant. Write in the first person (e.g., "I am...", "I love...").
      
      Do not use markdown or special formatting. Just return the plain text of the biography.`,
      model: 'googleai/gemini-2.5-flash',
      config: {
        temperature: 0.8, // Increase creativity
      }
    });

    return llmResponse.text;
  }
);

export async function generateBio(input: BioGeneratorInput): Promise<BioGeneratorOutput> {
  return bioGeneratorFlow(input);
}
