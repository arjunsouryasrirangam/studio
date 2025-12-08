
import Logo from '@/components/logo';
import Link from 'next/link';
import { Youtube, Instagram, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

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
                <Link href="https://www.snapchat.com/add/sarjunsourya/" target="_blank" rel="noopener noreferrer">
                    <Image src="https://i.imgur.com/ZsQmbuH.png" alt="Snapchat" width={20} height={20} />
                </Link>
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
