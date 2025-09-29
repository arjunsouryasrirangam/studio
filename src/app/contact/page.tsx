import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from './contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Get in Touch"
        description="Whether for a project collaboration, a performance booking, or just to say hello, I'd love to hear from you."
      />
      <PageSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-headline">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:arjun.echoes@example.com" className="text-muted-foreground hover:text-primary">
                    arjun.echoes@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">San Francisco Bay Area, CA</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
