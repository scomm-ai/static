import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FAQsPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "Will my existing emails be encrypted automatically?",
          answer: "New emails you send and receive after installing scomm.ai will be automatically encrypted. Your existing email history remains in your original email provider&apos;s format. You can choose to encrypt and migrate old emails if needed."
        },
        {
          question: "Can I use scomm.ai alongside my current email app?",
          answer: "Yes, you can use scomm.ai alongside Gmail, Outlook, or other email clients. However, to ensure all your emails are encrypted, we recommend using scomm.ai as your primary email client."
        },
        {
          question: "How long does it take to set up scomm.ai?",
          answer: "Setup typically takes 5-10 minutes. You&apos;ll need to download the app, connect your email account, and configure your encryption preferences. The initial email sync may take longer depending on your mailbox size."
        },
        {
          question: "Do I need technical knowledge to use scomm.ai?",
          answer: "No, scomm.ai is designed to be user-friendly. The encryption happens automatically in the background. Basic setup is straightforward, and advanced features are optional."
        }
      ]
    },
    {
      category: "Compatibility & Integration",
      questions: [
        {
          question: "Can recipients without scomm.ai read my encrypted emails?",
          answer: "Yes, recipients without scomm.ai can still read your emails. They&apos;ll receive instructions on how to view the encrypted message securely through a web interface, or you can share a temporary access link."
        },
        {
          question: "Does scomm.ai work with email aliases and forwarding?",
          answer: "Yes, scomm.ai supports email aliases and forwarding rules. Encrypted emails maintain their security even when forwarded, as long as the recipient has the decryption key."
        },
        {
          question: "Can I import contacts and calendar from my existing email?",
          answer: "Yes, scomm.ai can import your contacts and calendar events from Gmail, Outlook, and other providers during the initial setup process."
        },
        {
          question: "Will scomm.ai work with my company&apos;s email server?",
          answer: "scomm.ai works with standard IMAP/SMTP email servers. If your company uses custom authentication or special configurations, you may need to contact your IT department or our support team for assistance."
        }
      ]
    },
    {
      category: "Performance & Storage",
      questions: [
        {
          question: "How much disk space does scomm.ai use?",
          answer: "The app itself is around 50-100 MB depending on your platform. Encrypted email storage depends on your mailbox size. Local storage is typically similar to your original email size, while cloud backups may use additional space."
        },
        {
          question: "Will scomm.ai slow down my computer or phone?",
          answer: "scomm.ai is designed to be lightweight and efficient. Encryption and decryption happen quickly in the background. The on-device AI search may use some processing power during initial indexing, but it runs in the background and shouldn&apos;t noticeably impact performance."
        },
        {
          question: "How long does it take to search through my emails?",
          answer: "After the initial indexing (which happens automatically in the background), searches are nearly instant even with 50,000+ emails. The first-time indexing may take a few minutes depending on your mailbox size."
        },
        {
          question: "Can I limit how much storage scomm.ai uses?",
          answer: "Yes, you can configure storage limits in settings. You can choose to only sync recent emails, set maximum storage quotas, or use selective folder syncing to control storage usage."
        }
      ]
    },
    {
      category: "Privacy & Data Control",
      questions: [
        {
          question: "Can I use scomm.ai without connecting to cloud storage?",
          answer: "Yes. You can store everything locally on your device or a personal storage device. Cloud storage is optional and fully under your control."
        },
        {
          question: "What happens to my emails if I uninstall scomm.ai?",
          answer: "Your emails remain in your original email provider (Gmail, Outlook, etc.). If you&apos;ve stored encrypted backups, those remain accessible. Uninstalling scomm.ai doesn&apos;t delete your emails from your email provider."
        },
        {
          question: "Can I export my emails from scomm.ai?",
          answer: "Yes, you can export your emails in various formats (EML, MBOX, or encrypted backup files). Exported emails can be imported into other email clients if needed."
        },
        {
          question: "Does scomm.ai collect any usage analytics?",
          answer: "scomm.ai collects minimal, anonymized usage data to improve the app (such as crash reports and feature usage). No email content, personal information, or encryption keys are collected. You can opt out of analytics in settings."
        },
        {
          question: "Can I use scomm.ai in countries with email restrictions?",
          answer: "scomm.ai works anywhere you have internet access. However, some countries may have restrictions on encryption software. We recommend checking local regulations. scomm.ai uses standard email protocols, so it should work in most regions."
        }
      ]
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          question: "Why aren&apos;t my emails syncing?",
          answer: "Check your internet connection first. If using offline mode, emails will sync when you&apos;re back online. Also verify your email account credentials are correct and that your email provider allows IMAP access."
        },
        {
          question: "I forgot my encryption password. Can you help?",
          answer: "We cannot recover your encryption password due to zero-knowledge architecture. However, if you set up a recovery key or backup, you can use that to regain access. Always keep your recovery options in a safe place."
        },
        {
          question: "Emails are taking too long to send. What&apos;s wrong?",
          answer: "Encryption adds minimal overhead. If emails are slow, check your internet connection speed. Large attachments may take longer. You can also check if your email provider has sending limits that might be affecting delivery."
        },
        {
          question: "Can I use scomm.ai on multiple devices with the same account?",
          answer: "Yes, you can use scomm.ai on multiple devices. You&apos;ll need to set up encryption on each device. Your emails will sync across devices if you&apos;ve configured cloud storage or if you manually sync between devices."
        }
      ]
    },
    {
      category: "Billing & Add-ons",
      questions: [
        {
          question: "Can I cancel my add-on subscriptions anytime?",
          answer: "Yes, you can cancel your add-on subscriptions at any time. You&apos;ll continue to have access to the premium features until the end of your current billing period."
        },
        {
          question: "Do you offer discounts for students or non-profits?",
          answer: "We offer educational and non-profit discounts. Contact our support team with proof of eligibility, and we&apos;ll provide information about available discounts."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards and PayPal for all purchases. All payments are processed securely through our payment partners."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 sm:pt-20 md:pt-22 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-8 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FA] to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#023347]/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-0">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-2 sm:mb-3 leading-tight px-1">
                Frequently Asked Questions
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-1">
                Find quick answers to the most common questions about scomm.ai
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="relative pt-2 sm:pt-6 pb-10 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#023347] mb-4 sm:mb-8">
                  {category.category}
                </h2>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group bg-[#F5F9FA] rounded-xl border border-gray-200 open:border-[#2C8DA1]/40 hover:border-[#2C8DA1]/50 transition-colors"
                    >
                      <summary className="cursor-pointer list-none flex items-start justify-between gap-3 p-4 sm:p-6 lg:p-8 text-base sm:text-lg lg:text-xl font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                        <span className="text-left leading-snug">{faq.question}</span>
                        <svg
                          className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#2C8DA1] transition-transform duration-200 group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 -mt-1 sm:-mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-3 sm:mb-6">
              Still have questions?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our support team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
              <Link
                href="/report-a-bug"
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#2C8DA1] hover:bg-[#257a8d] active:bg-[#257a8d] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base inline-block text-center"
              >
                Contact Support
              </Link>
              <Link
                href="/help-center"
                className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#2C8DA1] text-[#2C8DA1] hover:bg-[#2C8DA1] hover:text-white active:bg-[#2C8DA1] active:text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base inline-block text-center"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

