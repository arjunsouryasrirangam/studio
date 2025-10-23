
'use client';

import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Inbox, AlertTriangle, Building, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';

type WebsiteRequest = {
  id: string;
  name: string;
  email: string;
  company?: string;
  websiteType: string;
  description: string;
  submissionDate: {
    toDate: () => Date;
  };
};

export default function WebsiteRequestsPage() {
  const firestore = useFirestore();
  const requestsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'website_requests');
  }, [firestore]);

  const { data: requests, isLoading, error } = useCollection<WebsiteRequest>(requestsQuery);

  return (
    <div>
      <PageHeader
        title="Website Build Requests"
        description="Here are all the proposals for new website projects."
      />
      <PageSection>
        <div className="max-w-4xl mx-auto space-y-6">
          {isLoading && (
            <>
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-48 w-full" />
            </>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error.message}</AlertDescription>
            </Alert>
          )}

          {!isLoading && !error && requests && requests.length === 0 && (
             <Alert>
                <Inbox className="h-4 w-4" />
                <AlertTitle>No Requests Yet</AlertTitle>
                <AlertDescription>When someone submits a website request, it will appear here.</AlertDescription>
            </Alert>
          )}

          {requests && requests.map((request) => (
            <Card key={request.id}>
              <CardHeader>
                 <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>{request.name}</CardTitle>
                        <CardDescription>
                            <a href={`mailto:${request.email}`} className="text-primary hover:underline">{request.email}</a>
                        </CardDescription>
                    </div>
                     <span className="text-xs text-muted-foreground">
                        {request.submissionDate ? format(request.submissionDate.toDate(), "PPP p") : 'Date not available'}
                     </span>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                    {request.company && <Badge variant="secondary" className="flex items-center gap-1"><Building className="h-3 w-3" /> {request.company}</Badge>}
                    <Badge variant="outline" className="flex items-center gap-1"><Tag className="h-3 w-3" /> {request.websiteType}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                 <p className="text-sm font-semibold mb-2">Project Description:</p>
                 <p className="text-sm text-muted-foreground whitespace-pre-wrap">{request.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
