import { ReactNode } from 'react';

type PageLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card border-b">
      <div className="container mx-auto py-12 md:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>
      </div>
    </div>
  );
}


export function PageSection({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}
