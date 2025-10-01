import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { WebsiteRequestForm } from './request-form';
import { Lightbulb, PencilRuler } from 'lucide-react';

export default function RequestWebsitePage() {
  return (
    <div>
      <PageHeader
        title="Let's Build Your Website"
        description="Have an idea for a website? Fill out the form below, and I'll get in touch with you to discuss how we can bring your vision to life."
      />
      <PageSection>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold font-headline flex items-center gap-2"><Lightbulb />The Process</h2>
            <p className="text-muted-foreground mt-4 space-y-4">
              <span>1. Fill out the form with details about your project.</span>
              <span>2. I'll review your request and reach out within 24-48 hours.</span>
              <span>3. We'll collaborate to define the scope and timeline.</span>
               <span>4. I'll get to work building your custom website!</span>
            </p>
          </div>
          <div className="md:col-span-2">
            <WebsiteRequestForm />
          </div>
        </div>
      </PageSection>
    </div>
  );
}
