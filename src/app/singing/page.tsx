
import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { favoriteRagas } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Mic, Music2, School, Video, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const videoPlaceholders = [
    {
        imageId: 'singing-video-thumb-1',
        title: 'Vocal Performance',
        description: 'A recent vocal performance video.',
        link: 'https://youtube.com/shorts/yN6K45jDejo?feature=share'
    },
    {
        imageId: 'singing-video-thumb-2',
        title: 'Competition Highlights',
        description: 'A compilation of prize-winning moments from various vocal competitions.',
        link: '#'
    }
]

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
            <Youtube /> Performances
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {videoPlaceholders.map((video) => {
                    const image = PlaceHolderImages.find(p => p.id === video.imageId);
                    return (
                         <Card key={video.imageId} className="group overflow-hidden">
                            {image && (
                                <Link href={video.link} className='block' target="_blank" rel="noopener noreferrer">
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
