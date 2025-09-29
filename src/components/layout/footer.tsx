import Logo from '@/components/logo';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
             <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-auto" />
              <span className="font-bold text-lg font-headline">Arjun's Echoes</span>
            </Link>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Arjun's Echoes. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
