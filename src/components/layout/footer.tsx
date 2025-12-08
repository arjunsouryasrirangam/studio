
import Logo from '@/components/logo';
import Link from 'next/link';
import { Youtube, Instagram, Mail } from 'lucide-react';
import { Button } from '../ui/button';

function SnapchatIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
        >
           <path d="M12 3.2c-4.9 0-8.8 3.9-8.8 8.8 0 4.9 3.9 8.8 8.8 8.8s8.8-3.9 8.8-8.8c0-4.9-3.9-8.8-8.8-8.8zm3.6 11.2c0 .3-.1.6-.3.8-.2.2-.5.4-.8.4h-5c-.3 0-.6-.1-.8-.4-.2-.2-.3-.5-.3-.8V9.8c0-.3.1-.6.3-.8.2-.2.5-.4.8-.4h5c.3 0 .6.1.8.4.2.2.3.5.3.8v4.6z"/>
        </svg>
    );
}


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center justify-center md:justify-start">
             <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-auto" />
              <span className="font-bold text-lg font-headline">Arjun Sourya Srirangam</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://youtube.com/@sarjunsourya/" target="_blank" rel="noopener noreferrer"><Youtube /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://instagram.com/sarjunsourya/" target="_blank" rel="noopener noreferrer"><Instagram /></Link>
            </Button>
             <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.snapchat.com/add/sarjunsourya/" target="_blank" rel="noopener noreferrer"><SnapchatIcon className="h-5 w-5" /></Link>
            </Button>
             <Button variant="ghost" asChild className="h-auto p-2">
                <Link href="mailto:hello@sarjunsourya.com" className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    hello@sarjunsourya.com
                </Link>
            </Button>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Arjun Sourya Srirangam. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
