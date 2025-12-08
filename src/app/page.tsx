

'use client'

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Music, Briefcase, User, PencilRuler, Piano, Waves, Images, Calendar, Contact, Sparkles, Wand2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { generateBio, type BioPersona } from '@/ai/flows/bio-generator-flow';
import { AnimatePresence, motion } from 'framer-motion';


function ShuttlecockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" /><path d="m6 9 6 6 6-6" /><path d="M12 15V21" /><path d="M8 9.5 4 6" /><path d="m16 9.5 4-3.5" /><path d="M12 9.5V6" /><path d="M10 4h4" /><path d="M8 2h8" />
    </svg>
  );
}

const carouselSlides = [
    {
        href: '/request-website',
        title: 'Request a Website!',
        description: "Have a vision for a website? Let's bring it to life together. Simply fill out the request form with your project details, and I will personally review it. I'll get back to you within 48 hours to discuss the next steps and how we can collaborate to build a custom website that meets your needs.",
        buttonText: 'Get a Quote',
        icon: <PencilRuler className="mr-2 h-5 w-5"/>,
        image: PlaceHolderImages.find((img) => img.id === 'request-website-promo')
    },
    {
        href: '/singing',
        title: 'Singing',
        description: 'Discover my journey as a Hindustani classical vocalist. Under the guidance of my respected teacher, Prajna Bhattacharya Ma\'am, I have completed multiple levels of certification and won multiple awards. I am currently studying for P3 Bhushan at the Sangeeti School of Music, a path that has rewarded me with prizes at various competitions and taught me deep discipline.',
        buttonText: 'Listen In',
        icon: <Music className="mr-2 h-5 w-5"/>,
        image: PlaceHolderImages.find((img) => img.id === 'singing-performance-4'),
        objectPosition: 'object-top',
    },
    {
        href: '/piano',
        title: 'Piano',
        description: 'My journey with the piano has been one of perseverance and passion. For the past four years, I\'ve honed my skills under my respected teacher, Aimilianos Starvinos Sir, from Home Music Teachers NL. My repertoire includes timeless pieces from composers like Debussy and Chopin. This discipline has taught me as much about resilience as it has about music.',
        buttonText: 'Explore My Journey',
        icon: <Piano className="mr-2 h-5 w-5"/>,
        image: PlaceHolderImages.find((img) => img.id === 'piano-main')
    },
     {
        href: '/tech',
        title: 'Tech Projects',
        description: 'With six years of programming experience under my teacher Mrs. Diksha at JetLearn B.V., I love turning complex problems into elegant software solutions. My projects range from developer tools that visualize code to fun, interactive web apps. I build with modern technologies like Next.js, TypeScript, and Firebase. Explore my work to see how I bring ideas to life through code.',
        buttonText: 'View Projects',
        icon: <Code className="mr-2 h-5 w-5"/>,
        image: PlaceHolderImages.find((img) => img.id === 'tech-project-1')
    },
    {
        href: '/swimming',
        title: 'Swimming',
        description: 'Swimming is more than just a sport to me—it\'s a practice in discipline and focus. I have completed my foundational A, B, and C diplomas and have achieved the first level of advanced skills (Zwemvaardigheid). Each lap in the pool is a lesson in resilience and the pursuit of continuous improvement. Follow my journey as I make waves in the competitive swimming world.',
        buttonText: 'See Achievements',
        icon: <Waves className="h-5 w-5 mr-2"/>,
        image: PlaceHolderImages.find((img) => img.id === 'swimming-achievement')
    },
    {
        href: '/badminton',
        title: 'Badminton',
        description: 'For the last year and a half, badminton has been a thrilling part of my life. Coached by Theo Sir, Hans Sir, and Jolanda Ma\'am at BV Door Eendracht Omhoog, I\'ve developed a love for the sport\'s fast pace and strategy. While I haven\'t competed for official prizes yet, I am working hard and am close to being promoted to the next group.',
        buttonText: 'See Highlights',
        icon: <ShuttlecockIcon className="h-5 w-5 mr-2"/>,
        image: PlaceHolderImages.find((img) => img.id === 'badminton-action')
    },
    {
        href: '/gallery',
        title: 'Full Gallery',
        description: 'Step into a visual diary of my journey across technology, music, and sports. The gallery is a curated collection of moments, milestones, and memories that have shaped my path. From the stage to the swimming pool, explore the experiences that define my passions. It\'s a colorful glimpse into the world of a young creator.',
        buttonText: 'Explore Gallery',
        icon: <Images className="mr-2 h-5 w-5"/>,
        image: PlaceHolderImages.find((img) => img.id === 'gallery-promo')
    }
]

