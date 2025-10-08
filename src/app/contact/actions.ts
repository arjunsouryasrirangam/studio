'use server';

import { getFirebaseAdmin } from '@/firebase/admin';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  try {
    const { firestore } = getFirebaseAdmin();
    
    await firestore.collection('contact_form_submissions').add({
      ...values,
      submissionDate: new Date(),
    });

    return { success: true };
  } catch (error) {
    console.error('Error saving contact form submission:', error);
    const message = error instanceof Error ? error.message : 'There was a problem sending your message.';
    return { success: false, message };
  }
}
