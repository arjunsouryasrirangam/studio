'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { generateTargetedBio, GenerateTargetedBioInput } from '@/ai/flows/generate-targeted-bio';
import { Loader2, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  targetAudience: z.string().min(1, { message: 'Please select a target audience.' }),
  purpose: z.string().min(1, { message: 'Please select a purpose.' }),
  additionalInformation: z.string().optional(),
});

const audiences = ['Tech Recruiter', 'Music Producer', 'Sports Scout', 'General Audience'];
const purposes = ['LinkedIn Profile', 'Concert Program', 'Team Introduction', 'Website About Page'];

export function BioGeneratorForm() {
  const [generatedBio, setGeneratedBio] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetAudience: '',
      purpose: '',
      additionalInformation: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsGenerating(true);
    setError('');
    setGeneratedBio('');
    try {
      const result = await generateTargetedBio(values as GenerateTargetedBioInput);
      setGeneratedBio(result.biography);
    } catch (e) {
      setError('Failed to generate biography. Please try again.');
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Bio Generator</CardTitle>
          <CardDescription>Fill out the form to create a custom bio.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an audience" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {audiences.map((audience) => (
                          <SelectItem key={audience} value={audience}>{audience}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purpose</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a purpose" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {purposes.map((purpose) => (
                          <SelectItem key={purpose} value={purpose}>{purpose}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="additionalInformation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Emphasize leadership skills..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isGenerating} className="w-full">
                {isGenerating ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                {isGenerating ? 'Generating...' : 'Generate Bio'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isGenerating || generatedBio || error) && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Sparkles className="text-primary" /> Generated Biography</CardTitle>
          </CardHeader>
          <CardContent>
            {isGenerating && (
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                </div>
            )}
            {error && <p className="text-destructive">{error}</p>}
            {generatedBio && <p className="text-muted-foreground whitespace-pre-wrap">{generatedBio}</p>}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
