import Image from "next/image"

export default function Screenshots() {
  return (
    <section className="py-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            App Screenshots
          </h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-none w-64 h-128">
                <Image
                  src={`/placeholder.svg?height=512&width=256&text=Screenshot ${i}`}
                  alt={`App Screenshot ${i}`}
                  width={256}
                  height={512}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </section>
  )
}
