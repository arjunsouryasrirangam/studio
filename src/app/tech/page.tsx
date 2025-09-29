import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { techProjects, techSkills } from '@/lib/placeholder-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowRight, Cpu, Layers } from 'lucide-react';

export default function TechPage() {
  return (
    <div>
      <PageHeader
        title="Technology & Code"
        description="From elegant front-ends to robust back-ends, I build software that is both powerful and user-friendly."
      />
      <PageSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline"><Cpu /> About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm a passionate software developer with a knack for problem-solving and a love for clean, efficient code. My journey in technology is driven by a curiosity to learn and a desire to create meaningful applications.
              </p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline"><Layers />Core Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </PageSection>

      <PageSection className="bg-card">
        <h2 className="text-3xl font-bold text-center mb-10 font-headline">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techProjects.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.image);
            return (
              <Card key={project.title} className="flex flex-col">
                {projectImage && (
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={project.link} className="flex items-center text-primary font-semibold text-sm group">
                    View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </PageSection>
    </div>
  );
}
