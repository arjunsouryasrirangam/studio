
'use client';

import * as React from 'react';
import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { techProjects, techSkills } from '@/lib/placeholder-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Layers, School, User, Link as LinkIcon, Code, Video, GitCommit, Calendar, Timer, Zap, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

const ContributionCell = ({ level }: { level: 0 | 1 | 2 | 3 | 4 }) => {
  const levelClasses = {
    0: 'bg-muted/30',
    1: 'bg-primary/20',
    2: 'bg-primary/50',
    3: 'bg-primary/70',
    4: 'bg-primary',
  };
  return <div className={cn('h-3.5 w-3.5 rounded-sm', levelClasses[level])} />;
};

const contributionData = [
    // Mock data for contribution graph
    0, 0, 1, 2, 0, 0, 0, 0, 2, 3, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 0, 1, 2, 0, 0, 0,
    1, 2, 3, 2, 1, 0, 0, 4, 4, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 2, 1,
    2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 0, 0, 0, 0, 2, 3, 1, 0,
    0, 1, 2, 0, 0, 0, 0, 2, 3, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 0, 1, 2, 0, 0, 0,
    1, 2, 3, 2, 1, 0, 0, 4, 4, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 2, 1,
    2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 0, 0, 0, 0, 2, 3, 1, 0,
];

export default function TechPage() {
    const [lastActivityDate, setLastActivityDate] = React.useState<string | null>(null);
     const [isProjectDetailsOpen, setIsProjectDetailsOpen] = React.useState(false);

    React.useEffect(() => {
        // This ensures the date is only rendered on the client, avoiding a hydration mismatch.
        setLastActivityDate(new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
    }, []);

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
        <div className="max-w-2xl mx-auto mb-12">
             <Alert>
                <Video className="h-4 w-4" />
                <AlertTitle>Media Coming Soon!</AlertTitle>
                <AlertDescription>
                    There aren't yet any images or videos uploaded for these projects. In the meantime, feel free to check them out using the links below.
                </AlertDescription>
            </Alert>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techProjects.map((project) => {
            return (
              <Card key={project.title} className="flex flex-col">
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

       <PageSection className="bg-card">
        <div className="container mx-auto">
          <Collapsible
            open={isProjectDetailsOpen}
            onOpenChange={setIsProjectDetailsOpen}
          >
            <CollapsibleTrigger asChild>
                <Button variant="outline" className='mx-auto flex'>
                    <ChevronsUpDown className="h-4 w-4 mr-2" />
                    {isProjectDetailsOpen ? 'Hide Project Details' : 'About This Portfolio Project'}
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                    <div className="lg:col-span-1 space-y-6">
                        <h2 className="text-3xl font-bold font-headline flex items-center gap-3">
                            <GitCommit className="text-primary" />
                            About This Project
                        </h2>
                        <p className="text-muted-foreground">
                            This project was started as a way for me, Arjun, to get my hands dirty with modern web development. I believe that building real applications is the most effective way to truly learn and apply new technologies. This portfolio is the result of that journey.
                        </p>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h3 className="font-headline text-xl mb-4">Contribution Activity</h3>
                            <div className="grid grid-rows-7 grid-flow-col gap-1.5">
                                {contributionData.map((level, index) => (
                                <ContributionCell key={index} level={level as any} />
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <Card className="p-4">
                                <CardContent className="flex flex-col items-start gap-2 p-0">
                                    <div className="flex items-center gap-2 text-muted-foreground"><GitCommit/> Total Commits</div>
                                    <div className="text-2xl font-bold font-headline">348</div>
                                </CardContent>
                            </Card>
                            <Card className="p-4">
                                <CardContent className="flex flex-col items-start gap-2 p-0">
                                    <div className="flex items-center gap-2 text-muted-foreground"><Calendar/> Last Activity</div>
                                    <div className="text-2xl font-bold font-headline">{lastActivityDate || 'Loading...'}</div>
                                </CardContent>
                            </Card>
                            <Card className="p-4">
                                <CardContent className="flex flex-col items-start gap-2 p-0">
                                    <div className="flex items-center gap-2 text-muted-foreground"><Timer/> Project Duration</div>
                                    <div className="text-2xl font-bold font-headline">42 days</div>
                                </CardContent>
                            </Card>
                            <Card className="p-4">
                                <CardContent className="flex flex-col items-start gap-2 p-0">
                                    <div className="flex items-center gap-2 text-muted-foreground"><Zap/> Busiest Day</div>
                                    <div className="text-2xl font-bold font-headline">Jul 8 (18 commits)</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </PageSection>
    </div>
  );
}
