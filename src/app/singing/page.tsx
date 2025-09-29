import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { audioSamples, singingRepertoire } from '@/lib/placeholder-data';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Music2, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function SingingPage() {
  return (
    <div>
      <PageHeader
        title="Singing Portfolio"
        description="A collection of my vocal performances, from intimate acoustic sessions to powerful stage numbers."
      />
      <PageSection>
        <h2 className="text-3xl font-bold text-center mb-10 font-headline flex items-center justify-center gap-3">
          <PlayCircle /> Audio Samples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audioSamples.map((sample) => {
            const sampleImage = PlaceHolderImages.find(p => p.id === sample.imageId);
            return (
              <Card key={sample.title} className="group overflow-hidden">
                <div className="relative aspect-square">
                  {sampleImage && (
                    <Image
                      src={sampleImage.imageUrl}
                      alt={sampleImage.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={sampleImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white/80 transition-all group-hover:text-white group-hover:scale-110" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-center">{sample.title}</CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </PageSection>
      <PageSection className="bg-card">
        <h2 className="text-3xl font-bold text-center mb-10 font-headline flex items-center justify-center gap-3">
          <Music2 /> Repertoire
        </h2>
        <Card className="max-w-4xl mx-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Artist</TableHead>
                        <TableHead className="text-right">Genre</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {singingRepertoire.map((song) => (
                        <TableRow key={song.title}>
                            <TableCell className="font-medium">{song.title}</TableCell>
                            <TableCell className="text-muted-foreground">{song.artist}</TableCell>
                            <TableCell className="text-right text-muted-foreground">{song.genre}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
      </PageSection>
    </div>
  );
}
