
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

/**
 * Submits the contact form data to a Google Form.
 * This function sends the data to a pre-configured Google Form URL.
 * @param name The name of the person submitting the form.
 * @param email The email of the person submitting the form.
 * @param message The message content.
 */
function sendContactForm(name: string, email: string, message: string) {
  const BASE_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdPlkf8jkusPaxYbUGyWFkDNpbZW3laq0-Pz-eVa-tn2flgFA/viewform?usp=pp_url";

  const url =
    BASE_URL +
    "&entry.1585567196=" + encodeURIComponent(name) +
    "&entry.1705563378=" + encodeURIComponent(email) +
    "&entry.1709314949=" + encodeURIComponent(message);

  fetch(url, {
    method: "POST",
    mode: "no-cors"
  });
}


export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    sendContactForm(values.name, values.email, values.message);

    // Because of "no-cors", we can't confirm submission success.
    // We'll show a success message optimistically and let the request complete in the background.
    setTimeout(() => {
        toast({
            title: 'Message Sent!',
            description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
        setIsSubmitting(false);
    }, 1000); // A small delay to feel more natural
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="How can I help you?" className="min-h-[120px]" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
}
