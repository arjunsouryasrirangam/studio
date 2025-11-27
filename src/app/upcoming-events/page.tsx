
import { PageHeader, PageSection } from '@/components/layout/page-layout';
import { upcomingEvents } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Music, CheckCircle2, Ticket, UserPlus, Phone, Mail } from 'lucide-react';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

const categoryIcons = {
    'Music': <Music className="h-4 w-4" />,
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
            {upcomingEvents.length > 0 ? upcomingEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden shadow-lg">
                   <CardHeader className="bg-muted/30">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-grow">
                                <Badge variant="secondary" className="mb-4 flex w-fit items-center gap-2 text-sm">
                                    {categoryIcons[event.category as keyof typeof categoryIcons]}
                                    {event.category}
                                </Badge>
                                <CardTitle className="font-headline text-3xl">{event.title}</CardTitle>
                                <CardDescription className="text-lg !mt-1">{event.subtitle}</CardDescription>
                                <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 pt-4 text-muted-foreground">
                                    <p className="font-semibold text-primary flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        {format(new Date(event.date), 'PPP')}
                                    </p>
                                    <p className="text-sm flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        {event.venue.name}, The Netherlands
                                    </p>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <Image
                                    src="https://i.imgur.com/ODp3s7C.png"
                                    alt="Pinnacle Cultural Forum Logo"
                                    width={120}
                                    height={120}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                   </CardHeader>
                   <CardContent className="p-6 md:p-8 space-y-8">
                        <div>
                            <h3 className="font-headline text-xl font-semibold mb-3">About the Event</h3>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{event.about}</p>
                        </div>
                        
                        <Separator />
                        
                        <div>
                            <h3 className="font-headline text-xl font-semibold mb-4">What You Can Expect</h3>
                            <ul className="space-y-3">
                                {event.whatToExpect.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Separator />

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-headline text-xl font-semibold mb-3 flex items-center gap-2"><Ticket /> Event Details</h3>
                                <div className="rounded-lg border bg-card p-4 space-y-2">
                                    <p><span className='font-semibold'>Date:</span> {format(new Date(event.date), 'MMMM dd, yyyy')}</p>
                                    <p><span className='font-semibold'>Time:</span> {event.details.time}</p>
                                    <p><span className='font-semibold'>Audience Tickets:</span> {event.details.audienceTickets}</p>
                                    <p className="text-sm text-muted-foreground">{event.details.childrenFree}</p>
                                </div>
                            </div>
                             <div>
                                <h3 className="font-headline text-xl font-semibold mb-3 flex items-center gap-2"><UserPlus /> Performer Registration</h3>
                                <div className="rounded-lg border bg-card p-4 space-y-2">
                                    <p><span className='font-semibold'>Registration Fee:</span> {event.registration.fee}</p>
                                    <p className='font-semibold'>Contact for Queries:</p>
                                     <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                                        <Phone className="h-4 w-4" />
                                        <span>{event.registration.contact.phone} (Phone/WhatsApp)</span>
                                    </div>
                                    <a href={`mailto:${event.registration.contact.email}`} className='flex items-center gap-2 text-sm text-primary hover:underline'>
                                        <Mail className="h-4 w-4" />
                                        <span>{event.registration.contact.email}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                         <Separator />
                         
                         <div>
                            <h3 className="font-headline text-xl font-semibold mb-3">Venue</h3>
                            <div className="rounded-lg border bg-card p-4">
                                <p className="font-bold">{event.venue.name}</p>
                                <p className="text-muted-foreground">{event.venue.address}</p>
                                <p className="text-sm text-muted-foreground mt-2">{event.venue.description}</p>
                            </div>
                        </div>
                   </CardContent>
                </Card>
            )) : (
                 <Card className="text-center p-12">
                    <CardHeader>
                        <CardTitle className="font-headline">No Upcoming Events</CardTitle>
                        <CardDescription>Please check back soon for future performances and engagements!</CardDescription>
                    </CardHeader>
                 </Card>
            )}
        </div>
      </PageSection>
    </div>
  );
}
