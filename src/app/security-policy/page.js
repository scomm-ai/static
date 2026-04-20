import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SecurityPolicyPage() {
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
                Security Policy
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
              {/* Introduction */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Security Commitment
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  At scomm.ai, security is fundamental to our mission. This Security Policy outlines our comprehensive approach to protecting your data, our infrastructure, and maintaining the highest standards of security practices.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We are committed to transparency about our security measures and continuously improving our security posture to protect against evolving threats.
                </p>
              </div>

              {/* Encryption Standards */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Encryption Standards
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Email Encryption
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  All emails processed through scomm.ai are encrypted using:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li><strong className="font-semibold">AES-256:</strong> Industry-standard symmetric encryption for email content</li>
                  <li><strong className="font-semibold">RSA-4096:</strong> Asymmetric encryption for key exchange and digital signatures</li>
                  <li><strong className="font-semibold">Perfect Forward Secrecy:</strong> Unique session keys for each communication</li>
                  <li><strong className="font-semibold">End-to-End Encryption:</strong> Messages encrypted on sender&apos;s device, decrypted only on recipient&apos;s device</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Data in Transit
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  All data transmitted between your device and our servers is protected using:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>TLS 1.3 for all connections</li>
                  <li>Certificate pinning to prevent man-in-the-middle attacks</li>
                  <li>Strong cipher suites with perfect forward secrecy</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Data at Rest
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  All data stored on our servers is encrypted at rest using AES-256. Encryption keys are managed separately from encrypted data and are never stored in plain text.
                </p>
              </div>

              {/* Zero-Knowledge Architecture */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Zero-Knowledge Architecture
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  scomm.ai implements a zero-knowledge architecture, which means:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li><strong className="font-semibold">No Access to Keys:</strong> We never have access to your encryption keys or passwords</li>
                  <li><strong className="font-semibold">No Access to Content:</strong> We cannot read, decrypt, or access your email content</li>
                  <li><strong className="font-semibold">On-Device Processing:</strong> All encryption and decryption occurs on your device</li>
                  <li><strong className="font-semibold">No Plain Text Storage:</strong> We never store unencrypted email content on our servers</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  This architecture ensures that even if our systems were compromised, your emails would remain secure and inaccessible to attackers.
                </p>
              </div>

              {/* Infrastructure Security */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Infrastructure Security
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Server Security
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Our infrastructure is secured through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Regular security updates and patches</li>
                  <li>Intrusion detection and prevention systems</li>
                  <li>Network segmentation and firewalls</li>
                  <li>DDoS protection and mitigation</li>
                  <li>24/7 monitoring and alerting</li>
                  <li>Regular penetration testing and vulnerability assessments</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Data Centers
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Our servers are hosted in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>SOC 2 Type II certified data centers</li>
                  <li>ISO 27001 compliant facilities</li>
                  <li>Geographically distributed for redundancy</li>
                  <li>Physical security controls including biometric access</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Backup and Disaster Recovery
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We maintain encrypted backups of critical system data with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>Automated daily backups</li>
                  <li>Off-site backup storage</li>
                  <li>Regular backup restoration testing</li>
                  <li>Disaster recovery procedures and documentation</li>
                </ul>
              </div>

              {/* Access Controls */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Access Controls and Authentication
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  User Authentication
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We implement strong authentication measures:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Password requirements: minimum 12 characters with complexity requirements</li>
                  <li>Multi-factor authentication (MFA) support</li>
                  <li>Account lockout after failed login attempts</li>
                  <li>Session management with automatic timeout</li>
                  <li>Password hashing using bcrypt with salt</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Employee Access
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Employee access to systems is controlled through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-6">
                  <li>Principle of least privilege</li>
                  <li>Role-based access controls (RBAC)</li>
                  <li>Multi-factor authentication for all employees</li>
                  <li>Regular access reviews and audits</li>
                  <li>Immediate revocation upon termination</li>
                </ul>
              </div>

              {/* Vulnerability Management */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Vulnerability Management
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We maintain a comprehensive vulnerability management program:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li><strong className="font-semibold">Regular Scanning:</strong> Automated vulnerability scanning of our infrastructure</li>
                  <li><strong className="font-semibold">Penetration Testing:</strong> Annual third-party security assessments</li>
                  <li><strong className="font-semibold">Bug Bounty Program:</strong> Rewards for responsible disclosure of security vulnerabilities</li>
                  <li><strong className="font-semibold">Patch Management:</strong> Timely application of security patches and updates</li>
                  <li><strong className="font-semibold">Threat Intelligence:</strong> Monitoring of emerging threats and vulnerabilities</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Critical vulnerabilities are addressed within 24 hours, while high-severity issues are resolved within 7 days.
                </p>
              </div>

              {/* Incident Response */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Incident Response
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We maintain a formal incident response plan that includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>24/7 security monitoring and detection</li>
                  <li>Dedicated incident response team</li>
                  <li>Automated alerting and escalation procedures</li>
                  <li>Containment and mitigation procedures</li>
                  <li>Post-incident analysis and improvement</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  In the event of a security incident affecting user data, we will:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Notify affected users within 72 hours</li>
                  <li>Provide clear information about the incident</li>
                  <li>Recommend steps users can take to protect themselves</li>
                  <li>Report to relevant authorities as required by law</li>
                </ul>
              </div>

              {/* Compliance */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Compliance and Certifications
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  scomm.ai adheres to industry standards and best practices:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li><strong className="font-semibold">GDPR:</strong> Compliant with European data protection regulations</li>
                  <li><strong className="font-semibold">CCPA:</strong> Compliant with California privacy regulations</li>
                  <li><strong className="font-semibold">SOC 2:</strong> Annual audits of security controls</li>
                  <li><strong className="font-semibold">ISO 27001:</strong> Information security management standards</li>
                  <li><strong className="font-semibold">OWASP:</strong> Following secure coding practices</li>
                </ul>
              </div>

              {/* Security Best Practices */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Security Best Practices for Users
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  While we implement strong security measures, users should also follow best practices:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Use a strong, unique password for your scomm.ai account</li>
                  <li>Enable multi-factor authentication when available</li>
                  <li>Keep your scomm.ai application updated to the latest version</li>
                  <li>Back up your encryption keys in a secure location</li>
                  <li>Be cautious of phishing attempts and suspicious emails</li>
                  <li>Use secure networks when accessing your account</li>
                  <li>Log out from shared or public devices</li>
                  <li>Report security concerns immediately</li>
                </ul>
              </div>

              {/* Security Reporting */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Reporting Security Issues
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We take security vulnerabilities seriously. If you discover a security issue, please:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Email us immediately at security@scomm.ai.com</li>
                  <li>Provide detailed information about the vulnerability</li>
                  <li>Allow us time to address the issue before public disclosure</li>
                  <li>Follow responsible disclosure practices</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We operate a bug bounty program and may offer rewards for valid security reports. Please do not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Access or modify data that doesn&apos;t belong to you</li>
                  <li>Perform denial of service attacks</li>
                  <li>Disrupt our services or other users</li>
                  <li>Violate any laws or breach any agreements</li>
                </ul>
              </div>

              {/* Updates */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Security Policy Updates
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We regularly review and update our security practices. This Security Policy may be updated to reflect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>Changes in security threats and technologies</li>
                  <li>New compliance requirements</li>
                  <li>Improvements to our security measures</li>
                  <li>Feedback from security audits and assessments</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We will notify users of significant changes to this Security Policy via email or in-app notification.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                  Security Contact
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  For security-related inquiries, vulnerability reports, or questions about this Security Policy, please contact:
                </p>
                <div className="bg-[#F5F9FA] rounded-xl p-6 sm:p-8 border border-gray-200">
                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    <strong className="font-semibold">Security Team:</strong> security@scomm.ai.com
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    <strong className="font-semibold">General Support:</strong> support@scomm.ai.com
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong className="font-semibold">Address:</strong> scomm.ai Security Team
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

