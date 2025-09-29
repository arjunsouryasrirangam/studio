'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and return a success message.
  console.log('Received contact form submission:', values);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate potential server-side error
  if (values.name.toLowerCase() === 'error') {
     return { success: false, message: 'Server simulation: Name "error" is not allowed.' };
  }

  return { success: true };
}
