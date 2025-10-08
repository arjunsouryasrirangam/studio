'use client'

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight, Code, Music, Briefcase, User, PencilRuler, Piano, Waves, Images } from 'lucide-react';
import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

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
        image: PlaceHolderImages.find((img) => img.id === 'singing-album-art-2')
    },
    {
        href: '/piano',
        title: 'Piano',
        description: 'Discover my passion for the piano, from classical to contemporary.',
        buttonText: 'See Performances',
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

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div className="flex flex-col">
       <section className="container mx-auto py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">
                    Arjun Sourya Srirangam: Tech, Music, and Sports
                </h1>
                
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent>
                    {carouselSlides.map((slide) => (
                      <CarouselItem key={slide.href}>
                         <Card className="relative overflow-hidden group">
                            {slide.image && (
                                <Image 
                                    src={slide.image.imageUrl}
                                    alt={slide.image.description}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
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
