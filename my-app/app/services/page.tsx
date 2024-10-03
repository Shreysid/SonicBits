import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Terms and Conditions</h1>
        <p className="text-gray-600 text-center mb-6">Last updated: October 03, 2024</p>

        <p className="mb-8 text-gray-700">
          Please read these terms and conditions carefully before using Our Service.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Interpretation and Definitions</h2>

        <h3 className="text-xl font-semibold mb-2 text-gray-800">Interpretation</h3>
        <p className="mb-4 text-gray-700">
          Words with capitalized letters have meanings defined under the following conditions. These definitions have the same meaning regardless of whether they appear in singular or plural.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-800">Definitions</h3>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li><strong>Application</strong>: SonicBits, the software provided by the Company.</li>
          <li><strong>Application Store</strong>: Digital distribution service operated by Apple (App Store) or Google (Play Store).</li>
          <li><strong>Affiliate</strong>: Entity that controls, is controlled by, or is under common control with a party (ownership of 50% or more).</li>
          <li><strong>Country</strong>: Karnataka, India.</li>
          <li><strong>Company</strong>: SonicBits, referred to as "We", "Us", or "Our".</li>
          <li><strong>Device</strong>: Any device that can access the service, such as a computer, cellphone, or tablet.</li>
          <li><strong>Service</strong>: The Application, Website, or both.</li>
          <li><strong>Terms and Conditions</strong>: The agreement governing the use of the Service.</li>
          <li><strong>Third-party Social Media Service</strong>: Any content or service provided by third parties that may be included in the Service.</li>
          <li><strong>Website</strong>: SonicBits, accessible from <a href="https://sonic-bits.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://sonic-bits.vercel.app</a>.</li>
          <li><strong>You</strong>: The individual using the Service or the legal entity on whose behalf the individual is using the Service.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Acknowledgment</h2>
        <p className="mb-8 text-gray-700">
          These are the Terms and Conditions governing your use of this Service and the agreement that operates between You and the Company. By accessing or using the Service, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Links to Other Websites</h2>
        <p className="mb-8 text-gray-700">
          Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company is not responsible for the content or privacy practices of any third-party sites.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Termination</h2>
        <p className="mb-8 text-gray-700">
          We may terminate or suspend your access immediately for any reason, including if you breach these Terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Limitation of Liability</h2>
        <p className="mb-8 text-gray-700">
          To the maximum extent permitted by applicable law, the Company and its suppliers will not be liable for any special, incidental, or consequential damages, even if advised of the possibility of such damages.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. "AS IS" and "AS AVAILABLE" Disclaimer</h2>
        <p className="mb-8 text-gray-700">
          The Service is provided "AS IS" and "AS AVAILABLE", without warranties of any kind. The Company makes no representations or warranties of any kind regarding the operation of the Service.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Governing Law</h2>
        <p className="mb-8 text-gray-700">
          The laws of Karnataka, India, govern these Terms. Your use of the Service may be subject to other local, state, national, or international laws.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Disputes Resolution</h2>
        <p className="mb-8 text-gray-700">
          If you have any concerns or disputes, you agree to try resolving the dispute informally by contacting the Company.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Severability and Waiver</h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Severability</h3>
        <p className="mb-4 text-gray-700">
          If any provision of these Terms is held to be unenforceable or invalid, the remaining provisions will continue in effect.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-800">Waiver</h3>
        <p className="mb-8 text-gray-700">
          The failure to exercise a right or require performance of an obligation under these Terms does not affect a party's ability to exercise such right in the future.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Changes to These Terms and Conditions</h2>
        <p className="mb-8 text-gray-700">
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide notice at least 30 days before new terms take effect.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">11. Contact Us</h2>
        <p className="mb-4 text-gray-700">If you have any questions about these Terms and Conditions, please contact us:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>By visiting this page on our website: <a href="https://sonic-bits.vercel.app/services" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://sonic-bits.vercel.app/services</a></li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TermsAndConditions;
