import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { BioGeneratorForm } from './bio-form';
import { Bot } from 'lucide-react';

export default function AiBioPage() {
  return (
    <div>
      <PageHeader
        title="AI-Powered Biography"
        description="Generate a custom biography for Arjun tailored to any audience or purpose. Powered by Google's Generative AI."
      />
      <PageSection>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold font-headline flex items-center gap-2"><Bot />How it Works</h2>
            <p className="text-muted-foreground mt-4">
              Select a target audience and purpose for the biography. You can also provide additional points to include. The AI will then craft a unique biography based on your selections, highlighting Arjun's relevant skills and experiences.
            </p>
          </div>
          <div className="md:col-span-2">
            <BioGeneratorForm />
          </div>
        </div>
      </PageSection>
    </div>
  );
}
