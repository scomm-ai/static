import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
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
                Terms of Service
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Last updated: November 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8 sm:space-y-12">
              {/* Agreement */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Agreement to Terms
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  By accessing or using scomm.ai ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  These Terms constitute a legally binding agreement between you and scomm.ai. Please read these Terms carefully before using our Service.
                </p>
              </div>

              {/* Eligibility */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Eligibility and Account Registration
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  To use scomm.ai, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Be at least 13 years of age (or the age of majority in your jurisdiction)</li>
                  <li>Have the legal capacity to enter into binding agreements</li>
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and update your account information to keep it accurate</li>
                  <li>Maintain the security of your account credentials</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  You are responsible for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
                </p>
              </div>

              {/* Service Description */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Description of Service
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  scomm.ai is an email encryption service that provides:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>End-to-end encryption for email communications</li>
                  <li>Integration with existing email providers (Gmail, Outlook, Hotmail)</li>
                  <li>On-device email storage and management</li>
                  <li>AI-powered search functionality</li>
                  <li>Optional cloud storage integration</li>
                  <li>Cross-platform applications and web access</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.
                </p>
              </div>

              {/* Acceptable Use */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Acceptable Use Policy
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  You agree not to use scomm.ai to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Send spam, phishing emails, or malicious content</li>
                  <li>Transmit viruses, malware, or other harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
                  <li>Reverse engineer, decompile, or disassemble the Service</li>
                  <li>Use automated systems to access the Service without permission</li>
                  <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                  <li>Use the Service for any illegal or unauthorized purpose</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Violation of these terms may result in immediate termination of your account and legal action.
                </p>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Intellectual Property Rights
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  The Service and its original content, features, and functionality are owned by scomm.ai and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  You retain all rights to your email content and data. By using scomm.ai, you grant us a limited license to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Process and transmit your encrypted emails as necessary to provide the Service</li>
                  <li>Store encrypted metadata required for service operation</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  You may not copy, modify, distribute, sell, or lease any part of our Service without our prior written consent.
                </p>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Payment Terms
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Subscription Plans
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  scomm.ai offers both free and paid subscription plans. Paid subscriptions are billed in advance on a monthly or annual basis, as selected during purchase.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Billing and Renewal
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Subscriptions automatically renew unless cancelled before the renewal date. You will be charged the then-current subscription fee at the time of renewal. We will notify you of any price changes in advance.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Refunds
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Refund requests must be made within 30 days of purchase. Refunds are provided at our discretion and may be prorated based on usage. Refunds are not available for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Violations of these Terms</li>
                  <li>Fraudulent or illegal use of the Service</li>
                  <li>Accounts terminated for policy violations</li>
                </ul>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Termination
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  You may terminate your account at any time by contacting us or using the account deletion feature in settings. Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Your right to use the Service will immediately cease</li>
                  <li>We will delete your account information in accordance with our Privacy Policy</li>
                  <li>You remain responsible for any charges incurred prior to termination</li>
                  <li>Your encrypted data will be deleted unless you export it before termination</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We reserve the right to suspend or terminate your account immediately, without notice, if you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>Violate these Terms of Service</li>
                  <li>Engage in fraudulent or illegal activities</li>
                  <li>Fail to pay subscription fees when due</li>
                  <li>Use the Service in a manner that harms us or other users</li>
                </ul>
              </div>

              {/* Disclaimers */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Disclaimers and Limitations of Liability
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Service Availability
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Limitation of Liability
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law, scomm.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions or failures</li>
                  <li>Unauthorized access to your account</li>
                  <li>Errors or omissions in the Service</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Indemnification
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless scomm.ai and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service, violation of these Terms, or infringement of any rights of another party.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Governing Law and Dispute Resolution
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which scomm.ai operates, without regard to its conflict of law provisions.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Any disputes arising from these Terms or the Service shall be resolved through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Good faith negotiation between the parties</li>
                  <li>Mediation if negotiation fails</li>
                  <li>Binding arbitration if mediation is unsuccessful</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  You waive any right to participate in a class-action lawsuit or class-wide arbitration against scomm.ai.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Changes to Terms
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Posting the updated Terms on this page</li>
                  <li>Updating the "Last updated" date</li>
                  <li>Sending an email notification (for significant changes)</li>
                  <li>Displaying a notice in the application</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms. If you do not agree to the changes, you must stop using the Service.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Contact Information
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-[#F5F9FA] rounded-xl p-6 sm:p-8 border border-gray-200">
                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    <strong className="font-semibold">Email:</strong> legal@scomm.ai.com
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    <strong className="font-semibold">Support:</strong> support@scomm.ai.com
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong className="font-semibold">Address:</strong> scomm.ai Legal Department
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

