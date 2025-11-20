
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, LogIn } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Label } from '@/components/ui/label';

// This is a simple, hardcoded secret for demonstration.
// In a real application, this should be handled more securely.
const ADMIN_SECRET = 'sarjunsourya.40315@';

export default function LoginPage() {
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if user is already authenticated in this session
    if (sessionStorage.getItem('isAdminAuthenticated') === 'true') {
      setIsAuthenticated(true);
      const redirect = searchParams.get('redirect') || '/admin';
      router.push(redirect);
    }
  }, [router, searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a network request
    setTimeout(() => {
      if (password === ADMIN_SECRET) {
        sessionStorage.setItem('isAdminAuthenticated', 'true');
        toast({
          title: 'Signed In',
          description: 'You have successfully signed in.',
        });
        const redirect = searchParams.get('redirect') || '/admin';
        router.push(redirect);
      } else {
        toast({
          variant: 'destructive',
          title: 'Authentication Failed',
          description: 'Invalid password. Please try again.',
        });
        setIsSubmitting(false);
        setPassword('');
      }
    }, 500);
  };
  
  if (isAuthenticated) {
     return (
          <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
              <Loader2 className="h-16 w-16 animate-spin text-primary" />
          </div>
      )
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Admin Login</CardTitle>
          <CardDescription>Enter the password to access the admin dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
             <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isSubmitting}
                />
             </div>
            <Button type="submit" disabled={isSubmitting || !password} className="w-full">
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <LogIn className="mr-2 h-4 w-4" />
              )}
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
