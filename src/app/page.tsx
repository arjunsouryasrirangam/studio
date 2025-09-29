import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Music, Piano, Waves, Dna, Contact, Images } from 'lucide-react';

// Custom icon for Badminton
function ShuttlecockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" /><path d="m6 9 6 6 6-6" /><path d="M12 15V21" /><path d="M8 9.5 4 6" /><path d="m16 9.5 4-3.5" /><path d="M12 9.5V6" /><path d="M10 4h4" /><path d="M8 2h8" />
    </svg>
  );
}

const features = [
  {
    title: 'Tech Portfolio',
    description: 'Explore my coding projects and technical skills.',
    icon: <Code className="h-8 w-8 text-primary" />,
    href: '/tech',
  },
  {
    title: 'Singing',
    description: 'Listen to my vocal performances and repertoire.',
    icon: <Music className="h-8 w-8 text-primary" />,
    href: '/singing',
  },
  {
    title: 'Piano',
    description: 'Experience my journey with the classical piano.',
    icon: <Piano className="h-8 w-8 text-primary" />,
    href: '/piano',
  },
  {
    title: 'Swimming',
    description: 'Dive into my swimming achievements and journey.',
    icon: <Waves className="h-8 w-8 text-primary" />,
    href: '/swimming',
  },
  {
    title: 'Badminton',
    description: 'See my highlights and accomplishments on the court.',
    icon: <ShuttlecockIcon className="h-8 w-8 text-primary" />,
    href: '/badminton',
  },
  {
    title: 'Gallery',
    description: 'A visual journey through photos and moments.',
    icon: <Images className="h-8 w-8 text-primary" />,
    href: '/gallery',
  },
  {
    title: 'AI-Powered Bio',
    description: 'Generate a custom biography for any occasion.',
    icon: <Dna className="h-8 w-8 text-primary" />,
    href: '/ai-bio',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-headline text-foreground">
                    Arjun
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                    Software Engineer & Creative Technologist. I build beautiful, functional, and accessible digital experiences.
                </p>
                <div className="mt-8 flex gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contact">Get in Touch <Contact className="ml-2" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="/tech">View Tech Projects <Code className="ml-2" /></Link>
                </Button>
                </div>
            </div>
            <div className="flex justify-center">
                 {heroImage && (
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            fill
                            className="object-cover rounded-full shadow-2xl"
                            priority
                            data-ai-hint={heroImage.imageHint}
                        />
                        <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse"></div>
                    </div>
                )}
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">A Man of Many Talents</h2>
            <p className="mt-2 text-lg text-muted-foreground">Discover the different facets of my work and passion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link href={feature.href} key={feature.title} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 hover:bg-background">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    {feature.icon}
                    <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                    <div className="mt-4 flex items-center text-primary font-semibold text-sm">
                      Explore More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
