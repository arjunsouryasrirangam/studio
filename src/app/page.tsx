import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Music, Briefcase, Contact, User } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Custom icon for Badminton
function ShuttlecockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const carouselImages = PlaceHolderImages.filter(img => 
    ['singing-album-art-2', 'tech-project-2', 'badminton-action', 'piano-performance', 'swimming-action'].includes(img.id)
  );

  return (
    <div className="flex flex-col">
       {/* About Me & Carousel Section */}
       <section className="container mx-auto py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Carousel
              opts={{
                loop: true,
              }}
              className="w-full max-w-md mx-auto"
            >
              <CarouselContent>
                {carouselImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="p-1">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="aspect-w-4 aspect-h-3 relative">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-[-50px] hidden sm:flex" />
              <CarouselNext className="right-[-50px] hidden sm:flex" />
            </Carousel>

            <div className="space-y-6">
                 <h2 className="text-3xl md:text-4xl font-bold font-headline flex items-center gap-3"><User /> About Me</h2>
                 <p className="text-lg text-muted-foreground">Discover the different facets of my work and passion.</p>
                {aboutSections.map((section) => (
                    <div key={section.title} className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full mt-1">
                            {section.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-headline">{section.title}</h3>
                            <p className="text-muted-foreground">{section.text}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* Explore More Section */}
      <section className="py-16 md:py-24">
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
