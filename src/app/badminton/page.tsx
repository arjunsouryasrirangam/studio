import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { badmintonAchievements } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Medal, Trophy } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
       <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
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
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold font-headline mb-4 flex items-center gap-2"><ShuttlecockIcon className="h-6 w-6"/> On the Court</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Badminton is a high-speed chess match that tests both physical and mental limits. I thrive on the quick reflexes, strategic plays, and the intense focus required in every rally. This sport has taught me the value of perseverance and precision under pressure.
                </p>
            </div>
        </div>
      </PageSection>

      <PageSection className="bg-card">
        <h2 className="text-3xl font-bold text-center mb-10 font-headline flex items-center justify-center gap-3">
          <Trophy /> Accomplishments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {badmintonAchievements.map((achievement) => (
                <Card key={achievement.event}>
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div>
                                <CardTitle className="font-headline">{achievement.event}</CardTitle>
                                <CardDescription>{achievement.year}</CardDescription>
                            </div>
                            <Medal className="h-8 w-8 text-yellow-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg font-semibold text-primary">{achievement.result}</p>
                        <p className="text-muted-foreground mt-2">{achievement.description}</p>
                    </CardContent>
                </Card>
            ))}
             <div className="md:col-span-2">
                {highlightImage && (
                    <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg mt-8">
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
