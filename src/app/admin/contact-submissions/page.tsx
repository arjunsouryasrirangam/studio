
'use client';

import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Mail, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  message: string;
  submissionDate: {
    toDate: () => Date;
  };
};

export default function ContactSubmissionsPage() {
  const firestore = useFirestore();
  const submissionsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'contact_form_submissions');
  }, [firestore]);

  const { data: submissions, isLoading, error } = useCollection<ContactSubmission>(submissionsQuery);

  return (
    <div>
      <PageHeader
        title="Contact Form Submissions"
        description="Here are all the messages received from the contact form."
      />
      <PageSection>
        <div className="max-w-4xl mx-auto space-y-6">
          {isLoading && (
            <>
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-40 w-full" />
            </>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error.message}</AlertDescription>
            </Alert>
          )}
          
          {!isLoading && !error && submissions && submissions.length === 0 && (
             <Alert>
                <Mail className="h-4 w-4" />
                <AlertTitle>No Submissions Yet</AlertTitle>
                <AlertDescription>When someone sends a message through the contact form, it will appear here.</AlertDescription>
            </Alert>
          )}

          {submissions && submissions.map((submission) => (
            <Card key={submission.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>{submission.name}</CardTitle>
                        <CardDescription>
                            <a href={`mailto:${submission.email}`} className="text-primary hover:underline">{submission.email}</a>
                        </CardDescription>
                    </div>
                     <span className="text-xs text-muted-foreground">
                        {submission.submissionDate ? format(submission.submissionDate.toDate(), "PPP p") : 'Date not available'}
                     </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm whitespace-pre-wrap">{submission.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
