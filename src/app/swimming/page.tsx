
import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { swimmingAchievements } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Medal, Waves, Trophy } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function SwimmingPage() {
    const actionImage = PlaceHolderImages.find(p => p.id === 'swimming-action-2');
    const achievementImage = PlaceHolderImages.find(p => p.id === 'swimming-achievement');
  return (
    <div>
      <PageHeader
        title="Swimming Journey"
        description="Dedication, discipline, and the pursuit of speed in the water. Follow my journey as a competitive swimmer."
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
                <h2 className="text-3xl font-bold font-headline mb-4 flex items-center gap-2"><Waves/> In the Pool</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Swimming has been more than a sport for me; it's a meditative practice and a constant challenge. From early morning practices to the thrill of competition, the pool has taught me resilience, focus, and the importance of every single stroke.
                </p>
            </div>
        </div>
      </PageSection>

      <PageSection className="bg-card">
        <h2 className="text-3xl font-bold text-center mb-10 font-headline flex items-center justify-center gap-3">
          <Trophy /> Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {swimmingAchievements.map((achievement) => (
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
                {achievementImage && (
                    <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg mt-8">
                        <Image
                            src={achievementImage.imageUrl}
                            alt={achievementImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={achievementImage.imageHint}
                        />
                    </div>
                )}
            </div>
        </div>
      </PageSection>
    </div>
  );
}
