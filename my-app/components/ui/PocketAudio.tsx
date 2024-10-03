import Image from 'next/image'
import Button from './button'
import startPage from "../../app/Assets/page1.webp"

export default function pocketAudio() {
  return (
    <section className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Your Pocket Audio Studio
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional-grade audio tools for musicians, DJs, and producers - now in the palm of your hand
          </p>
         <div className='p-8'>
         <Button linkUrl={''} width={300} height={150}/>
         </div>
          <div className="relative w-full max-w-lg mx-auto">
            <Image
              src={startPage}
              alt="BeatMixer App Screenshot"
              width={300}
              height={600}
              className="rounded-3xl shadow-2xl mx-auto"
            />
          </div>
        </section>
  )
}
