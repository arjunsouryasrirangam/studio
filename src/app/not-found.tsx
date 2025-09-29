import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <h1 className="text-9xl font-bold text-primary font-headline">404</h1>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight font-headline">Page Not Found</h2>
      <p className="mt-2 text-lg text-muted-foreground">
        Oops! The page you're looking for doesn't seem to exist.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}
