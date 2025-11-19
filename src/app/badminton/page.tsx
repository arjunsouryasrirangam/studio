import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, MapPin, Link as LinkIcon, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

function ShuttlecockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" /><path d="m6 9 6 6 6-6" /><path d="M12 15V21" /><path d="M8 9.5 4 6" /><path d="m16 9.5 4-3.5" /><path d="M12 9.5V6" /><path d="M10 4h4" /><path d="M8 2h8" />
    </svg>
  );
}

export default function BadmintonPage() {
  return (
    <div>
      <PageHeader
        title="Badminton Highlights"
        description="Agility, strategy, and power on the court. A showcase of my passion for the game of badminton."
      />
      <PageSection>
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-headline mb-6 text-center flex items-center justify-center gap-3"><ShuttlecockIcon /> My Badminton Journey</h2>
            <Card>
                <CardHeader>
                    <CardTitle className='font-headline'>Coaching & Club</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                        I've been learning badminton for a year and a half, and it was my idea to start playing. My father has been a great supporter, always encouraging me and giving me tips to improve. I'm working hard and am close to being promoted to the next group. I enjoy the fast-paced nature of the sport and the challenge of friendly competition.
                    </p>
                    <div>
                        <p className="font-semibold text-foreground flex items-center gap-2 mt-4">My Teachers:</p>
                        <p className="text-muted-foreground">Theo Sir, Hans Sir and Jolanda Ma'am</p>
                    </div>
                     <div>
                        <p className="font-semibold text-foreground flex items-center gap-2 mt-4">Head of BV Door Eendracht Omhoog:</p>
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
       <PageSection className='bg-card'>
        <h2 className="text-3xl font-bold text-center mb-10 font-headline">Media Gallery</h2>
         <div className="max-w-2xl mx-auto">
            <Alert>
                <Video className="h-4 w-4" />
                <AlertTitle>Coming Soon!</AlertTitle>
                <AlertDescription>
                    There aren't yet any images or videos uploaded yet. Check back later for highlights from my matches and training sessions.
                </AlertDescription>
            </Alert>
        </div>
      </PageSection>

    </div>
  );
}
