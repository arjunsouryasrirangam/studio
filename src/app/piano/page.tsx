import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { pianoRepertoire } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Piano, Video } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PianoPage() {
    const videoThumb = PlaceHolderImages.find(p => p.id === 'piano-video-thumb');

  return (
    <div>
      <PageHeader
        title="Piano Performances"
        description="The timeless elegance of the piano. Explore my journey through classical and contemporary pieces."
      />
       <PageSection>
        <h2 className="text-3xl font-bold text-center mb-10 font-headline flex items-center justify-center gap-3">
          <Video /> Featured Performance
        </h2>
        <Card className="max-w-4xl mx-auto group overflow-hidden">
            {videoThumb && (
                <div className="relative aspect-video">
                    <Image
                        src={videoThumb.imageUrl}
                        alt={videoThumb.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={videoThumb.imageHint}
                    />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Video className="h-16 w-16 text-white/80 transition-all group-hover:text-white group-hover:scale-110" />
                    </div>
                </div>
            )}
            <CardHeader>
                <CardTitle className="font-headline">Live Concert Excerpt</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">A performance from the annual music gala, featuring Chopin's Nocturne in E-flat Major.</p>
            </CardContent>
        </Card>
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
    </div>
  );
}
