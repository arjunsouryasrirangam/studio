
import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Inbox, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  return (
    <div>
      <PageHeader
        title="Admin Dashboard"
        description="View form submissions and manage website content."
      />
      <PageSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Mail /> Contact Form Submissions</CardTitle>
                    <CardDescription>View messages sent through the contact form.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <Link href="/admin/contact-submissions">View Submissions <ArrowRight className="ml-2" /></Link>
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Inbox /> Website Requests</CardTitle>
                    <CardDescription>View requests for new website builds.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Button asChild>
                        <Link href="/admin/website-requests">View Requests <ArrowRight className="ml-2" /></Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </PageSection>
    </div>
  );
}
