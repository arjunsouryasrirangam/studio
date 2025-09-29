import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { GalleryGrid } from './gallery-grid';

export default function GalleryPage() {
  return (
    <div>
      <PageHeader
        title="Image Gallery"
        description="A visual collection of moments and milestones from my journey."
      />
      <PageSection>
        <GalleryGrid />
      </PageSection>
    </div>
  );
}
