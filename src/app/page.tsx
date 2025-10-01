import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight, Code, Music, Briefcase, Bot, User, Sparkles, PencilRuler } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Custom icon for Badminton
function ShuttlecockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" /><path d="m6 9 6 6 6-6" /><path d="M12 15V21" /><path d="M8 9.5 4 6" /><path d="m16 9.5 4-3.5" /><path d="M12 9.5V6" /><path d="M10 4h4" /><path d="M8 2h8" />
    </svg>
  );
}

const aboutSections = [
    {
        icon: <Music className="h-6 w-6 text-primary" />,
        title: "Musician",
        text: "With over 6 years of singing experience and 4 years playing the piano, Arjun's musical journey started at a young age. He finds joy in expressing himself through music and continues to hone his skills."
    },
    {
        icon: <Code className="h-6 w-6 text-primary" />,
        title: "Coder",
        text: "Arjun has been coding for 3 years and enjoys the process of building and creating. He uses his skills to bring ideas to life, from simple projects to more complex applications."
    },
    {
        icon: <ShuttlecockIcon className="h-6 w-6 text-primary" />,
        title: "Athlete",
        text: "A dedicated badminton player for 1 year, Arjun is an enthusiastic athlete who thrives on the court. He enjoys the fast-paced nature of the sport and the challenge of friendly competition."
    },
    {
        icon: <Briefcase className="h-6 w-6 text-primary" />,
        title: "Future Entrepreneur",
        text: "At just 10 years old, Arjun is already looking to the future with big ambitions. He dreams of creating his own hotel group, inspired by brands like Marriott Bonvoy and Mandarin Oriental, along with starting his own airline. He is passionate about building businesses and creating new experiences."
    }
];

export default function Home() {
  const bioProjectImage = PlaceHolderImages.find((img) => img.id === 'request-website-promo');

  return (
    <div className="flex flex-col">
       {/* About Me Section inspired by nareshmadhur.com */}
       <section className="container mx-auto py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">
                    Arjun Sourya Srirangam: Tech, Music, and Sports
                </h1>
                
                <Button asChild size="lg" className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20">
                    <Link href="/request-website">
                        <PencilRuler className="mr-2 h-5 w-5"/>
                        Request a Website!
                    </Link>
                </Button>

                {bioProjectImage && (
                    <Card className="relative overflow-hidden group">
                        <Image 
                            src={bioProjectImage.imageUrl}
                            alt={bioProjectImage.description}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={bioProjectImage.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                        <div className="relative flex flex-col h-full justify-end p-6 min-h-[400px]">
                            <h3 className="text-3xl font-bold font-headline text-white">Request a Website!</h3>
                            <p className="text-white/80 mt-2">Request Arjun to make a website for you!</p>
                             <Button asChild className="mt-4 w-fit">
                                <Link href="/request-website">Get a Quote <ArrowRight className="ml-2"/></Link>
                            </Button>
                        </div>
                    </Card>
                )}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
                 <h2 className="text-3xl md:text-4xl font-bold font-headline flex items-center gap-3"><User /> About Me</h2>
                {aboutSections.map((section) => (
                    <div key={section.title}>
                        <h3 className="text-xl font-bold font-headline">{section.title}</h3>
                        <p className="text-muted-foreground mt-2">{section.text}</p>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* Explore More Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto text-center">
             <h2 className="text-3xl md:text-4xl font-bold font-headline">Explore My Portfolio</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">Dive deeper into my projects, performances, and accomplishments across different fields.</p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/gallery">View Full Gallery <ArrowRight className="ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
