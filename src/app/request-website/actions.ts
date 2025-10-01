'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  company: z.string().optional(),
  websiteType: z.string().min(1, { message: 'Please select a website type.' }),
  description: z.string().min(20, { message: 'Please provide a description of at least 20 characters.' }),
});

export async function handleWebsiteRequest(values: z.infer<typeof formSchema>) {
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and return a success message.
  console.log('Received website request:', values);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // You could add email notification logic here.

  return { success: true, message: 'Your request has been submitted successfully! Arjun will get back to you shortly.' };
}
