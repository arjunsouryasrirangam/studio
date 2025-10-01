import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { favoriteRagas } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Mic, Music2, School } from 'lucide-react';
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
    </div>
  );
}
