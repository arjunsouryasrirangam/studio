'use server';

import { getSdks } from '@/firebase';
import { initializeApp } from 'firebase/app';
import { addDoc, collection } from 'firebase/firestore';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  company: z.string().optional(),
  websiteType: z.string().min(1, { message: 'Please select a website type.' }),
  description: z.string().min(20, { message: 'Please provide a description of at least 20 characters.' }),
});

export async function handleWebsiteRequest(values: z.infer<typeof formSchema>) {
  try {
    const { firestore } = getSdks(initializeApp());
    const requestsCollection = collection(firestore, 'website_requests');
    
    await addDoc(requestsCollection, {
      ...values,
      submissionDate: new Date(),
    });

    return { success: true, message: 'Your request has been submitted successfully! Arjun will get back to you shortly.' };
  } catch (error) {
    console.error('Error saving website request:', error);
    return { success: false, message: 'There was a problem submitting your request.' };
  }
}
