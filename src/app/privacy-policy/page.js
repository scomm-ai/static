import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-4 sm:pt-6">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FA] to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#023347]/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-2 sm:mb-3 leading-tight">
                Privacy Policy
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Last updated: March 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8 sm:space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Introduction
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  At scomm.ai, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our email encryption service and related applications (collectively, the "Service").
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  By using scomm.ai, you agree to the collection and use of information in accordance with this policy. We respect your privacy and are dedicated to maintaining the confidentiality of your personal information.
                </p>
              </div>

              {/* Zero-Knowledge Architecture */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Zero-Knowledge Architecture
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  scomm.ai operates on a zero-knowledge architecture, which means:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>We never have access to your encryption keys or passwords</li>
                  <li>We cannot read, decrypt, or access your email content</li>
                  <li>All encryption and decryption occurs on your device</li>
                  <li>We do not store unencrypted email content on our servers</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  This architecture ensures that even if our servers were compromised, your emails would remain secure and inaccessible to unauthorized parties.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Information We Collect
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Account Information
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  When you create an account, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Email address (for account creation and communication)</li>
                  <li>Username (if you choose to create one)</li>
                  <li>Password (encrypted and hashed, never stored in plain text)</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Usage Information
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We collect anonymized usage data to improve our service:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>App version and platform information</li>
                  <li>Feature usage statistics (anonymized)</li>
                  <li>Crash reports and error logs (no personal data included)</li>
                  <li>Performance metrics</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Email Content
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong className="font-semibold">We do not collect, store, or access your email content.</strong> All emails are encrypted on your device before transmission. We cannot read your emails, and we do not store unencrypted email content on our servers.
                </p>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  How We Use Your Information
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Provide, maintain, and improve our Service</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze usage patterns to improve functionality</li>
                  <li>Detect, prevent, and address technical issues</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We do not use your information for advertising purposes, and we do not sell your personal information to third parties.
                </p>
              </div>

              {/* Data Storage */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Data Storage and Location
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  You have complete control over where your encrypted data is stored:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li><strong className="font-semibold">Local Storage:</strong> Encrypted emails can be stored entirely on your device</li>
                  <li><strong className="font-semibold">Your Cloud Storage:</strong> You can choose to store encrypted backups in your own cloud storage (AWS S3, Google Cloud, etc.)</li>
                  <li><strong className="font-semibold">Our Servers:</strong> We only store minimal account information and encrypted metadata necessary for service operation</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We do not store unencrypted email content on our servers. All email content remains encrypted and under your control.
                </p>
              </div>

              {/* Data Sharing */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Data Sharing and Disclosure
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information. We may share information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li><strong className="font-semibold">Service Providers:</strong> We may share anonymized data with trusted service providers who assist in operating our service (hosting, analytics, payment processing)</li>
                  <li><strong className="font-semibold">Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                  <li><strong className="font-semibold">Business Transfers:</strong> In the event of a merger or acquisition, user information may be transferred as part of the transaction</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong className="font-semibold">We never share your email content or encryption keys with third parties.</strong>
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Your Privacy Rights
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li><strong className="font-semibold">Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong className="font-semibold">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong className="font-semibold">Deletion:</strong> Request deletion of your account and associated data</li>
                  <li><strong className="font-semibold">Export:</strong> Export your encrypted data and account information</li>
                  <li><strong className="font-semibold">Opt-out:</strong> Opt out of non-essential data collection and analytics</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  To exercise these rights, please contact us at privacy@scomm.ai.com. We will respond to your request within 30 days.
                </p>
              </div>

              {/* Security */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Security Measures
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>AES-256 encryption for all data in transit and at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Secure authentication and access controls</li>
                  <li>Regular software updates and security patches</li>
                  <li>Employee training on data protection and privacy</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Children's Privacy
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  scomm.ai is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Updating the "Last updated" date</li>
                  <li>Sending you an email notification (for significant changes)</li>
                  <li>Displaying a notice in the application</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  You are advised to review this Privacy Policy periodically for any changes. Changes are effective when posted on this page.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Contact Us
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-[#F5F9FA] rounded-xl p-6 sm:p-8 border border-gray-200">
                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    <strong className="font-semibold">Email:</strong> privacy@scomm.ai.com
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    <strong className="font-semibold">Support:</strong> support@scomm.ai.com
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong className="font-semibold">Address:</strong> scomm.ai Privacy Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

