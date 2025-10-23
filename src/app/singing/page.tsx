




import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { favoriteRagas } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Mic, Music2, School, Video, Youtube, Camera } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const latestPerformance = {
    imageId: 'singing-performance-1',
    title: 'Diwali 2025 Maitri Foundation EU',
    description: 'A recent vocal performance video.',
    link: 'https://youtube.com/shorts/yN6K45jDejo?feature=share'
};

const performanceImages = [
    'singing-performance-1',
    'singing-performance-2',
    'singing-performance-3',
    'singing-performance-4'
];

export default function SingingPage() {
  return (
    <div>
      <PageHeader
        title="Singing Portfolio"
        description="A collection of my vocal performances, from intimate acoustic sessions to powerful stage numbers."
      />
      <PageSection>
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-headline mb-4 flex items-center gap-2"><Mic/> Vocal Journey</h2>
            <Card>
                <CardHeader>
                    <CardTitle className='font-headline'>Hindustani Classical Vocalist</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>I am a Hindustani classical vocalist and have completed Prarambik P1, P2, P3, Bhushan P1, P2 and now studying for P3 Bhushan. I have also had the honor of winning multiple prizes at various competitions.</p>
                    <div>
                        <p className="font-semibold text-foreground">My Teacher:</p>
                        <p>Respected Prajna Bhattacharya Ma'am</p>
                    </div>
                     <div>
                        <p className="font-semibold text-foreground flex items-center gap-2"><School className='h-4 w-4'/>Head of Sangeeti School of Music:</p>
                        <p>Himalayapad 4, 2622 JW, Delft</p>
                        <Button asChild variant="link" className='p-0 h-auto'>
                            <Link href="https://sangeeti.com" target="_blank" rel="noopener noreferrer">sangeeti.com</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </PageSection>
      <PageSection className="bg-card">
        <h2 className="text-3xl font-bold text-center mb-10 font-headline flex items-center justify-center gap-3">
          <Music2 /> Favorite Ragas
        </h2>
        <Card className="max-w-2xl mx-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Raga</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {favoriteRagas.map((raga) => (
                        <TableRow key={raga}>
                            <TableCell className="font-medium text-lg">{raga}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
      </PageSection>
      <PageSection>
        <h2 className="text-3xl font-bold text-center mb-10 font-headline flex items-center justify-center gap-3">
        <Youtube /> My Latest Performance
        </h2>
        <div className="flex justify-center">
            <div className="max-w-2xl w-full">
                {(() => {
                    const image = PlaceHolderImages.find(p => p.id === latestPerformance.imageId);
                    return (
                        <Card className="group overflow-hidden">
                            {image && (
                                <Link href={latestPerformance.link} className='block' target="_blank" rel="noopener noreferrer">
                                    <div className="relative aspect-video">
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.description}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            data-ai-hint={image.imageHint}
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <Video className="h-16 w-16 text-white/80 transition-all group-hover:text-white group-hover:scale-110" />
                                        </div>
                                    </div>
                                </Link>
                            )}
                            <CardHeader>
                                <CardTitle className="font-headline">{latestPerformance.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{latestPerformance.description}</p>
                            </CardContent>
                        </Card>
                    )
                })()}
            </div>
        </div>
      </PageSection>
      <PageSection  className="bg-card">
        <h2 className="text-3xl font-bold text-center mb-10 font-headline flex items-center justify-center gap-3">
          <Camera /> Event Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {performanceImages.map((imageId) => {
                const image = PlaceHolderImages.find(p => p.id === imageId);
                return (
                    image && (
                         <div key={image.id} className="group relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={image.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium line-clamp-2">{image.description}</p>
                        </div>
                    )
                );
            })}
        </div>
      </PageSection>
    </div>
  );
}
