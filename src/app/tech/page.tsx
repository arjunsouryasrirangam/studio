
import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { techProjects, techSkills } from '@/lib/placeholder-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowRight, Cpu, Layers, School, User, Link as LinkIcon, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TechPage() {
  return (
    <div>
      <PageHeader
        title="Technology & Code"
        description="From elegant front-ends to robust back-ends, I build software that is both powerful and user-friendly."
      />
       <PageSection>
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-headline mb-4 flex items-center gap-2"><Code/> Programming Journey</h2>
            <Card>
                <CardHeader>
                    <CardTitle className='font-headline'>Programmer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>I am a programmer and have been learning for 6 years. I'm a passionate software developer with a knack for problem-solving and a love for clean, efficient code. My journey in technology is driven by a curiosity to learn and a desire to create meaningful applications.</p>
                    <div>
                        <p className="font-semibold text-foreground flex items-center gap-2"><User className='h-4 w-4' />My Teacher:</p>
                        <p>Mrs. Diksha</p>
                    </div>
                     <div>
                        <p className="font-semibold text-foreground flex items-center gap-2"><School className='h-4 w-4'/>Head of JetLearn B.V.:</p>
                        <p>Oud-Ehrenstein 5, 1082 AH, 1105 AW Amsterdam</p>
                         <Button asChild variant="link" className='p-0 h-auto -translate-x-1'>
                            <Link href="https://jet-learn.com" target="_blank" rel="noopener noreferrer">
                                <LinkIcon className='h-4 w-4 mr-2'/>
                                jet-learn.com
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </PageSection>
      <PageSection className='bg-card'>
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 font-headline flex items-center justify-center gap-3">
              <Layers />Core Skills
            </h2>
            <Card>
              <CardContent className='p-6'>
                <div className="flex flex-wrap gap-2 justify-center">
                  {techSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
        </div>
      </PageSection>

      <PageSection>
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
                  <Link href={project.link} className="flex items-center text-primary font-semibold text-sm group" target="_blank" rel="noopener noreferrer">
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
