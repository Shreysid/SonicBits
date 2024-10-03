import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Privacy Policy</h1>
        <p className="text-gray-600 text-center mb-6">Last updated: October 03, 2024</p>

        <p className="mb-4 text-gray-700">
          This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
          We are committed to safeguarding your privacy and ensuring your data is protected under applicable laws.
        </p>
        <p className="mb-8 text-gray-700">
          By using our services, you agree to the collection and use of your information in accordance with this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Interpretation and Definitions</h2>

        <h3 className="text-xl font-semibold mb-2 text-gray-800">Interpretation</h3>
        <p className="mb-4 text-gray-700">
          Words with capitalized letters have specific meanings, whether used in singular or plural.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-800">Definitions</h3>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li><strong>Account</strong>: A unique account created for you to access our service.</li>
          <li><strong>Affiliate</strong>: Any entity controlled by, controlling, or under common control with us.</li>
          <li><strong>Application</strong>: SonicBits, the software provided by the Company.</li>
          <li><strong>Company</strong>: SonicBits, referred to as &quot;the Company,&quot; &quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot;.</li>
          <li><strong>Country</strong>: Karnataka, India.</li>
          <li><strong>Device</strong>: Any device capable of accessing our service.</li>
          <li><strong>Personal Data</strong>: Any information related to an identifiable individual.</li>
          <li><strong>Service</strong>: Refers to the SonicBits application.</li>
          <li><strong>Service Provider</strong>: Third parties who process data on behalf of the Company.</li>
          <li><strong>Usage Data</strong>: Data collected automatically during your use of the Service.</li>
          <li><strong>You</strong>: The individual using our Service or the entity they represent.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Collecting and Using Your Data</h2>

        <h3 className="text-xl font-semibold mb-2 text-gray-800">Types of Data Collected</h3>
        <h4 className="text-lg font-semibold mb-2 text-gray-800">Personal Data</h4>
        <p className="mb-4 text-gray-700">
          We may ask for personally identifiable information when you use our service, such as usage data, device information, and more.
        </p>

        <h4 className="text-lg font-semibold mb-2 text-gray-800">Usage Data</h4>
        <p className="mb-8 text-gray-700">
          Usage data is collected automatically and may include your device&rsquo;s IP address, browser type, and interactions with the service.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-800">How We Use Your Data</h3>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li><strong>To provide and maintain the service</strong>, including monitoring usage.</li>
          <li><strong>Account management</strong>, allowing you access to the service.</li>
          <li><strong>Contract performance</strong>, processing and delivering purchases or services.</li>
          <li><strong>Communications</strong> via email, phone, or app notifications for updates and relevant information.</li>
          <li><strong>Marketing</strong>, offering news, promotions, or related events unless you opt out.</li>
          <li><strong>Request management</strong> for handling your requests.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Data Sharing</h2>
        <p className="mb-4 text-gray-700">
          We may share your personal information in the following situations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li><strong>With Service Providers</strong>, to monitor usage or contact you.</li>
          <li><strong>Business transfers</strong> during negotiations or transactions involving mergers or sales.</li>
          <li><strong>With Affiliates</strong>, requiring them to honor this Privacy Policy.</li>
          <li><strong>Public interactions</strong>, where shared information may be viewable by others.</li>
          <li><strong>With your consent</strong> for any other purposes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Data Retention</h2>
        <p className="mb-8 text-gray-700">
          We retain your personal data only as long as necessary for the outlined purposes or as required by law.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Data Transfer</h2>
        <p className="mb-8 text-gray-700">
          Your information may be processed in locations with different data protection laws. By using our service, you consent to the transfer of your data. We ensure all data transfers comply with applicable privacy laws.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Data Deletion</h2>
        <p className="mb-8 text-gray-700">
          You can request deletion of your personal data. However, we may retain some information for legal reasons.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Disclosure of Your Data</h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Business Transactions</h3>
        <p className="mb-4 text-gray-700">
          Your personal data may be transferred during business transactions such as mergers or sales.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Legal Requirements</h3>
        <p className="mb-8 text-gray-700">
          We may disclose your data when required by law or to protect the Company&rsquo;s rights and safety.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Security</h2>
        <p className="mb-8 text-gray-700">
          We take reasonable steps to protect your data, but no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Children&rsquo;s Privacy</h2>
        <p className="mb-8 text-gray-700">
          We do not knowingly collect personal data from anyone under 13. If you believe your child has provided us with personal data, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Changes to this Policy</h2>
        <p className="mb-8 text-gray-700">
          We may update this policy from time to time and will notify you of any changes by posting the new policy here.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">11. Contact Us</h2>
        <p className="mb-2 text-gray-700">If you have any questions, you can contact us:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>By email: <a href="mailto:Shreysid2352@gmail.com" className="text-blue-600 hover:underline">Shreysid2352@gmail.com</a></li>
          <li>By visiting our website: <a href="https://sonic-bits.vercel.app/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
