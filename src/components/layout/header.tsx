
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Code, Music, Piano, Waves, Home, Images, PencilRuler, Contact } from 'lucide-react';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


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
  { href: '/singing', label: 'Music', icon: <Music size={20} /> },
  { href: '/piano', label: 'Piano', icon: <Piano size={20} /> },
  { href: '/swimming', label: 'Swimming', icon: <Waves size={20} /> },
  { href: '/badminton', label: 'Badminton', icon: <ShuttlecockIcon /> },
  { href: '/gallery', label: 'Gallery', icon: <Images size={20} /> },
  { href: '/request-website', label: 'Request Website', icon: <PencilRuler size={16} /> },
  { href: '/contact', label: 'Contact', icon: <Contact size={16} /> },
];

const NavLink = ({ href, children, className, icon }: { href: string; children: React.ReactNode; className?: string, icon?: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={cn(
      "relative group font-medium text-sm flex items-center gap-2",
      isActive ? "text-primary font-bold" : "text-foreground/80 hover:text-foreground",
      className
    )}>
      {icon}
      <span>{children}</span>
       <span className={cn(
        "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
        isActive ? "w-full" : "w-0 group-hover:w-full"
      )}></span>
    </Link>
  );
};

const mainNavLinks = navLinks.filter(link => !['/request-website', '/contact', '/admin'].includes(link.href));
const rightNavLinks = navLinks.filter(link => ['/request-website', '/contact'].includes(link.href));


export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center flex-1 md:flex-none">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-8 w-auto" />
            <span className="hidden font-bold sm:inline-block font-headline text-lg">Arjun Sourya Srirangam</span>
          </Link>
        </div>

        {/* Center: Main Nav Icons (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
           <TooltipProvider>
            <nav className="flex items-center space-x-2 rounded-full border bg-secondary/50 p-1">
              {mainNavLinks.map((link) => (
                <Tooltip key={link.href} delayDuration={0}>
                  <TooltipTrigger asChild>
                     <Button
                      asChild
                      variant={pathname.startsWith(link.href) && link.href !== '/' || pathname === '/' && link.href === '/' ? "secondary" : "ghost"}
                      size="icon"
                      className="rounded-full"
                    >
                      <Link href={link.href}>
                        {link.icon}
                        <span className="sr-only">{link.label}</span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="flex items-center gap-4">
                    {link.label}
                  </TooltipContent>
                </Tooltip>
              ))}
            </nav>
          </TooltipProvider>
        </div>


        {/* Right Side: Links and Mobile Menu Trigger */}
        <div className="flex items-center justify-end flex-1 md:flex-none">
            <nav className="hidden md:flex items-center space-x-6 text-sm">
                 {rightNavLinks.map((link) => (
                    <NavLink key={link.href} href={link.href} icon={link.icon}>{link.label}</NavLink>
                ))}
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden ml-4">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] p-0">
                <div className="flex flex-col h-full">
                    <div className="p-6 border-b">
                        <Link href="/" className="flex items-center space-x-2">
                        <Logo className="h-8 w-auto" />
                        <span className="font-bold font-headline">Arjun Sourya Srirangam</span>
                        </Link>
                    </div>
                    <nav className="flex-1 flex flex-col space-y-1 p-4">
                    {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                            <Link
                            href={link.href}
                            className={cn(
                                'flex items-center space-x-3 rounded-md p-3 transition-colors hover:bg-secondary',
                                pathname.startsWith(link.href) && link.href !== '/' || pathname === '/' && link.href === '/' ? 'bg-secondary text-primary font-semibold' : 'text-foreground/80 hover:text-foreground'
                            )}
                            >
                            {link.icon}
                            <span className="font-medium">{link.label}</span>
                            </Link>
                        </SheetClose>
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
