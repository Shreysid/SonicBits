"use client";

import { Star } from "lucide-react";
import Navbar from "./ui/Navbar";
import PocketAudio from "./ui/PocketAudio";
import Features from "./ui/Features";
import Screenshots from "./ui/Screenshots";
import Button from "./ui/button";
import Footer from "./ui/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="container mx-auto px-4">
        <div>
          <PocketAudio />
        </div>

        <div>
          <Features />
        </div>

        <div>
          <Screenshots />
        </div>

        <section className="py-20 bg-white rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            What Our Users Say
          </h3>
          <div className="flex justify-center items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto text-center italic">
            &quot;SonicBits has completely transformed how I produce music on
            the go. It&apos;s like having a full studio in my pocket!&quot;
          </blockquote>
          <p className="text-gray-800 font-semibold text-center">
            - Cleo Murray, Independent Artist
          </p>
        </section>

        <section className="py-20 text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">
            Get BeatMixer Today
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of musicians who are creating professional-quality
            tracks on their mobile devices.
          </p>
          <div className="flex justify-center space-x-4">
            <Button linkUrl={"https://example.com"} width={100} height={250} />
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
