'use client';
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState('website');
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

        {/* Tab Switcher */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-0 justify-center">
              <button
                onClick={() => setActiveTab('website')}
                className={`relative px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 rounded-t-md ${
                  activeTab === 'website'
                    ? 'bg-[#EAF5F7] text-[#023347]'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }`}
              >
                Website Policy
                {activeTab === 'website' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2C8DA1] rounded-full" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('apps')}
                className={`relative px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 rounded-t-md ${
                  activeTab === 'apps'
                    ? 'bg-[#EAF5F7] text-[#023347]'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }`}
              >
                Applications &amp; Services Policy
                {activeTab === 'apps' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2C8DA1] rounded-full" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Website Policy Tab Content */}
        <section className={`relative pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white ${activeTab === 'website' ? 'block' : 'hidden'}`}>
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8 sm:space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Introduction
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  {`This Privacy Policy explains how scomm.ai ("Company," "we," "us," or "our") collects, uses, discloses, and protects personal information when you use the scomm.ai website (https://scomm.ai).`}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {`By using our website, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with this policy, please do not use our website.`}
                </p>
              </div>

              {/* Who we are */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Who Are We
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  scomm.ai is operated by:
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Legal Entity Name: Media Routes Inc.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Registered Address: 86-50 Burnhamthorpe Rd., W., Mississauga ON L5B 3C2
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Province/Territory: Ontario
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Country: Canada
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Contact Email: privacy@scomm.ai
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Website: https://scomm.ai
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  For data protection purposes, we act as a Data Controller for personal information collected through our website.
                </p>
              </div>

              {/* Zero-Knowledge Architecture */}
              {/* <div>
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
              </div> */}

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Information We Collect
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   Information You Provide Directly
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  When you interact with our website, we may collect:
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Account Information:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Account credentials (username and encrypted password)</li>
                  <li>Profile information</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Payment and Billing Information:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Billing name and address</li>
                  <li>Payment method details (processed by third-party payment processors)</li>
                  <li>Transaction history</li>
                  <li>Invoice information</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Affiliate Program Information:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Business name</li>
                  <li>Tax identification numbers (if applicable)</li>
                  <li>Payment details</li>
                  <li>Marketing website URLs</li>
                  <li>Promotional materials</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Communications:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Support inquiries and help requests</li>
                  <li>Feedback and survey responses</li>
                  <li>Email correspondence with our team</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Automatically Collected Information
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  When you use our website, we automatically collect:
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Technical Information:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device type and identifiers</li>
                  <li>Operating system</li>
                  <li>Screen resolution</li>
                  <li>Language preferences</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Usage Information:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Pages visited and features used</li>
                  <li>Time and date of visits</li>
                  <li>Referring website or source</li>
                  <li>Click-through and navigation paths</li>
                  <li>Search queries within our website</li>
                  <li>Error logs and diagnostic information</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Tracking Technologies:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Cookies and similar technologies</li>
                  <li>Pixel tags and web beacons</li>
                  <li>Session identifiers</li>
                  <li>Affiliate tracking parameters</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Application Version Information
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  When our desktop or mobile applications check for updates:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Version checking requests are sent to https://scomm-ai.github.io/version/index.json</li>
                  <li>This is an HTTPS GET request</li>
                  <li className="font-bold">No customer data, personal information, or identifiable information is transmitted in these requests</li>
                  <li>Only the application&apos;s current version number is compared against the latest available version</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   Information from Third Parties
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We may receive information about you from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>Payment processors (transaction confirmations)</li>
                  <li>Analytics providers (aggregated usage statistics)</li>
                  <li>Affiliate networks (if you join through a third-party platform)</li>
                  <li>Public databases (for fraud prevention)</li>
                  <li className="font-bold">Third-party identity providers (Google, Microsoft, etc.) when you use Single Sign-On (SSO) for authentication</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  How We Use Your Information
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Service Delivery and Management:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Provide, maintain, and improve our website services</li>
                  <li>Process transactions and send transaction notifications</li>
                  <li>Manage your account and preferences</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Authenticate users and maintain account security</li>
                  <li className="font-bold">Issue and manage authentication tokens (refresh tokens and access tokens) for secure access to paid features</li>
                  <li className="font-bold">Verify subscription status and deliver paid add-on features</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Payment Processing:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Process payments and subscription billing</li>
                  <li>Generate invoices and transaction records</li>
                  <li>Prevent payment fraud</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Affiliate Program Administration:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Track referrals and calculate commissions</li>
                  <li>Process affiliate payments</li>
                  <li>Provide performance reports and analytics</li>
                  <li>Communicate program updates and opportunities</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Communications:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Send service-related announcements and updates</li>
                  <li>Respond to support requests</li>
                  <li>Send marketing communications (with your consent where required)</li>
                  <li >Notify you of changes to our services or policies</li>
                  <li className="font-bold">Notify you of application version updates and security patches</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Analytics and Improvement:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Analyze usage patterns and trends (aggregated data only)</li>
                  <li>Conduct research and development</li>
                  <li>Test new features and improvements</li>
                  <li>Generate aggregated statistical information</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Legal Compliance:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>Comply with applicable laws and regulations</li>
                  <li>Respond to legal requests and prevent harm</li>
                  <li>Protect our rights and property</li>
                  <li>Enforce our agreements</li>
                </ul>
              </div>

              {/* Cryptographic Key Management */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Cryptographic Key Management
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   Public Key Storage
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  For email encryption functionality:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We store <span className="font-bold">public cryptographic keys</span> on our servers associated with each email address</li>
                  <li>Public keys are used to enable encrypted communication</li>
                  <li>Public keys do not allow us to decrypt or read your encrypted content</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   Private Key Storage - User Control
                </h3>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Default (Recommended):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Your <span className="font-bold"> private cryptographic keys remain exclusively on your client device</span> (desktop, iOS, or mobile)</li>
                  <li>We <span className="font-bold">never</span>  have access to unencrypted private keys</li>
                  <li>You are solely responsible for backing up and securing your private keys</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Optional Cloud Backup (User Choice):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>You may <span className="font-bold">optionally</span> upload a symmetrically encrypted copy of your private key to our servers</li>
                  <li>Encryption uses <span className="font-bold"> AES-256-GCM algorithm</span> (industry-standard encryption)</li>
                  <li> <span className="font-bold">You choose the encryption password </span> - we do not have access to this password</li>
                  <li> <span className="font-bold">We cannot decrypt your private key </span> without your password</li>
                  <li>This encrypted backup allows you to restore your private key on new devices using your password</li>
                  <li>You can delete this encrypted backup at any time</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Important Security Note:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>We employ a zero-knowledge architecture for private keys</li>
                  <li>Whether stored locally or as an encrypted backup, we cannot access your unencrypted private keys</li>
                  <li>If you lose your password for the encrypted backup, we cannot recover your private key</li>
                </ul>
              </div>

              {/* Authentication and Token Management */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Authentication And Token Management
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   Single Sign-On (SSO) Authentication
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  For commercial add-ons and paid features:
                </p>
                <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>
                    We support <span className="font-bold">Single Sign-On (SSO) ,</span>through external identity providers including:
                    <ul className="list-[circle] list-outside ml-5 sm:ml-6 mt-2 space-y-2">
                      <li>Google</li>
                      <li>Microsoft</li>
                      <li>Other third-party identity providers</li>
                    </ul>
                  </li>
                  <li>Upon successful SSO authentication, the identity provider confirms your identity</li>
                  <li>We receive minimal information from the identity provider (typically email address and authentication confirmation)</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Token-Based Access
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  After successful SSO authentication:
                </p>
                <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We issue our own <span className="font-bold">long-term refresh token </span> and <span className="font-bold"> access token </span></li>
                  <li>
                    These tokens are used to:
                    <ul className="list-[circle] list-outside ml-5 sm:ml-6 mt-2 space-y-2">
                      <li>Verify your subscription status</li>
                      <li>Access paid features</li>
                      <li>Retrieve billing information from our billing server (auth.scomm.ai)</li>
                    </ul>
                  </li>
                  <li><span className="font-bold">No other personally identifiable information (PII) is transmitted </span> beyond what is necessary for authentication</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   Token Refresh Process
                </h3>
                <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Access tokens are short-lived for security</li>
                  <li>
                    To obtain a new access token:
                    <ul className="list-[circle] list-outside ml-5 sm:ml-6 mt-2 space-y-2">
                      <li>Your application sends the refresh token to <span className="font-bold"> auth.scomm.ai </span></li>
                      <li>Our authentication server verifies the refresh token</li>
                      <li>A new access token is issued, signed by our well-known authentication public key</li>
                      <li><span className="font-bold">No additional personal information is transmitted</span> during token refresh</li>
                    </ul>
                  </li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   What We Do NOT Collect During Authentication
                </h3>
                <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 text-sm sm:text-base text-gray-700">
                  <li>We do <span className="font-bold">not</span> collect browsing history from identity providers</li>
                  <li>We do <span className="font-bold">not</span> access your email content through SSO providers</li>
                  <li>We do <span className="font-bold">not</span> collect contacts, files, or other personal data from your SSO account</li>
                  <li>We only receive authentication confirmation and the email address associated with your account</li>
                </ul>
              </div>

              {/* Client-Side Architecture */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Client-Side Architecture - Important Privacy Protection
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Client-Side Processing
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Our application operates with a <span className="font-bold">privacy-by-design, client-side architecture:</span>
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Desktop Applications:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>All core application processing occurs on your desktop device</li>
                  <li>Data processing happens locally without transmission to our servers</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">iOS and Mobile Applications:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>All core application processing occurs on your mobile device</li>
                  <li>Data processing happens locally without transmission to our servers</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Web Application (Desktop Platforms):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>User login and authentication occur through the web application</li>
                  <li>After authentication, most processing occurs client-side in your browser</li>
                  <li>Minimal data is transmitted to our servers (only authentication tokens and subscription verification)</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   What Stays on Your Device
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  The following never leave your device:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Email content</li>
                  <li>Email metadata and headers</li>
                  <li>Private cryptographic keys (unless you choose encrypted backup)</li>
                  <li>Local application data and cache</li>
                  <li>User preferences and settings</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   What We Store on Our Servers
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We only store:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>Account information (name, email, encrypted password)</li>
                  <li>Public cryptographic keys (for encryption purposes)</li>
                  <li>Optionally: Symmetrically encrypted private keys (if you choose cloud backup with your own password)</li>
                  <li>Authentication tokens (refresh and access tokens)</li>
                  <li>Billing and subscription information</li>
                  <li>Application version information (for update notifications)</li>
                </ul>
              </div>

              {/* Legal Basis for Processing */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Legal Basis For Processing (PIPEDA & GDPR COMPLIANCE)
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We process personal information on the following legal bases:
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Consent:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Where you have given clear consent for specific processing activities</li>
                  <li>Marketing communications (you may withdraw consent at any time)</li>
                  <li>Optional cookies and tracking (beyond essential cookies)</li>
                  <li className="font-bold">Optional encrypted private key cloud backup (you choose to enable this feature)</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Contractual Necessity:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>To perform our contract with you (provide services you requested)</li>
                  <li>To process payments and deliver purchased products</li>
                  <li>To manage your account and fulfill our obligations</li>
                  <li className="font-bold">To authenticate users and provide secure access to paid features</li>
                  <li className="font-bold">To issue and manage authentication tokens</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Legitimate Interests:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Service improvement and development</li>
                  <li>Fraud prevention in payment processing</li>
                  <li>Network and information security</li>
                  <li>Direct marketing to existing customers (where permitted)</li>
                  <li className="font-bold">Providing version update notifications for security and functionality</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Legal Obligation:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>Compliance with tax and accounting requirements</li>
                  <li>Response to legal processes and government requests</li>
                  <li>Prevention of fraud and criminal activity</li>
                </ul>
              </div>

              {/* Cookies & Tracking Technologies */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Cookies And Tracking Technologies
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   Types of Cookies We Use
                </h3>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Essential Cookies:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Required for basic website functionality</li>
                  <li>Session management and authentication</li>
                  <li>Security features</li>
                  <li className="font-bold">Authentication token management</li>
                  <li>Cannot be disabled</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Performance Cookies:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Analytics and usage statistics</li>
                  <li>Error tracking and diagnostics</li>
                  <li>A/B testing and optimization</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Functional Cookies:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Remember your preferences</li>
                  <li>Personalization features</li>
                  <li>Language and regional settings</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Marketing/Advertising Cookies:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Affiliate tracking and attribution</li>
                  <li>Interest-based advertising</li>
                  <li>Campaign performance measurement</li>
                  <li>Retargeting and remarketing</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   Cookie Management
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  You can control cookies through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Browser settings (block all cookies or specific types)</li>
                  <li>Our cookie consent banner (on first visit)</li>
                  <li>Third-party opt-out tools</li>
                  <li>Do Not Track signals (where supported)</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  Note: Disabling essential cookies may impair website functionality and prevent authentication.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   Third-Party Cookies
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We use cookies from third-party services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Google Analytics (usage statistics)</li>
                  <li>Payment processors (transaction security)</li>
                  <li>Advertising networks (campaign tracking)</li>
                  <li>Social media platforms (sharing features)</li>
                  <li className="font-bold">Third-party identity providers (for SSO authentication)</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  These third parties operate under their own privacy policies.
                </p>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Data Retention
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Retention Periods
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We retain personal information for as long as necessary to fulfill the purposes described in this Privacy Policy:
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Account Information:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Active accounts: Duration of account relationship</li>
                  <li>Inactive accounts: 2 years after last login</li>
                  <li>Deleted accounts: 30 days for recovery, then permanently deleted</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Cryptographic Keys:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Public keys: Duration of account relationship</li>
                  <li>Encrypted private key backups: Until you delete them or close your account</li>
                  <li>Permanently deleted within 30 days of account deletion</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Authentication Tokens:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Refresh tokens: Until revoked or account deleted</li>
                  <li>Access tokens: Short-lived (typically hours), then automatically expired</li>
                  <li>Token logs: 90 days for security monitoring</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Payment Information:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Transaction records: 7 years (tax and accounting requirements)</li>
                  <li>Payment method details: Until subscription ends or updated</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Communications:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Support tickets: 3 years</li>
                  <li>Marketing preferences: Until you unsubscribe</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Website Usage Data:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Analytics data: 26 months (aggregated)</li>
                  <li>Server logs: 90 days</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Affiliate Data:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Active affiliates: Duration of program participation</li>
                  <li>Inactive affiliates: 3 years after last commission payment</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Version Check Logs:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>No personal data stored from version check requests</li>
                  <li>Anonymous version check statistics: 12 months (aggregated)</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Deletion and Anonymization
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  After retention periods expire:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Personal information is permanently deleted or anonymized</li>
                  <li>Anonymized data may be retained indefinitely for statistical purposes</li>
                  <li>Backup copies are deleted within 90 days of primary deletion</li>
                  <li className="font-bold">Cryptographic keys (public and encrypted private) are permanently deleted</li>
                  <li className="font-bold">Authentication tokens are immediately revoked and deleted</li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Data Security
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Security Measures
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We implement industry-standard security measures:
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Technical Safeguards:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Encryption in transit (TLS/SSL for all communications)</li>
                  <li>Encryption at rest for sensitive data</li>
                  <li>Secure password hashing (bcrypt or equivalent)</li>
                  <li className="font-bold">AES-256-GCM encryption for optional private key backups</li>
                  <li className="font-bold">Cryptographic signing of authentication tokens</li>
                  <li className="font-bold">Public key cryptography for secure communications</li>
                  <li>Regular security updates and patches</li>
                  <li>Firewall protection and intrusion detection</li>
                  <li>Access controls and authentication</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Organizational Safeguards:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Employee confidentiality agreements</li>
                  <li>Access limited to authorized personnel</li>
                  <li>Regular security training</li>
                  <li>Incident response procedures</li>
                  <li>Third-party security audits</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Payment Security:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>PCI DSS compliance for payment processing</li>
                  <li>Tokenization of payment data</li>
                  <li>No storage of full credit card numbers</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Authentication Security:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li> <span className="font-bold"> Short-lived access tokens </span> to limit exposure</li>
                  <li> <span className="font-bold">Secure token refresh mechanism</span> via auth.scomm.ai</li>
                  <li> <span className="font-bold">Well-known public key infrastructure</span> for token verification</li>
                  <li>Protection against token theft and replay attacks</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Client-Side Security:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li> <span className="font-bold">Zero-knowledge architecture</span> - we cannot access your unencrypted private keys</li>
                  <li> <span className="font-bold">Client-side encryption</span> before any data leaves your device</li>
                  <li><span className="font-bold">Local storage</span> of sensitive data on your device only</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Data Breach Notification
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  In the event of a data breach:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We will notify affected users within 72 hours</li>
                  <li>Notification includes nature of breach and steps taken</li>
                  <li>We will notify relevant authorities as required by law</li>
                  <li>We will provide guidance on protective measures</li>
                  <li className="font-bold">For cryptographic key compromises, we will provide immediate guidance on key rotation</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Limitations
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  While we employ robust security measures:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>No system is 100% secure</li>
                  <li>Internet transmission carries inherent risks</li>
                  <li>You are responsible for protecting your account credentials</li>
                  <li className="font-bold">You are responsible for protecting your private key encryption password (if using cloud backup)</li>
                  <li className="font-bold">Loss of your private key encryption password means permanent loss of access to encrypted data</li>
                  <li>Report suspicious activity immediately</li>
                </ul>
              </div>

              {/* Data Sharing and Disclosure */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Data Sharing And Disclosure
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Service Providers
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We share information with trusted third-party service providers:
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Payment Processors:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Stripe, PayPal, or other payment gateways</li>
                  <li>Purpose: Process transactions</li>
                  <li>Data shared: Billing information, transaction details</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Analytics Providers:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Google Analytics, Mixpanel, or similar</li>
                  <li>Purpose: Usage analysis and website optimization</li>
                  <li>Data shared: Anonymized usage data, IP addresses</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Infrastructure Providers:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Cloud hosting and storage services</li>
                  <li>Purpose: Host website and databases</li>
                  <li>Data shared: Account data, public keys, encrypted private key backups (encrypted with your password)</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Communication Services:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Email service providers</li>
                  <li>Purpose: Send transactional and marketing emails</li>
                  <li>Data shared: Email addresses, names, communication preferences</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Affiliate Networks:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Third-party affiliate platforms</li>
                  <li>Purpose: Manage affiliate program</li>
                  <li>Data shared: Referral data, commission information</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Third-Party Identity Providers:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Google, Microsoft, and other SSO providers</li>
                  <li>Purpose: User authentication via SSO</li>
                  <li>Data shared: Authentication requests, email address for account matching</li>
                </ul>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  All service providers are contractually bound to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Use data only for specified purposes</li>
                  <li>Maintain confidentiality and security</li>
                  <li>Comply with applicable privacy laws</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  What We NEVER Share
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li> <span className="font-bold"> Private cryptographic keys </span> (we don't have access to them)</li>
                  <li> <span className="font-bold">Private key encryption passwords </span> (you choose these, we never see them)</li>
                  <li className="font-bold">Decrypted authentication tokens from third-party providers</li>
                  <li>Email content or communications</li>
                  <li>Browsing history outside our website</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Business Transfers
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  In the event of:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Merger or acquisition</li>
                  <li>Asset sale or reorganization</li>
                  <li>Bankruptcy or insolvency</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Your personal information may be transferred to the acquiring entity. You will be notified of any such transfer, and the new entity will be bound by this Privacy Policy.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  <span className="font-semibold">Note:</span> Encrypted private key backups would transfer encrypted (the acquiring entity still cannot decrypt without your password).
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Legal Requirements
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We may disclose information when required to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Comply with court orders or legal processes</li>
                  <li>Respond to government requests</li>
                  <li>Protect our rights and property</li>
                  <li>Prevent fraud or criminal activity</li>
                  <li>Protect safety of users or the public</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We will notify you of legal requests unless prohibited by law.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  <span className="font-semibold">Note:</span> We cannot disclose private keys or decrypt private key backups as we do not have access to the decryption passwords.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Aggregate and Anonymous Data
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We may share aggregated or anonymized data that cannot identify you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Industry reports and statistics</li>
                  <li>Research and publications</li>
                  <li>Public presentations</li>
                  <li className="font-bold">Aggregate version adoption statistics (no user identification)</li>
                </ul>
              </div>

              {/* International Data Transfers */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  International Data Transfers
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Transfer Mechanisms
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Your information may be transferred to and processed in countries other than your country of residence:
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Primary Data Storage: Canada</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Potential Transfer Locations:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>United States (cloud services)</li>
                  <li>European Union (support services)</li>
                  <li>Other countries where our service providers operate</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Safeguards
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  For transfers outside Canada/EU/UK:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Standard Contractual Clauses (EU Commission approved)</li>
                  <li>Privacy Shield certification (where applicable)</li>
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>Contractual commitments from recipients</li>
                  <li className="font-bold">End-to-end encryption for sensitive data (private key backups remain encrypted during transfer)</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Your Rights
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Object to international transfers</li>
                  <li>Request information about safeguards</li>
                  <li>Obtain copies of transfer agreements</li>
                </ul>
              </div>

              {/* Your Privacy Rights */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  YOUR PRIVACY RIGHTS
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Rights Under PIPEDA (Canada)
                </h3>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Access:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Request copies of your personal information</li>
                  <li>Receive information about how it's used</li>
                  <li className="font-bold">Request information about stored public keys and encrypted private key backups</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Correction:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Update inaccurate or incomplete information</li>
                  <li>Request corrections to your records</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Withdrawal of Consent:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Withdraw consent for processing at any time</li>
                  <li>May limit service availability</li>
                  <li className="font-bold">Delete encrypted private key backups</li>
                  <li className="font-bold">Revoke authentication tokens</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Complaint:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Lodge complaints with Privacy Commissioner of Canada</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Rights Under GDPR (EU/UK)
                </h3>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Access (Article 15):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Obtain confirmation of processing</li>
                  <li>Receive copy of your data</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Rectification (Article 16):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Correct inaccurate data</li>
                  <li>Complete incomplete data</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Erasure (Article 17) - "Right to be Forgotten":</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Request deletion of your data</li>
                  <li>Subject to legal retention requirements</li>
                  <li className="font-bold">Includes deletion of public keys, encrypted private key backups, and authentication tokens</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Restriction of Processing (Article 18):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Limit how we use your data</li>
                  <li>Applicable in specific circumstances</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Data Portability (Article 20):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Receive data in machine-readable format</li>
                  <li>Transfer data to another provider</li>
                  <li className="font-bold">Export your public keys and encrypted private key backups</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Objection (Article 21):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Object to processing based on legitimate interests</li>
                  <li>Object to direct marketing at any time</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Automated Decision-Making (Article 22):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Right not to be subject to automated decisions</li>
                  <li>We do not use automated decision-making</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Rights Under CCPA (California)
                </h3>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Right to Know:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Categories of personal information collected</li>
                  <li>Sources and purposes of collection</li>
                  <li>Third parties with whom information is shared</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Right to Delete:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Request deletion of personal information</li>
                  <li>Subject to exceptions</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Right to Opt-Out:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Opt out of sale of personal information (we do not sell data)</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Right to Non-Discrimination:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Not be discriminated against for exercising rights</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  How to Exercise Your Rights
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  To exercise any of these rights:
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2"> <span className="font-bold"> Email:</span> privacy@scomm.ai</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2"> <span className="font-bold"> Subject Line:</span> Privacy Rights Request - [Type of Request]</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-semibold mb-4">
                  Include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Your full name</li>
                  <li>Email address associated with account</li>
                  <li>Specific right you wish to exercise</li>
                  <li>Verification information (for security)</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Response Time:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Acknowledgment within 5 business days</li>
                  <li>Complete response within 30 days (GDPR/PIPEDA)</li>
                  <li>45 days for CCPA requests</li>
                  <li>Extensions communicated if needed</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold">Verification:</span> We may request additional information to verify your identity before fulfilling requests.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold">No Fee:</span> Requests are processed free of charge (unless manifestly unfounded or excessive).
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Special Note on Cryptographic Data:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>We can provide your public keys and encrypted private key backups</li>
                  <li>We <span className="font-bold"> cannot </span> decrypt your private key backups (you control the encryption password)</li>
                  <li>We can delete all cryptographic data upon request</li>
                </ul>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Children's Privacy
                </h2>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Age Restriction:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Our website is not intended for children under 13 (16 in EU)</li>
                  <li>We do not knowingly collect information from children</li>
                </ul>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-gray-900">Parental Notification:</span> If we discover we have collected information from a child:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We will delete it immediately</li>
                  <li>We will notify parents/guardians if possible</li>
                </ul>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-gray-900">Parental Rights:</span> Parents may:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Request access to their child's information</li>
                  <li>Request deletion of information</li>
                  <li>Refuse further collection</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Contact us immediately if:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>You believe a child has provided information</li>
                  <li>You are a parent seeking to exercise rights</li>
                </ul>
              </div>

              {/* Do Not Track Signals */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Do Not Track Signals
                </h2>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Browser DNT Settings:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Some browsers offer &quot;Do Not Track&quot; (DNT) signals</li>
                  <li>There is no industry standard for responding to DNT</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Our Response:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We currently do not respond to DNT signals</li>
                  <li>You can control tracking through cookie settings</li>
                  <li>Third-party tracking may continue unless blocked</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Alternative Controls:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Browser privacy settings</li>
                  <li>Cookie management tools</li>
                  <li>Ad blocker extensions</li>
                  <li>Privacy-focused browsers</li>
                </ul>
              </div>

              {/* California Privacy Disclosures */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  California Privacy Disclosures
                </h2>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold text-gray-900">California Shine the Light Law:</span> California residents may request information about sharing personal information with third parties for direct marketing purposes.
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Our Disclosure:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We do not share personal information with third parties for their direct marketing</li>
                  <li>You may still request this information annually</li>
                </ul>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold text-gray-900">CCPA Rights:</span> See Section 13.3 for California-specific rights.
                </p>
              </div>

              {/* Third-Party Links and Services */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Third-Party Links And Services
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  External Links
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Our website may contain links to third-party websites, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Partner services</li>
                  <li>Social media platforms</li>
                  <li>External resources and tools</li>
                  <li>Affiliate websites</li>
                  <li className="font-bold">Third-party identity providers (for SSO authentication)</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">We are not responsible for:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Privacy practices of third-party sites</li>
                  <li>Content on external websites</li>
                  <li>Security of third-party services</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Third-Party Integrations
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  We may integrate with third-party services (e.g., payment processors, analytics, identity providers). These services operate under their own privacy policies. We recommend reviewing their policies before providing information.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Third-Party Identity Providers
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  When using SSO authentication:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>You are redirected to the identity provider&apos;s authentication page</li>
                  <li>The identity provider&apos;s privacy policy governs their data collection</li>
                  <li>We only receive authentication confirmation and email address</li>
                  <li>Review the privacy policies of Google, Microsoft, or other providers you use for SSO</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Social Media Features
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Social media features (share buttons, embedded content) may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>IP address</li>
                  <li>Page you&apos;re visiting</li>
                  <li>Cookies to enable functionality</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  These features are governed by the privacy policies of the social media companies.
                </p>
              </div>

              {/* Marketing Communications */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Marketing Communications
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Types of Communications
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We may send:
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Transactional Emails (cannot opt out):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Purchase confirmations</li>
                  <li>Account notifications</li>
                  <li>Security alerts</li>
                  <li>Service updates</li>
                  <li className="font-bold">Application version update notifications</li>
                  <li className="font-bold">Authentication and token-related alerts</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Marketing Emails (can opt out):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Product announcements</li>
                  <li>Promotional offers</li>
                  <li>Newsletters</li>
                  <li>Affiliate program updates</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Consent and Opt-Out
                </h3>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">CASL Compliance (Canada):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We obtain express or implied consent before sending commercial electronic messages</li>
                  <li>Every marketing email includes an unsubscribe link</li>
                  <li>We honor opt-out requests within 10 business days</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">You can opt out by:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Clicking &quot;unsubscribe&quot; in any marketing email</li>
                  <li>Emailing privacy@scomm.ai with &quot;Unsubscribe&quot; in the subject</li>
                  <li>Updating preferences in your account settings</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Opting out of marketing does not affect transactional or service-related communications.
                </p>
              </div>

              {/* Changes to this Privacy Policy */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Changes To This Privacy Policy
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Updates and Modifications
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We reserve the right to update this Privacy Policy at any time to reflect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Changes in our practices</li>
                  <li>Legal or regulatory requirements</li>
                  <li>New features or services</li>
                  <li>Feedback and improvements</li>
                  <li className="font-bold">Updates to authentication mechanisms or cryptographic protocols</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Notice of Changes
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  When we make changes:
                </p>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Material Changes:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We will provide prominent notice (email notification, website banner)</li>
                  <li>Effective 30 days after notice</li>
                  <li>You may review changes before they take effect</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Non-Material Changes:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Updated &quot;Last Updated&quot; date</li>
                  <li>Effective immediately upon posting</li>
                  <li>Continued use constitutes acceptance</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Review and Acceptance
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We encourage you to review this Privacy Policy periodically.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Continued use of our website after changes become effective constitutes acceptance of the updated policy.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  If you do not agree with changes, you should discontinue use and may request deletion of your account.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Contact Information
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Privacy Inquiries
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  For privacy-related questions, concerns, or requests:
                </p>
                <div className="bg-[#F5F9FA] rounded-xl p-6 sm:p-8 border border-gray-200 mb-6">
                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    <strong className="font-semibold">Email:</strong> privacy@scomm.ai
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    <strong className="font-semibold">Subject Line:</strong> Privacy Inquiry
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong className="font-semibold">Mailing Address:</strong><br />
                    scomm.ai<br />
                    Media Routes Inc.<br />
                    86-50 Burnhamthorpe Rd W,<br />
                    Mississauga, ON L5B 3C2<br />
                    Canada
                  </p>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Data Protection Officer
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  If required by applicable law, you may contact our Data Protection Officer at: <strong className="font-semibold">dpo@scomm.ai</strong>
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Regulatory Authorities
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  You have the right to lodge a complaint with relevant supervisory authorities:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li><strong className="font-semibold">Canada:</strong> Office of the Privacy Commissioner of Canada (Website: www.priv.gc.ca)</li>
                  <li><strong className="font-semibold">EU/UK:</strong> Your local data protection authority (EU list: <a href="https://edpb.europa.eu/about-edpb/board/members_en" className="text-[#2C8DA1] hover:underline break-words" target="_blank" rel="noopener noreferrer">https://edpb.europa.eu/about-edpb/board/members_en</a>)</li>
                  <li><strong className="font-semibold">California:</strong> California Attorney General (Website: oag.ca.gov)</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Response Time
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We strive to respond to all inquiries within:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-8 sm:mb-12">
                  <li>5 business days for acknowledgment</li>
                  <li>30 days for complete response</li>
                  <li>60 days for complex requests (with notification of extension)</li>
                </ul>

                <hr className="border-gray-200 mb-8 sm:mb-12" />

                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Accessibility
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We are committed to ensuring this Privacy Policy is accessible to everyone.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  If you have difficulty accessing this policy or require it in an alternative format:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Contact <strong className="font-semibold">privacy@scomm.ai</strong></li>
                  <li>Request formats: large print, audio, plain language summary</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We will provide reasonable accommodations within 10 business days.
                </p>
              </div>

              {/* Language and Conclusion */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Language
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  This Privacy Policy is provided in English.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8 sm:mb-12">
                  If translated versions are made available, the English version prevails in case of conflicts or discrepancies.
                </p>

                <hr className="border-gray-200 mb-8 sm:mb-12" />

                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  SUMMARY OF OUR PRIVACY COMMITMENTS
                </h2>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Client-Side Architecture:</p>
                <ul className="list-none space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>✓ Core processing happens on your device (desktop, iOS, mobile)</li>
                  <li>✓ Private keys stay on your device (unless you choose encrypted cloud backup)</li>
                  <li>✓ You control your encryption password - we cannot decrypt your private key backups</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">What We Collect:</p>
                <ul className="list-none space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>✓ Account information (name, email, encrypted password)</li>
                  <li>✓ Billing information (for purchases)</li>
                  <li>✓ Website usage data (pages visited on scomm.ai)</li>
                  <li>✓ Technical information (IP address, browser type)</li>
                  <li>✓ Public cryptographic keys (for email encryption)</li>
                  <li>✓ Optionally: Encrypted private key backups (encrypted with YOUR password using AES-256-GCM)</li>
                  <li>✓ Authentication tokens (for secure access to paid features)</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">What We Never Collect:</p>
                <ul className="list-none space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>✗ Unencrypted private cryptographic keys</li>
                  <li>✗ Your private key encryption passwords</li>
                  <li>✗ Email content or communications</li>
                  <li>✗ Personal data during version update checks</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Your Rights:</p>
                <ul className="list-none space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>✓ Access your data (including cryptographic keys)</li>
                  <li>✓ Correct inaccurate information</li>
                  <li>✓ Delete your account and data (including all keys and tokens)</li>
                  <li>✓ Export your data</li>
                  <li>✓ Opt out of marketing</li>
                  <li>✓ File complaints with regulators</li>
                </ul>

                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Security Measures:</p>
                <ul className="list-none space-y-2 text-sm sm:text-base text-gray-700 mb-8 sm:mb-12">
                  <li>✓ Zero-knowledge architecture for private keys</li>
                  <li>✓ AES-256-GCM encryption for optional key backups</li>
                  <li>✓ Short-lived access tokens for enhanced security</li>
                  <li>✓ Cryptographically signed authentication tokens</li>
                  <li>✓ TLS/SSL encryption for all communications</li>
                </ul>

                <hr className="border-gray-200 mb-8 sm:mb-12" />

                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  ACKNOWLEDGMENT
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  By using the scomm.ai website, you acknowledge that you have read, understood, and agree to this Privacy Policy.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  If you do not agree with this policy, please do not use our website.
                </p>
                
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-gray-900">Last Updated:</span> March 2026
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8 sm:mb-12">
                  <span className="font-semibold text-gray-900">Version:</span> 2.0
                </p>

                <hr className="border-gray-200 mb-8 sm:mb-12" />
                
                <p className="text-sm sm:text-base text-center font-semibold text-gray-900">
                  END OF PRIVACY POLICY
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Applications Policy Tab Content */}
        <section className={`relative pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white ${activeTab === 'apps' ? 'block' : 'hidden'}`}>
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8 sm:space-y-12">

              {/* Introduction */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Introduction</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  {`This Privacy Policy explains how scomm.ai ("Company," "we," "us," or "our") collects, uses, discloses, and protects personal information when you use:`}
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Desktop applications and software programs</li>
                  <li>Mobile applications (iOS and Android)</li>
                  <li>Add-ons and paid features</li>
                  <li>Related services and applications</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {`By using our services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with this policy, please do not use our services.`}
                </p>
              </div>

              {/* Who We Are */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Who Are We</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">scomm.ai is operated by:</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">Legal Entity Name: Media Routes Inc.</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">Registered Address: 86-50 Burnhamthorpe Rd., W., Mississauga ON L5B 3C2</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">Province/Territory: Ontario</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">Country: Canada</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">Contact Email: privacy@scomm.ai</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">Website: https://scomm.ai</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  For data protection purposes, we act as a Data Controller for personal information collected through our applications and related services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Information We Collect</h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Information You Provide Directly</h3>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Account Information:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Account credentials (username and encrypted password)</li>
                  <li>Profile information</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Payment and Billing Information:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Billing name and address</li>
                  <li>Payment method details (processed by third-party payment processors)</li>
                  <li>Transaction history and invoice information</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Communications:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Support inquiries and help requests</li>
                  <li>Feedback and survey responses</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Automatically Collected Information</h3>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Technical Information:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>IP address</li>
                  <li>Device type and identifiers</li>
                  <li>Operating system (Windows, macOS, Linux, iOS, Android)</li>
                  <li>Application version</li>
                  <li>Language preferences</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Usage Information:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Features used within the application</li>
                  <li>Time and date of usage</li>
                  <li>Error logs and diagnostic information</li>
                  <li>Interactions with our services</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Application Version Information</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">When our desktop or mobile applications check for updates:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Version checking requests are sent to https://scomm-ai.github.io/version/index.json</li>
                  <li>This is an HTTPS GET request</li>
                  <li className="font-bold">No customer data, personal information, or identifiable information is transmitted in these requests</li>
                  <li>Only the application&apos;s current version number is compared against the latest available version</li>
                  <li>No logs of individual user update checks are maintained</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Extension &amp; Security Processing — IMPORTANT PRIVACY PROTECTIONS</h3>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">What We DO NOT Collect Or Access:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We DO NOT have access to your emails or their content</li>
                  <li>We DO NOT read, store, or process email headers, metadata, subject lines, or sender information</li>
                  <li>We DO NOT access your email accounts on Gmail, Microsoft, or any other email service</li>
                  <li>We DO NOT store emails on our servers</li>
                  <li>We DO NOT transmit email data to our servers</li>
                  <li>We DO NOT track your email communications</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-6">
                  Your emails remain stored exclusively on your email service provider (Gmail, Microsoft, etc.) and are never transmitted to or stored on scomm.ai servers.
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">How Our Applications Work:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li><span className="font-semibold">Client-Side Processing Only:</span> All spam filtering, phishing detection, and AI-powered search operate entirely on your own device. No email content, metadata, or identifiable information is sent to our servers.</li>
                  <li><span className="font-semibold">Platform-Specific Processing:</span> Desktop and Mobile Applications process core operations on your device.</li>
                  <li><span className="font-semibold">Anonymous Threat Detection:</span> Our security features may use anonymous, aggregated threat intelligence data that cannot be traced back to individual users. Pattern matching occurs on your device.</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">What We Actually Store on Our Servers:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Public cryptographic keys (for encryption of emails on your device)</li>
                  <li>Billing and payment information</li>
                  <li>Account signup details (name, email, encrypted password)</li>
                  <li>Service preferences and settings</li>
                  <li>Authentication tokens (for secure access to paid features)</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed mb-6">
                  Note: Private keys are the user&apos;s responsibility and are not stored on our servers. We employ a privacy-by-design approach where your email data never leaves your device.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Information from Third Parties</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>Payment processors (transaction confirmations)</li>
                  <li>Analytics providers (aggregated usage statistics)</li>
                  <li className="font-bold">Third-party identity providers (Google, Microsoft, etc.) when you use Single Sign-On (SSO) for authentication</li>
                </ul>
              </div>

              {/* Cryptographic Key Management */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Cryptographic Key Management</h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Public Key Storage</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We store <span className="font-bold">public cryptographic keys</span> on our servers associated with each email address</li>
                  <li>Public keys are used to enable encrypted communication</li>
                  <li>Public keys do not allow us to decrypt or read your encrypted content</li>
                </ul>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Private Key Storage — User Control</h3>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Default (Recommended):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Your <span className="font-bold">private cryptographic keys remain exclusively on your client device</span> (desktop, iOS, or mobile)</li>
                  <li>We <span className="font-bold">never</span> have access to unencrypted private keys</li>
                  <li>You are solely responsible for backing up and securing your private keys</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Optional Cloud Backup (User Choice):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>You may <span className="font-bold">optionally</span> upload a symmetrically encrypted copy of your private key to our servers</li>
                  <li>Encryption uses <span className="font-bold">AES-256-GCM algorithm</span> (industry-standard encryption)</li>
                  <li><span className="font-bold">You choose the encryption password</span> — we do not have access to this password</li>
                  <li><span className="font-bold">We cannot decrypt your private key</span> without your password</li>
                  <li>You can delete this encrypted backup at any time</li>
                </ul>
              </div>

              {/* Authentication and Token Management */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Authentication And Token Management</h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Single Sign-On (SSO) Authentication</h3>
                <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We support <span className="font-bold">Single Sign-On (SSO)</span> through Google, Microsoft, and other third-party identity providers</li>
                  <li>Upon successful SSO authentication, the identity provider confirms your identity</li>
                  <li>We receive minimal information from the identity provider (typically email address and authentication confirmation)</li>
                </ul>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Token-Based Access</h3>
                <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We issue our own <span className="font-bold">long-term refresh token</span> and <span className="font-bold">access token</span></li>
                  <li>These tokens verify your subscription status and provide access to paid features</li>
                  <li><span className="font-bold">No additional personal information (PII) is transmitted</span> beyond what is necessary for authentication</li>
                </ul>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">What We Do NOT Collect During Authentication</h3>
                <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 text-sm sm:text-base text-gray-700">
                  <li>We do <span className="font-bold">not</span> collect browsing history from identity providers</li>
                  <li>We do <span className="font-bold">not</span> access your email content through SSO providers</li>
                  <li>We do <span className="font-bold">not</span> collect contacts, files, or other personal data from your SSO account</li>
                  <li>We only receive authentication confirmation and the email address associated with your account</li>
                </ul>
              </div>

              {/* Client-Side Architecture */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Client-Side Architecture — Important Privacy Protection</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">Our applications operate with a <span className="font-bold">privacy-by-design, client-side architecture:</span></p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Desktop Applications:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>All core application processing occurs on your desktop device</li>
                  <li>Private keys stored using your OS secure store (Windows Credential Locker, macOS Keychain)</li>
                  <li>Updates downloaded securely via HTTPS</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">iOS and Mobile Applications:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>All core application processing occurs on your mobile device</li>
                  <li>Data stored in sandboxed application containers</li>
                  <li>Diagnostic crash reporting may be handled by platform tools (e.g., Apple CrashReporter) unless you opt out in device settings</li>
                </ul>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">What Stays on Your Device</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Email content</li>
                  <li>Email metadata and headers</li>
                  <li>Private cryptographic keys (unless you choose encrypted backup)</li>
                  <li>Local application data, cache, and user preferences</li>
                </ul>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">What We Store on Our Servers</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>Account information (name, email, encrypted password)</li>
                  <li>Public cryptographic keys</li>
                  <li>Optionally: Symmetrically encrypted private keys (encrypted with your own password)</li>
                  <li>Authentication tokens (refresh and access tokens)</li>
                  <li>Billing and subscription information</li>
                  <li>Application version information (for update notifications)</li>
                </ul>
              </div>

              {/* Email Service Providers */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Email Service Providers (Gmail, Microsoft, etc.)</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">Our applications integrate with third-party email services using OAuth or modern authentication:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>We do not store your email provider passwords</li>
                  <li>You manage access through your email provider&apos;s security settings</li>
                  <li>You can revoke our application&apos;s access at any time through your Google Workspace, Microsoft 365, or other provider&apos;s account settings</li>
                  <li>Our use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">How We Use Your Information</h2>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Service Delivery:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Provide, maintain, and improve our desktop and mobile applications</li>
                  <li>Process transactions and deliver purchased add-ons and premium features</li>
                  <li>Manage your account and preferences</li>
                  <li>Authenticate users and manage access tokens</li>
                  <li>Verify subscription status and deliver paid add-on features</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Communications:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Respond to support requests</li>
                  <li>Send marketing communications (with your consent where required)</li>
                  <li className="font-bold">Notify you of application version updates and security patches</li>
                  <li className="font-bold">Send authentication and token-related alerts</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Security (Client-Side Only):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Enable local spam and phishing detection on your device</li>
                  <li>Provide AI-powered search capabilities on your device</li>
                  <li>All security processing occurs on your device without data transmission to our servers</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Legal Compliance:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>Comply with applicable laws and regulations</li>
                  <li>Respond to legal requests and prevent harm</li>
                  <li>Protect our rights and property</li>
                </ul>
              </div>

              {/* Legal Basis */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Legal Basis For Processing (PIPEDA &amp; GDPR)</h2>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Consent:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Marketing communications (you may withdraw consent at any time)</li>
                  <li className="font-bold">Optional encrypted private key cloud backup (you choose to enable this feature)</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Contractual Necessity:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>To perform our contract with you (provide services you requested)</li>
                  <li>To process payments and deliver purchased products</li>
                  <li className="font-bold">To authenticate users and provide secure access to paid features</li>
                  <li className="font-bold">To issue and manage authentication tokens</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Legitimate Interests:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Service improvement and development</li>
                  <li>Fraud prevention in payment processing</li>
                  <li className="font-bold">Providing version update notifications for security and functionality</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Legal Obligation:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>Compliance with tax and accounting requirements</li>
                  <li>Response to legal processes and government requests</li>
                </ul>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Data Retention</h2>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Account Information:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Active accounts: Duration of account relationship</li>
                  <li>Inactive accounts: 2 years after last login</li>
                  <li>Deleted accounts: 30 days for recovery, then permanently deleted</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Cryptographic Keys:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Public keys: Duration of account relationship</li>
                  <li>Encrypted private key backups: Until you delete them or close your account</li>
                  <li>Permanently deleted within 30 days of account deletion</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Authentication Tokens:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Refresh tokens: Until revoked or account deleted</li>
                  <li>Access tokens: Short-lived (typically hours), then automatically expired</li>
                  <li>Token logs: 90 days for security monitoring</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Version Check Logs:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>No personal data stored from version check requests</li>
                  <li>Anonymous version check statistics: 12 months (aggregated)</li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Data Security</h2>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Technical Safeguards:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Encryption in transit (TLS/SSL for all communications)</li>
                  <li>Encryption at rest for sensitive data</li>
                  <li>Secure password hashing (bcrypt or equivalent)</li>
                  <li className="font-bold">AES-256-GCM encryption for optional private key backups</li>
                  <li className="font-bold">Cryptographic signing of authentication tokens</li>
                  <li className="font-bold">Zero-knowledge architecture — we cannot access your unencrypted private keys</li>
                  <li>Regular security updates and patches</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Authentication Security:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li><span className="font-bold">Short-lived access tokens</span> to limit exposure</li>
                  <li><span className="font-bold">Secure token refresh mechanism</span> via auth.scomm.ai</li>
                  <li>Protection against token theft and replay attacks</li>
                </ul>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Data Breach Notification</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>We will notify affected users within 72 hours</li>
                  <li>We will notify relevant authorities as required by law</li>
                  <li className="font-bold">For cryptographic key compromises, we will provide immediate guidance on key rotation</li>
                </ul>
              </div>

              {/* Data Sharing */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Data Sharing And Disclosure</h2>
                <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-6">
                  We do not sell your personal information. We may share information only in these specific circumstances:
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Payment Processors:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Stripe, PayPal, or other payment gateways — Purpose: Process transactions</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Infrastructure Providers:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Cloud hosting and storage services — Data shared: Account data, public keys, encrypted private key backups</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Third-Party Identity Providers:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Google, Microsoft, and other SSO providers — Purpose: User authentication via SSO</li>
                  <li>Data shared: Authentication requests and email address for account matching</li>
                </ul>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">What We NEVER Share</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li><span className="font-bold">Private cryptographic keys</span> (we don&apos;t have access to them)</li>
                  <li><span className="font-bold">Private key encryption passwords</span> (you choose these, we never see them)</li>
                  <li>Email content or communications</li>
                  <li>Browsing history outside our services</li>
                </ul>
              </div>

              {/* Your Privacy Rights */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Your Privacy Rights</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">You have the following rights depending on your jurisdiction:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Access copies of your personal information (PIPEDA, GDPR, CCPA)</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your data (including public keys, encrypted private key backups, and authentication tokens)</li>
                  <li>Export your data in machine-readable format</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent for processing at any time</li>
                  <li>Lodge complaints with relevant supervisory authorities</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Special Note on Cryptographic Data:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>We can provide your public keys upon request</li>
                  <li>Encrypted private key backups can only be deleted (we cannot access or correct them — you control the password)</li>
                  <li>We can delete all cryptographic data upon request</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">To Exercise Your Rights:</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2"><span className="font-bold">Email:</span> privacy@scomm.ai</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2"><span className="font-bold">Subject Line:</span> Privacy Rights Request — [Type of Request]</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">We respond within 5 business days (acknowledgment) and 30 days (full response).</p>
              </div>

              {/* Children */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Children&apos;s Privacy</h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Our applications are not directed to children under 16</li>
                  <li>We do not knowingly collect personal information from children under 16</li>
                  <li>If we discover we have collected information from a child, we will delete it immediately</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Contact <strong>privacy@scomm.ai</strong> immediately if you believe a child has provided information or if you are a parent seeking to exercise rights.</p>
              </div>

              {/* California Privacy */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">California Privacy Disclosures</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">This section applies exclusively to California residents.</p>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Notice of Collection</h3>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Categories of Personal Information Collected:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Identifiers (name, email)</li>
                  <li>Commercial information (transaction data)</li>
                  <li>Internet activity (application usage data)</li>
                  <li>Inferences (none)</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold text-gray-900">Sources:</span> Directly from you, automatically through our applications, and from payment processors.
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">No Sale of Personal Information</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">We do not sell personal information and have not done so in the preceding 12 months. We do not share personal information for cross-context behavioral advertising.</p>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">California &quot;Shine the Light&quot; Law</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">We do not share your personal information with third parties for their own direct marketing purposes.</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed"><span className="font-semibold text-gray-900">CCPA Rights:</span> See the &quot;Your Privacy Rights&quot; section above for details on exercising your rights.</p>
              </div>

              {/* Marketing Communications */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Marketing Communications</h2>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Transactional Emails (cannot opt out):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Purchase confirmations and account notifications</li>
                  <li>Security alerts and service updates</li>
                  <li className="font-bold">Application version update notifications</li>
                  <li className="font-bold">Authentication and token-related alerts</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Marketing Emails (can opt out):</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Product announcements and promotional offers</li>
                  <li>Newsletters and affiliate program updates</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">You can opt out by:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Clicking &quot;unsubscribe&quot; in any marketing email</li>
                  <li>Emailing privacy@scomm.ai with &quot;Unsubscribe&quot; in the subject</li>
                  <li>Updating preferences in your account settings</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  CASL Compliance: We obtain express or implied consent before sending commercial electronic messages and honor opt-out requests within 10 business days.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Changes To This Privacy Policy</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">We reserve the right to update this Privacy Policy at any time. Material changes will be notified via email or app banner with 30 days notice. Continued use of our applications constitutes acceptance of the updated policy.</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">If you do not agree with changes, you should discontinue use and may request deletion of your account.</p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">Contact Information</h2>
                <div className="bg-[#F5F9FA] rounded-xl p-6 sm:p-8 border border-gray-200 mb-6">
                  <p className="text-sm sm:text-base text-gray-700 mb-2"><strong className="font-semibold">Email:</strong> privacy@scomm.ai</p>
                  <p className="text-sm sm:text-base text-gray-700 mb-2"><strong className="font-semibold">DPO:</strong> dpo@scomm.ai</p>
                  <p className="text-sm sm:text-base text-gray-700"><strong className="font-semibold">Mailing Address:</strong><br />scomm.ai — Media Routes Inc.<br />86-50 Burnhamthorpe Rd W,<br />Mississauga, ON L5B 3C2<br />Canada</p>
                </div>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Regulatory Authorities:</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li><strong className="font-semibold">Canada:</strong> Office of the Privacy Commissioner (www.priv.gc.ca)</li>
                  <li><strong className="font-semibold">EU/UK:</strong> Your local data protection authority</li>
                  <li><strong className="font-semibold">California:</strong> California Attorney General (oag.ca.gov)</li>
                </ul>
              </div>

              {/* Summary */}
              <div>
                <hr className="border-gray-200 mb-8 sm:mb-12" />
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">SUMMARY OF OUR PRIVACY COMMITMENTS</h2>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Client-Side Architecture:</p>
                <ul className="list-none space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>✓ Core processing happens on your device (desktop, iOS, mobile)</li>
                  <li>✓ Private keys stay on your device (unless you choose encrypted cloud backup)</li>
                  <li>✓ You control your encryption password — we cannot decrypt your private key backups</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">What We Actually Collect:</p>
                <ul className="list-none space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>✓ Account information (name, email, encrypted password)</li>
                  <li>✓ Billing information (for purchases)</li>
                  <li>✓ Application usage data (features used, error logs)</li>
                  <li>✓ Technical information (IP address, device type)</li>
                  <li>✓ Public cryptographic keys (for email encryption)</li>
                  <li>✓ Optionally: Encrypted private key backups (AES-256-GCM, encrypted with YOUR password)</li>
                  <li>✓ Authentication tokens (for secure access to paid features)</li>
                </ul>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">What We NEVER Collect:</p>
                <ul className="list-none space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>✗ Unencrypted private cryptographic keys</li>
                  <li>✗ Your private key encryption passwords</li>
                  <li>✗ Email content, metadata, or headers</li>
                  <li>✗ Personal data during version update checks</li>
                </ul>
                <hr className="border-gray-200 mb-8 sm:mb-12" />
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">ACKNOWLEDGMENT</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  By using scomm.ai applications and related services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  If you do not agree with this policy, please do not use our applications or services.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-gray-900">Effective Date:</span> February 06, 2026
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-gray-900">Last Updated:</span> March 2026
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8 sm:mb-12">
                  <span className="font-semibold text-gray-900">Version:</span> 2.0
                </p>
                <hr className="border-gray-200 mb-8 sm:mb-12" />
                <p className="text-sm sm:text-base text-center font-semibold text-gray-900">
                  END OF PRIVACY POLICY — APPLICATIONS &amp; RELATED SERVICES
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

