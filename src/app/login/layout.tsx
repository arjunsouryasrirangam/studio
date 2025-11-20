
import { Suspense, type ReactNode } from 'react';

export default function LoginLayout({ children }: { children: ReactNode }) {
  // The login page uses `useSearchParams`, which must be wrapped in a Suspense boundary
  // to prevent build errors on platforms like Vercel.
  return <Suspense>{children}</Suspense>;
}
