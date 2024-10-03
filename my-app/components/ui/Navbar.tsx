"use client"; // Required when using `useRouter` in client components

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Component() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/FAQ'); // Redirect to '/Support'
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white bg-opacity-70 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-blue-800">SonicBits</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Links */}
              <Link
                href="/support"
                className="text-gray-800 hover:bg-gray-200 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Support
              </Link>
              <Link
                href="/privacy"
                className="text-gray-800 hover:bg-gray-200 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/services"
                className="text-gray-800 hover:bg-gray-200 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
