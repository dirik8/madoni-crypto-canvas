
import { Shield, Lock, FileText, CheckCircle } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0B0F] to-[#131722]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Industry-Leading Security
          </h2>
          <p className="text-gray-400">
            Your security is our top priority. Madonichain implements multi-layered security 
            protocols and strict compliance measures to ensure your assets are protected at all times.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side - Security features */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cold Storage Protection</h3>
                <p className="text-gray-400">
                  99.9% of user funds are stored in offline cold wallets, 
                  completely isolated from internet access to prevent hacking attempts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <Lock className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced 2FA Security</h3>
                <p className="text-gray-400">
                  Multiple verification layers including biometric, email, SMS, and 
                  authenticator app options to secure your account.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
                <p className="text-gray-400">
                  Fully compliant with international AML and KYC regulations, maintaining 
                  licenses in major jurisdictions worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Regular Security Audits</h3>
                <p className="text-gray-400">
                  Regular system audits by top cybersecurity firms with 
                  results published transparently to ensure platform integrity.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Trust indicators */}
          <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-xl p-6 md:p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Trust Metrics</h3>
              <p className="text-gray-400">Real-time security and platform performance</p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                <span className="text-gray-400">Cold Storage Ratio</span>
                <span className="text-white font-semibold">99.9%</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                <span className="text-gray-400">Platform Uptime</span>
                <span className="text-white font-semibold">99.99%</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                <span className="text-gray-400">Insurance Fund</span>
                <span className="text-white font-semibold">$150M USD</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                <span className="text-gray-400">Security Team</span>
                <span className="text-white font-semibold">24/7 Monitoring</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Last Security Audit</span>
                <span className="text-white font-semibold">March 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
