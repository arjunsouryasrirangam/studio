'use server';

import { getSdks, addDocumentNonBlocking } from '@/firebase';
import { initializeApp } from 'firebase/app';
import { collection } from 'firebase/firestore';
import * as z from 'zod';
import { firebaseConfig } from '@/firebase/config';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  try {
    const { firestore } = getSdks(initializeApp(firebaseConfig));
    const submissionsCollection = collection(firestore, 'contact_form_submissions');
    
    addDocumentNonBlocking(submissionsCollection, {
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
