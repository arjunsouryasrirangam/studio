// This file is machine-generated - edit with caution!
'use server';
/**
 * @fileOverview A flow to generate different versions of Arjun's biography based on the targeted audience or purpose.
 *
 * - generateTargetedBio - A function that generates a biography based on the target audience and other information.
 * - GenerateTargetedBioInput - The input type for the generateTargetedBio function.
 * - GenerateTargetedBioOutput - The return type for the generateTargetedBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTargetedBioInputSchema = z.object({
  targetAudience: z
    .string()
    .describe('The intended audience for the biography (e.g., tech recruiters, music fans, sports enthusiasts).'),
  purpose: z
    .string()
    .describe('The purpose of the biography (e.g., resume, concert program, sports introduction).'),
  additionalInformation: z
    .string()
    .optional()
    .describe('Any additional information to include in the biography.'),
});
export type GenerateTargetedBioInput = z.infer<typeof GenerateTargetedBioInputSchema>;

const GenerateTargetedBioOutputSchema = z.object({
  biography: z.string().describe('The generated biography.'),
});
export type GenerateTargetedBioOutput = z.infer<typeof GenerateTargetedBioOutputSchema>;

export async function generateTargetedBio(input: GenerateTargetedBioInput): Promise<GenerateTargetedBioOutput> {
  return generateTargetedBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTargetedBioPrompt',
  input: {schema: GenerateTargetedBioInputSchema},
  output: {schema: GenerateTargetedBioOutputSchema},
  prompt: `You are a biography writer. Arjun is a multi-talented individual.

  Based on the target audience and purpose, generate a biography for Arjun.

  Target Audience: {{{targetAudience}}}
  Purpose: {{{purpose}}}
  Additional Information: {{{additionalInformation}}}

  Biography:`,
});

const generateTargetedBioFlow = ai.defineFlow(
  {
    name: 'generateTargetedBioFlow',
    inputSchema: GenerateTargetedBioInputSchema,
    outputSchema: GenerateTargetedBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
