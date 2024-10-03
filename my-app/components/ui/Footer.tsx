"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Footer() {

  const router = useRouter();

  
  return (
    <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 SonicBits. All rights reserved.</p>
          <div className="mt-4">
            <Link href="/privacy" className="text-indigo-600 hover:underline mx-2">
              Privacy Policy
            </Link>
            <Link href="/services" className="text-indigo-600 hover:underline mx-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
  )
}
