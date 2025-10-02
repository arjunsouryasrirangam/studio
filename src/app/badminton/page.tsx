import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Medal, Trophy, Users, MapPin, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function ShuttlecockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" /><path d="m6 9 6 6 6-6" /><path d="M12 15V21" /><path d="M8 9.5 4 6" /><path d="m16 9.5 4-3.5" /><path d="M12 9.5V6" /><path d="M10 4h4" /><path d="M8 2h8" />
    </svg>
  );
}

export default function BadmintonPage() {
    const actionImage = PlaceHolderImages.find(p => p.id === 'badminton-action');
    const highlightImage = PlaceHolderImages.find(p => p.id === 'badminton-highlight');

  return (
    <div>
      <PageHeader
        title="Badminton Highlights"
        description="Agility, strategy, and power on the court. A showcase of my passion for the game of badminton."
      />
      <PageSection className="bg-card">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-headline mb-6 text-center flex items-center justify-center gap-3"><Users />Coaching & Club</h2>
            <Card>
                <CardHeader>
                    <CardTitle className='font-headline'>My Teachers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">Theo Sir, Hans Sir and Jolanda Ma'am</p>
                     <div>
                        <p className="font-semibold text-foreground flex items-center gap-2">Head of BV Door Eendracht Omhoog:</p>
                         <p className='text-muted-foreground flex items-center gap-2 mt-2'><MapPin className='h-4 w-4'/>Sportparkweg 30, 2632 EC Nootdorp</p>
                         <Button asChild variant="link" className='p-0 h-auto -translate-x-1'>
                            <Link href="https://bvdeo.nl" target="_blank" rel="noopener noreferrer">
                                <LinkIcon className='h-4 w-4 mr-2'/>
                                bvdeo.nl
                            </Link>
                        </Button>
                    </div>
                     <div>
                        <p className="font-semibold text-foreground flex items-center gap-2 mt-4"><Trophy className="h-4 w-4" />Accomplishments:</p>
                        <p className="text-muted-foreground mt-1">While I haven't competed for official prizes yet, my biggest achievement is the progress I've made and my upcoming promotion to the next group!</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </PageSection>
       <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
                {actionImage && (
                    <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src={actionImage.imageUrl}
                            alt={actionImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={actionImage.imageHint}
                        />
                    </div>
                )}
            </div>
            <div className="lg:col-span-2 space-y-6">
                <h2 className="text-3xl font-bold font-headline flex items-center gap-2"><ShuttlecockIcon className="h-6 w-6"/> My Badminton Journey</h2>
                <p className="text-muted-foreground leading-relaxed">
                    I've been learning badminton for a year and a half, and it was my idea to start playing. My father has been a great supporter, always encouraging me and giving me tips to improve. I'm working hard and am close to being promoted to the next group. I enjoy the fast-paced nature of the sport and the challenge of friendly competition.
                </p>
                 {highlightImage && (
                    <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src={highlightImage.imageUrl}
                            alt={highlightImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={highlightImage.imageHint}
                        />
                    </div>
                )}
            </div>
        </div>
      </PageSection>

    </div>
  );
}
