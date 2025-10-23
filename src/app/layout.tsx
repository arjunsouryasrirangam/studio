import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';
import { Alegreya, Belleza } from 'next/font/google';
import { FirebaseClientProvider } from '@/firebase';
import { AiAssistant } from '@/components/ai-assistant/ai-assistant';

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
});

const belleza = Belleza({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-belleza',
});

export const metadata: Metadata = {
  title: "Arjun Sourya Srirangam",
  description: "The personal portfolio of Arjun Sourya Srirangam, showcasing skills in tech, music, and sports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alegreya.variable} ${belleza.variable} dark`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;700&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased pb-24">
        <FirebaseClientProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <AiAssistant />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
