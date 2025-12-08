
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
           <path d="M21.938 10.953c0-5.32-4.396-9.62-9.82-9.62-5.42 0-9.82 4.3-9.82 9.62 0 4.148 2.65 7.68 6.285 8.973-.02.093-.037.19-.037.285 0 .82.67 1.488 1.49 1.488.59 0 1.1-.342 1.348-.842.382.083.782.126 1.19.126.23 0 .45-.017.67-.04.41.59 1.05.98 1.8.98.82 0 1.49-.67 1.49-1.49 0-.093-.016-.182-.037-.273 3.638-1.29 6.288-4.82 6.288-8.96zm-18.425 4.316c-.49 0-.885-.39-.885-.87s.395-.87.885-.87c.49 0 .885.39.885.87s-.395.87-.885.87zm15.19 0c-.49 0-.885-.39-.885-.87s.395-.87.885-.87c.49 0 .885.39.885.87s-.395.87-.885.87z"/>
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
