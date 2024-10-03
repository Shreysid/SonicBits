import Footer from "@/components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Frequently Asked Questions (FAQ)</h2>

        <div className="max-w-2xl mx-auto space-y-8 text-gray-800">
          <div>
            <h3 className="font-semibold text-lg">1. How do I record a sound sample?</h3>
            <p>To record a sound, simply tap the record button on the main interface. You can use your device&rsquo;s built-in microphone or connect an external mic for higher quality. Once you&rsquo;re done, tap the stop button to save your recording.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">2. Can I change the pitch of my recording?</h3>
            <p>Yes! After recording, you can use our pitch alteration feature to shift your sample to different musical notes. Just play around with the keyboard, and each key will alter the pitch accordingly.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">3. How do I play the recorded sound on the keyboard?</h3>
            <p>After recording your sample, head to the interactive keyboard. Each key corresponds to a specific note, and playing the keys will alter the pitch of your sample. Experiment and create melodies using your own sounds!</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">4. Can I loop my recorded sounds?</h3>
            <p>Absolutely! You can loop sections of your recording to create continuous sound patterns. This feature is perfect for building rhythmic loops or layers in your composition.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">5. What effects can I add to my samples?</h3>
            <p>SoundSampler Pro offers a range of effects like reverb, delay, and more. You can apply these effects after recording to enhance your sound and make it more dynamic.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">6. Can I save my recordings and share them?</h3>
            <p>Yes, you can save all your recordings to your device. You can also share them with others directly from the app, whether through social media, email, or other platforms.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">7. Is there a tutorial to help me get started?</h3>
            <p>Yes, we provide in-app tutorials and tips to guide you through recording, playing, and altering your samples. These tutorials are designed to help you master the features quickly.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">8. What file formats does SoundSampler Pro support for saving?</h3>
            <p>Currently, SoundSampler Pro supports saving your recordings in standard audio formats such as WAV and MP3 for compatibility across devices and software.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">9. Can I use an external microphone for recording?</h3>
            <p>Yes! You can connect an external microphone to your device for higher-quality recordings. Just ensure that your external mic is compatible with your device.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">10. How do I report a bug or request new features?</h3>
            <p>If you encounter any issues or have feature requests, you can reach out to our support team through the app&rsquo;s settings or email us at [support email]. We&rsquo;re always happy to help!</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
