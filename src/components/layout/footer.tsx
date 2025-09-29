import Logo from '@/components/logo';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../ui/button';

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
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Github /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Linkedin /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Twitter /></Link>
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
