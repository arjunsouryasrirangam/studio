
import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { upcomingEvents } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Music, Code, Medal } from 'lucide-react';
import { format } from 'date-fns';

function ShuttlecockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" /><path d="m6 9 6 6 6-6" /><path d="M12 15V21" /><path d="M8 9.5 4 6" /><path d="m16 9.5 4-3.5" /><path d="M12 9.5V6" /><path d="M10 4h4" /><path d="M8 2h8" />
    </svg>
  );
}

const categoryIcons = {
    'Music': <Music className="h-4 w-4" />,
    'Tech': <Code className="h-4 w-4" />,
    'Badminton': <ShuttlecockIcon className="h-4 w-4" />,
};

export default function UpcomingEventsPage() {
  return (
    <div>
      <PageHeader
        title="Upcoming Events"
        description="Stay up-to-date with my latest performances, competitions, and talks. Hope to see you there!"
      />
      <PageSection>
        <div className="max-w-4xl mx-auto space-y-8">
            {upcomingEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden">
                   <CardHeader>
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                           <div>
                                <Badge variant="secondary" className="mb-3 flex w-fit items-center gap-2">
                                    {categoryIcons[event.category as keyof typeof categoryIcons]}
                                    {event.category}
                                </Badge>
                                <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
                           </div>
                           <div className="flex-shrink-0 text-left sm:text-right">
                                <p className="font-semibold text-primary flex items-center gap-2 sm:justify-end">
                                    <Calendar className="h-4 w-4" />
                                    {format(new Date(event.date), 'PPP')}
                                </p>
                                <p className="text-sm text-muted-foreground flex items-center gap-2 sm:justify-end">
                                    <MapPin className="h-4 w-4" />
                                    {event.location}
                                </p>
                           </div>
                        </div>
                   </CardHeader>
                   <CardContent>
                        <p className="text-muted-foreground">{event.description}</p>
                   </CardContent>
                </Card>
            ))}
        </div>
      </PageSection>
    </div>
  );
}
