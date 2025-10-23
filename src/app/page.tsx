

'use client'

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Music, Briefcase, User, PencilRuler, Piano, Waves, Images, GitCommit, Calendar, Zap, Timer } from 'lucide-react';
import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';


function ShuttlecockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" /><path d="m6 9 6 6 6-6" /><path d="M12 15V21" /><path d="M8 9.5 4 6" /><path d="m16 9.5 4-3.5" /><path d="M12 9.5V6" /><path d="M10 4h4" /><path d="M8 2h8" />
    </svg>
  );
}

const aboutSections = [
    {
        icon: <User className="h-8 w-8 text-primary" />,
        title: "About Me",
        text: "I'm a 10-year-old with a passion for building things. Whether it's with code, music, or on the badminton court, I love the process of creating and improving. This portfolio is a showcase of my journey so far."
    },
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

const carouselSlides = [
    {
        href: '/request-website',
        title: 'Request a Website!',
        description: 'Request Arjun to make a website for you!',
        buttonText: 'Get a Quote',
        icon: <PencilRuler className="mr-2 h-5 w-5"/>,
        image: PlaceHolderImages.find((img) => img.id === 'request-website-promo')
    },
    {
        href: '/singing',
        title: 'Singing',
        description: 'Explore my journey as a Hindustani classical vocalist.',
        buttonText: 'Listen In',
        icon: <Music className="mr-2 h-5 w-5"/>,
        image: PlaceHolderImages.find((img) => img.id === 'singing-performance-4'),
        objectPosition: 'object-top',
    },
    {
        href: '/piano',
        title: 'Piano',
        description: 'Discover my passion for the piano, from classical to contemporary.',
        buttonText: 'Explore My Journey',
        icon: <Piano className="mr-2 h-5 w-5"/>,
        image: PlaceHolderImages.find((img) => img.id === 'piano-video-thumb-1')
    },
     {
        href: '/tech',
        title: 'Tech Projects',
        description: 'Check out my latest creations in the world of code.',
        buttonText: 'View Projects',
        icon: <Code className="mr-2 h-5 w-5"/>,
        image: PlaceHolderImages.find((img) => img.id === 'tech-project-1')
    },
    {
        href: '/swimming',
        title: 'Swimming',
        description: 'Follow my journey as a competitive swimmer.',
        buttonText: 'See Achievements',
        icon: <Waves className="h-5 w-5 mr-2"/>,
        image: PlaceHolderImages.find((img) => img.id === 'swimming-action-2')
    },
    {
        href: '/badminton',
        title: 'Badminton',
        description: 'Follow my journey on the badminton court.',
        buttonText: 'See Highlights',
        icon: <ShuttlecockIcon className="h-5 w-5 mr-2"/>,
        image: PlaceHolderImages.find((img) => img.id === 'badminton-action')
    },
    {
        href: '/gallery',
        title: 'Full Gallery',
        description: 'A visual collection of moments and milestones.',
        buttonText: 'Explore Gallery',
        icon: <Images className="mr-2 h-5 w-5"/>,
        image: PlaceHolderImages.find((img) => img.id === 'swimming-action')
    }
]

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

export default function Home() {
    const plugin = React.useRef(
      Autoplay({ delay: 2500, stopOnInteraction: true })
    );
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [progress, setProgress] = React.useState(0);

    const onSelect = React.useCallback((api: CarouselApi) => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
    }, []);

    React.useEffect(() => {
        if (!api) {
            return
        }

        onSelect(api);

        const updateProgress = () => {
            // This is a valid way to access the autoplay plugin instance
            const autoplay = api.plugins().autoplay;
            // The type definitions might be incorrect, so we check for existence before calling
            if (autoplay && typeof (autoplay as any).scrollProgress === 'function') {
                setProgress((autoplay as any).scrollProgress());
            }
        };

        api.on("select", onSelect);
        api.on("reInit", onSelect);
        api.on("scroll", updateProgress);

        // Manually trigger the first progress update
        updateProgress();

        return () => {
            api.off("select", onSelect)
            api.off("scroll", updateProgress);
            api.off("reInit", onSelect);
        }
    }, [api, onSelect])

  return (
    <div className="flex flex-col">
       <section className="container mx-auto py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
                 <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">
                        Arjun Sourya Srirangam
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        A passionate creator exploring the worlds of technology, music, and sports.
                    </p>
                </div>
                
                <Carousel
                  setApi={setApi}
                  plugins={[plugin.current]}
                  className="w-full"
                  opts={{
                    loop: true,
                  }}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.play}
                >
                    <div className="flex gap-2.5 mb-4">
                        {carouselSlides.map((_, index) => (
                            <div key={index} data-slide-index={index} className="flex-1 h-1 bg-muted/50 rounded-full overflow-hidden">
                                <Progress
                                    value={index === current ? progress * 100 : (index < current ? 100 : 0)}
                                    className={cn(
                                        "h-full bg-primary transition-all duration-100 ease-linear",
                                         index !== current && 'transition-none'
                                    )}
                                />
                            </div>
                        ))}
                    </div>
                  <CarouselContent>
                    {carouselSlides.map((slide) => (
                      <CarouselItem key={slide.href}>
                         <Card className="relative overflow-hidden group">
                            {slide.image && (
                                <Image 
                                    src={slide.image.imageUrl}
                                    alt={slide.image.description}
                                    fill
                                    className={cn(
                                      "object-cover transition-transform duration-300 group-hover:scale-105",
                                      (slide as any).objectPosition
                                    )}
                                    data-ai-hint={slide.image.imageHint}
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                            <div className="relative flex flex-col h-full justify-end p-6 min-h-[400px]">
                                <h3 className="text-3xl font-bold font-headline text-white">{slide.title}</h3>
                                <p className="text-white/80 mt-2">{slide.description}</p>
                                <Button asChild className="mt-4 w-fit">
                                    <Link href={slide.href}>{slide.icon}{slide.buttonText} <ArrowRight className="ml-2"/></Link>

                                </Button>
                            </div>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
            </div>

            <div className="space-y-8 lg:mt-12">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {aboutSections.slice(1).map((section) => (
                        <Card key={section.title}>
                            <CardContent className="p-6 text-center flex flex-col items-center">
                                <div className="p-3 bg-primary/10 rounded-full mb-4">
                                     {section.icon}
                                </div>
                                <h3 className="text-xl font-bold font-headline mb-2">{section.title}</h3>
                                <p className="text-muted-foreground text-sm">{section.text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
          </div>
      </section>

      <section className="py-16 md:py-24 bg-card/95">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
                 <h2 className="text-3xl font-bold font-headline flex items-center gap-3">
                    <GitCommit className="text-primary" />
                    About This Project
                 </h2>
                 <p className="text-muted-foreground">
                    This project was started as a way for me, Arjun, to get my hands dirty with modern web development. I believe that building real applications is the most effective way to truly learn and apply new technologies. This portfolio is the result of that journey.
                 </p>
                 <Button asChild>
                    <Link href="/tech">View All Projects <ArrowRight className="ml-2" /></Link>
                 </Button>
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
                             <div className="text-2xl font-bold font-headline">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
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
      </section>
    </div>
  );

    



    