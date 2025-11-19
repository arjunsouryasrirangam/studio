
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
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.5 10.5c-2.8 3.4-3.3 4.8-3.3 4.8s-.5-1.4-3.3-4.8c-2.3-2.7-6-3-6-3S3 21 11.2 21c8.2 0 8.3-7.5 8.3-7.5s-3.7.3-6-3z" />
            <path d="M12 1.5L9.5 4h5L12 1.5z" />
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
