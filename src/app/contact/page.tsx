import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from './contact-form';

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Get in Touch"
        description="Have a question or a project in mind? Drop me a message below and I'll get back to you as soon as possible."
      />
      <PageSection>
        <div className="max-w-2xl mx-auto">
           <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
        </div>
      </PageSection>
    </div>
  );
}
