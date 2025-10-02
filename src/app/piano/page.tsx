import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { pianoRepertoire } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Piano, Video, School, Youtube, User } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const videoPlaceholders = [
    {
        imageId: 'piano-video-thumb-1',
        title: 'Classical Piano Piece',
        description: 'A performance from a recent recital.'
    },
    {
        imageId: 'piano-video-thumb-2',
        title: 'Contemporary Piano Cover',
        description: 'A modern arrangement of a popular song.'
    }
]

export default function PianoPage() {
    const videoThumb = PlaceHolderImages.find(p => p.id === 'piano-video-thumb');

  return (
    <div>
      <PageHeader
        title="Piano Performances"
        description="The timeless elegance of the piano. Explore my journey through classical and contemporary pieces."
      />
       <PageSection>
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-headline mb-4 flex items-center gap-2"><Piano/> Piano Journey</h2>
            <Card>
                <CardHeader>
                    <CardTitle className='font-headline'>Pianist</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>My journey with the piano has been one of perseverance. Over the past four years, I've navigated the challenges of switching schools multiple times. Through it all, my mother's unwavering motivation has been my anchor, encouraging me to stick with my passion. It's a journey that has taught me as much about resilience as it has about music.</p>
                    <div>
                        <p className="font-semibold text-foreground flex items-center gap-2"><User className='h-4 w-4' />My Teacher:</p>
                        <p>Respected Aimilianos Starvinos Sir</p>
                    </div>
                     <div>
                        <p className="font-semibold text-foreground flex items-center gap-2"><School className='h-4 w-4'/>School:</p>
                        <p>Home Music Teachers NL</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </PageSection>
      <PageSection className="bg-card">
        <h2 className="text-3xl font-bold text-center mb-10 font-headline flex items-center justify-center gap-3">
          <Piano /> Repertoire
        </h2>
        <Card className="max-w-4xl mx-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Piece</TableHead>
                        <TableHead>Composer</TableHead>
                        <TableHead className="text-right">Era</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {pianoRepertoire.map((piece) => (
                        <TableRow key={piece.title}>
                            <TableCell className="font-medium">{piece.title}</TableCell>
                            <TableCell className="text-muted-foreground">{piece.composer}</TableCell>
                            <TableCell className="text-right text-muted-foreground">{piece.era}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
      </PageSection>
      <PageSection>
            <h2 className="text-3xl font-bold text-center mb-10 font-headline flex items-center justify-center gap-3">
            <Youtube /> Performances
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {videoPlaceholders.map((video) => {
                    const image = PlaceHolderImages.find(p => p.id === video.imageId);
                    return (
                         <Card key={video.imageId} className="group overflow-hidden">
                            {image && (
                                <Link href="#" className='block'>
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
                                <CardTitle className="font-headline">{video.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{video.description}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
      </PageSection>
    </div>
  );
}
