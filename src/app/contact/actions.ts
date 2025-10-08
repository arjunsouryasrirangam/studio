'use server';

import { addDocumentNonBlocking } from '@/firebase';
import { collection, getFirestore } from 'firebase/firestore';
import * as z from 'zod';
import { initializeFirebase } from '@/firebase';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
    try {
        const { firestore } = initializeFirebase();
        const submissionsRef = collection(firestore, 'contact_form_submissions');
        
        await addDocumentNonBlocking(submissionsRef, {
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