const AnimatedBio = () => {
    const [persona, setPersona] = useState<BioPersona>('Default');
    const [bio, setBio] = useState("I'm a 10-year-old with a passion for building things. Whether it's with code, music, or on the badminton court, I love the process of creating and improving. This portfolio is a showcase of my journey so far.");
    const [isLoading, setIsLoading] = useState(false);
    const [key, setKey] = useState(0);

    const personas: BioPersona[] = ['Tech Innovator', 'Musical Prodigy', 'Future Entrepreneur', 'Default'];

    const handleGenerateBio = async () => {
        setIsLoading(true);
        const currentPersonaIndex = personas.indexOf(persona);
        const nextPersona = personas[(currentPersonaIndex + 1) % personas.length];
        
        try {
            const newBio = await generateBio({ persona: nextPersona });
            setPersona(nextPersona);
            setBio(newBio);
            setKey(prevKey => prevKey + 1); // Reset animation
        } catch (error) {
            console.error("Failed to generate bio:", error);
            // Optionally set a friendly error message
        } finally {
            setIsLoading(false);
        }
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: (i: number = 0) => ({
            opacity: 1,
            transition: { staggerChildren: 0.01, delayChildren: i * 0.1 }
        })
    };

    const charVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', damping: 12, stiffness: 200 }
        }
    };

    return (
        <div className="container mx-auto max-w-5xl text-center animate-fade-in-up">
            <div className="p-3 bg-primary/10 rounded-full mb-4 inline-block">
                <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold font-headline mb-6">Who is Arjun?</h2>
            
            <div className="relative min-h-[120px]">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={key}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {bio.split("").map((char, index) => (
                            <motion.span key={`${key}-${index}`} variants={charVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>
                </AnimatePresence>
            </div>

            <Button onClick={handleGenerateBio} disabled={isLoading} className="mt-8" variant="outline" size="lg">
                <Wand2 className={cn("mr-2 h-5 w-5", isLoading && "animate-spin")} />
                {isLoading ? 'Generating...' : 'Tell Me More!'}
            </Button>
        </div>
    );
};


export default function Home() {
    const plugin = React.useRef(
      Autoplay({ delay: 3500, stopOnInteraction: true })
    );

    const [mainApi, setMainApi] = React.useState<CarouselApi>();
    const [textApi, setTextApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [progress, setProgress] = React.useState(0);
    
     const [lastActivityDate, setLastActivityDate] = React.useState<string | null>(null);

    React.useEffect(() => {
        // This ensures the date is only rendered on the client, avoiding a hydration mismatch.
        setLastActivityDate(new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
    }, []);

     React.useEffect(() => {
        if (!mainApi || !textApi) {
          return;
        }
    
        const syncCarousels = () => {
          const masterIndex = mainApi.selectedScrollSnap();
          if (textApi.selectedScrollSnap() !== masterIndex) {
            textApi.scrollTo(masterIndex);
          }
          setCurrent(masterIndex);
        };
    
        mainApi.on('select', syncCarousels);
        mainApi.on('reInit', syncCarousels);
    
        const onAutoplayProgress = (api: CarouselApi, progress: number) => {
            setProgress(progress * 100);
        };

        mainApi.on('autoplay:progress', onAutoplayProgress);
        
        // When the carousel settles on a new slide, reset the progress.
        const onSettle = () => setProgress(0);
        mainApi.on('settle', onSettle);

        return () => {
          mainApi.off('select', syncCarousels);
          mainApi.off('reInit', syncCarousels);
          mainApi.off('autoplay:progress', onAutoplayProgress);
          mainApi.off('settle', onSettle);
        };
      }, [mainApi, textApi]);


  return (
    <div className="flex flex-col">
       <section className="container mx-auto py-20 md:py-32">
            <div className="space-y-6 mb-12 text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">
                    Arjun Sourya Srirangam
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A passionate creator exploring the worlds of technology, music, and sports.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-300">
                <div className="lg:col-span-3">
                    <Carousel
                      setApi={setMainApi}
                      plugins={[plugin.current]}
                      className="w-full"
                      opts={{
                        loop: true,
                      }}
                      onMouseEnter={plugin.current.stop}
                      onMouseLeave={plugin.current.play}
                    >
                      <CarouselContent>
                        {carouselSlides.map((slide, index) => (
                          <CarouselItem key={index}>
                             <Card className="relative overflow-hidden group text-left h-[450px]">
                                {slide.image && (
                                    <Image 
                                        src={slide.image.imageUrl}
                                        alt={slide.image.description}
                                        fill
                                        className={cn(
                                          "object-cover transition-transform duration-300 group-hover:scale-105",
                                          slide.objectPosition
                                        )}
                                        data-ai-hint={slide.image.imageHint}
                                        priority={index === 0}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                                     <h3 className="text-2xl md:text-3xl font-bold font-headline text-white">{slide.title}</h3>
                                     <p className="text-white/80 mt-2 max-w-md hidden md:block">{slide.description}</p>
                                     <Button asChild className="mt-6">
                                        <Link href={slide.href}>{slide.icon}{slide.buttonText} <ArrowRight className="ml-2"/></Link>
                                    </Button>
                                </div>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                </div>

                <div className="lg:col-span-1">
                     <Carousel
                        setApi={setTextApi}
                        orientation="vertical"
                        className="w-full h-full"
                        opts={{ loop: true, dragFree: true }}
                     >
                        <CarouselContent className="h-[450px]">
                            {carouselSlides.map((slide, index) => (
                                <CarouselItem key={index} className="basis-full">
                                    <Card className="h-full">
                                        <CardContent className="p-6 text-left flex flex-col justify-center h-full">
                                            <div className="p-3 bg-primary/10 rounded-full mb-4 w-fit">
                                                {slide.icon}
                                            </div>
                                            <h3 className="text-xl font-bold font-headline mb-2">{slide.title}</h3>
                                            <p className="text-muted-foreground text-sm line-clamp-[10]">{slide.description}</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

            <div className="flex gap-2.5 mt-4 animate-fade-in-up animation-delay-500">
                {carouselSlides.map((_, index) => (
                    <div key={index} data-slide-index={index} className="flex-1 h-1 bg-muted/50 rounded-full overflow-hidden cursor-pointer" onClick={() => mainApi?.scrollTo(index)}>
                        <Progress
                            value={index === current ? progress : (index < current ? 100 : 0)}
                            className={cn(
                                "h-full bg-primary",
                                 index === current ? 'transition-all duration-[50ms] ease-linear' : ''
                            )}
                        />
                    </div>
                ))}
            </div>
      </section>

      <section className="py-16 md:py-24 bg-card/95">
           <AnimatedBio />
      </section>

    </div>
  );
}
