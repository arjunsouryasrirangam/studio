
'use client';

import { useUser } from '@/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAuth, signOut } from 'firebase/auth';

function AdminHeader() {
    const { user } = useUser();
    const router = useRouter();

    const handleLogout = async () => {
        const auth = getAuth();
        await signOut(auth);
        router.push('/login');
    };

    return (
        <div className="bg-card border-b mb-8">
            <div className="container mx-auto py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold font-headline">Admin Dashboard</h1>
                {user && (
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground hidden sm:inline">{user.email}</span>
                        <Button variant="outline" size="sm" onClick={handleLogout}>Logout</Button>
                    </div>
                )}
            </div>
        </div>
    );
}


export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // If auth state is not loading and there's no user, redirect to login.
    if (!isUserLoading && !user) {
      // Store the intended path to redirect back after login.
      const redirectUrl = `/login?redirect=${pathname}`;
      router.push(redirectUrl);
    }
  }, [user, isUserLoading, router, pathname]);

  // While loading, show a spinner to prevent flicker.
  if (isUserLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  // If there is a user, render the protected admin layout.
  if (user) {
    return (
        <div>
            <AdminHeader />
            {children}
        </div>
    );
  }

  // If no user and not loading (i.e., during redirect), render nothing.
  return null;
}
