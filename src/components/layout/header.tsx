'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Code, Music, Piano, Waves, Dna, Contact, Home, Images } from 'lucide-react';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

function ShuttlecockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
      <path d="m6 9 6 6 6-6" />
      <path d="M12 15V21" />
      <path d="M8 9.5 4 6" />
      <path d="m16 9.5 4-3.5" />
      <path d="M12 9.5V6" />
      <path d="M10 4h4" />
      <path d="M8 2h8" />
    </svg>
  );
}

const navLinks = [
  { href: '/', label: 'Home', icon: <Home size={20} /> },
  { href: '/tech', label: 'Tech', icon: <Code size={20} /> },
  { href: '/singing', label: 'Singing', icon: <Music size={20} /> },
  { href: '/piano', label: 'Piano', icon: <Piano size={20} /> },
  { href: '/swimming', label: 'Swimming', icon: <Waves size={20} /> },
  { href: '/badminton', label: 'Badminton', icon: <ShuttlecockIcon /> },
  { href: '/gallery', label: 'Gallery', icon: <Images size={20} /> },
  { href: '/ai-bio', label: 'AI Bio', icon: <Dna size={20} /> },
  { href: '/contact', label: 'Contact', icon: <Contact size={20} /> },
];

const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={cn(
      "relative group font-medium text-sm",
      isActive ? "text-primary font-bold" : "text-foreground/80 hover:text-foreground",
      className
    )}>
      <span>{children}</span>
       <span className={cn(
        "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
        isActive ? "w-full" : "w-0 group-hover:w-full"
      )}></span>
    </Link>
  );
};


export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-8 w-auto" />
            <span className="hidden font-bold sm:inline-block font-headline">Arjun Sourya Srirangam</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            {navLinks.slice(1, 5).map((link) => (
              <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end gap-4">
            <nav className="hidden md:flex items-center space-x-6 text-sm">
                 {navLinks.slice(5).map((link) => (
                    <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
                ))}
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] p-0">
                <div className="flex flex-col h-full">
                    <div className="p-6">
                        <Link href="/" className="flex items-center space-x-2">
                        <Logo className="h-8 w-auto" />
                        <span className="font-bold font-headline">Arjun Sourya Srirangam</span>
                        </Link>
                    </div>
                    <nav className="flex-1 flex flex-col space-y-2 p-6">
                    {navLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            'flex items-center space-x-3 rounded-md p-3 transition-colors hover:bg-secondary',
                            pathname === link.href ? 'bg-secondary text-primary font-semibold' : 'text-foreground/80 hover:text-foreground'
                        )}
                        >
                        {link.icon}
                        <span className="font-medium">{link.label}</span>
                        </Link>
                    ))}
                    </nav>
                </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
