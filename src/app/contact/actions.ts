'use server';

import { getSdks } from '@/firebase';
import { initializeApp } from 'firebase/app';
import { addDoc, collection } from 'firebase/firestore';
import * as z from 'zod';
import { addDocumentNonBlocking } from '@/firebase';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  try {
    const { firestore } = getSdks(initializeApp());
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
