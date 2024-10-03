import { WormIcon, Mic2, Volume2 } from "lucide-react";
import { Card, CardContent } from "./card";

export default function Features() {
  return (
    <section className="py-20 bg-white rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Powerful Features in Your Pocket
          </h3>
          <div className="grid md:grid-cols-3 gap-8 px-4">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <WormIcon className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Multi-track Mixing</h4>
                <p className="text-gray-600">Mix up to 32 tracks with precision controls</p>
                <h6>(coming soon)</h6>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Mic2 className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Studio-Quality Effects</h4>
                <p className="text-gray-600">Access pro-grade audio plugins on the go</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Volume2 className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Cloud Collaboration</h4>
                <p className="text-gray-600">Work with your team in real-time, anywhere</p>
              </CardContent>
            </Card>
          </div>
        </section>
  )
}
