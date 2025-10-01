'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Loader2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { handleWebsiteRequest } from './actions';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  company: z.string().optional(),
  websiteType: z.string().min(1, { message: 'Please select a website type.' }),
  description: z.string().min(20, { message: 'Please provide a description of at least 20 characters.' }),
});

const websiteTypes = ['Personal Portfolio', 'Business/Corporate', 'E-commerce Store', 'Blog', 'Landing Page', 'Other'];

export function WebsiteRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      websiteType: '',
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await handleWebsiteRequest(values);
      if (result.success) {
        toast({
          title: 'Request Sent!',
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: result.message || 'There was a problem submitting your request.',
        });
      }
    } catch (e) {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: 'An unexpected error occurred. Please try again.',
      });
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline">Website Request Form</CardTitle>
        <CardDescription>Fill out the details below to get a quote for your new website.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
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
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company, Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
              control={form.control}
              name="websiteType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type of Website</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a website type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {websiteTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me a bit about your project, your goals, and any specific features you need."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                   <FormDescription>
                    Please include as much detail as possible.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
