'use server';
/**
 * @fileoverview A Genkit flow for searching and answering questions about the portfolio website's content.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import {
  techProjects,
  techSkills,
  favoriteRagas,
  pianoRepertoire,
  swimmingAchievements,
  badmintonAchievements,
} from '@/lib/placeholder-data';

// Define schemas for input and output
const SiteSearchInputSchema = z.object({
  query: z.string().describe('The user\'s question about the website content.'),
});
export type SiteSearchInput = z.infer<typeof SiteSearchInputSchema>;

const SiteSearchOutputSchema = z.string().describe('The answer to the user\'s query.');
export type SiteSearchOutput = z.infer<typeof SiteSearchOutputSchema>;

// Define a tool to get website content
const getWebsiteContent = ai.defineTool(
  {
    name: 'getWebsiteContent',
    description: 'Retrieves the main content of Arjun Sourya Srirangam\'s portfolio website. Use this tool to answer any questions about Arjun, his skills, projects, or achievements.',
    inputSchema: z.object({}),
    outputSchema: z.string(),
  },
  async () => {
    // This tool aggregates all the key information from the site into a single string.
    // In a real-world scenario, this could be a more sophisticated RAG (Retrieval-Augmented Generation) system.
    const content = `
      Arjun Sourya Srirangam is a 10-year-old creator passionate about technology, music, and sports.

      Tech Skills: ${techSkills.join(', ')}.
      
      Tech Projects:
      ${techProjects.map(p => `- ${p.title}: ${p.description} Available at: ${p.link}`).join('\n')}

      Singing:
      Arjun is a Hindustani classical vocalist. His favorite ragas are ${favoriteRagas.join(', ')}.
      He has won multiple prizes and is studying for P3 Bhushan at Sangeeti School of Music with Prajna Bhattacharya Ma'am.

      Piano:
      Arjun has been playing piano for 4 years. His repertoire includes:
      ${pianoRepertoire.map(p => `- '${p.title}' by ${p.composer}`).join('\n')}
      He learns from Aimilianos Starvinos Sir at Home Music Teachers NL.

      Swimming:
      ${swimmingAchievements.map(a => `- ${a.event} (${a.year}): ${a.result} - ${a.description}`).join('\n')}

      Badminton:
      Arjun has been playing for 1.5 years and is coached by Theo Sir, Hans Sir, and Jolanda Ma'am at BV Door Eendracht Omhoog. He has not won official prizes yet but is close to being promoted.

      Contact:
      Users can get in touch via the contact page.

      Website Requests:
      Arjun can build websites for others. Users can request a quote through the 'Request Website' page.
    `;
    return JSON.stringify(content);
  }
);


// Define the main flow
const siteSearchFlow = ai.defineFlow(
  {
    name: 'siteSearchFlow',
    inputSchema: SiteSearchInputSchema,
    outputSchema: SiteSearchOutputSchema,
  },
  async (input) => {
    const llmResponse = await ai.generate({
      prompt: `You are BLOBAI, a friendly and helpful AI assistant for Arjun Sourya Srirangam's personal portfolio website. Your goal is to answer questions based ONLY on the information provided by the 'getWebsiteContent' tool.

      User Query: "${input.query}"
      
      If the tool provides relevant information, answer the user's question concisely.
      If the information is not in the tool's output, politely state that you can only answer questions about the content on this website.
      Do not make up information. Be friendly and refer to Arjun in the third person.`,
      tools: [getWebsiteContent],
      model: 'googleai/gemini-2.5-flash',
    });

    return llmResponse.text;
  }
);


// Export a wrapper function to be called from the client
export async function searchSite(input: SiteSearchInput): Promise<SiteSearchOutput> {
  return await siteSearchFlow(input);
}
