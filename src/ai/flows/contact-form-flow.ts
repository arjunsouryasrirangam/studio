'use server';
/**
 * @fileoverview A Genkit flow for sending an email notification when the contact form is submitted.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ContactFormInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

// This is a simplified notification. In a real app, you would use a proper email service.
const contactFormFlow = ai.defineFlow(
  {
    name: 'contactFormFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    // This is a placeholder for a real email sending service.
    // We are just logging it to the console for demonstration purposes.
    console.log('New Contact Form Submission:');
    console.log(`Name: ${input.name}`);
    console.log(`Email: ${input.email}`);
    console.log(`Message: ${input.message}`);

    await ai.generate({
        prompt: `A new message has been submitted through the contact form on your portfolio website.

        From: ${input.name} (${input.email})
        Message:
        "${input.message}"
        
        This is just a notification. No action is required.`,
        model: 'googleai/gemini-2.5-flash',
    });
  }
);

// Export a wrapper function to be called from the client
export async function notifyOnContactSubmission(input: ContactFormInput): Promise<void> {
  return await contactFormFlow(input);
}
