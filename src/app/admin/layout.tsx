
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, type ReactNode, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

function AdminHeader() {
    const router = useRouter();

    const handleLogout = () => {
        sessionStorage.removeItem('isAdminAuthenticated');
        router.push('/login');
    };

    return (
        <div className="bg-card border-b mb-8">
            <div className="container mx-auto py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold font-headline">Admin Dashboard</h1>
                <Button variant="outline" size="sm" onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    );
}


export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated') === 'true';
    
    if (!isAuthenticated) {
      // Store the intended path to redirect back after login.
      const redirectUrl = `/login?redirect=${pathname}`;
      router.replace(redirectUrl);
    } else {
      setIsVerified(true);
    }
  }, [router, pathname]);

  // While checking authentication, show a loader.
  if (!isVerified) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  // If verified, render the protected admin layout.
  return (
    <div>
        <AdminHeader />
        {children}
    </div>
  );
}
