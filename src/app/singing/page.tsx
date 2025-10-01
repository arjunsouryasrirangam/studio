import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { audioSamples, singingRepertoire } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Mic, Music2, PlayCircle, School } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SingingPage() {
  return (
    <div>
      <PageHeader
        title="Singing Portfolio"
        description="A collection of my vocal performances, from intimate acoustic sessions to powerful stage numbers."
      />
      <PageSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          <div className="md:col-span-1">
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
          <div className="md:col-span-1 space-y-8">
             <h2 className="text-3xl font-bold font-headline mb-4 flex items-center gap-2"><PlayCircle/> Audio Samples</h2>
            {audioSamples.map((sample) => {
              const sampleImage = PlaceHolderImages.find(p => p.id === sample.imageId);
              return (
                <Card key={sample.title} className="group overflow-hidden">
                  <div className="relative aspect-video">
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
