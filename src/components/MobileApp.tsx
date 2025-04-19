
import { Button } from "@/components/ui/button";
import { AppleIcon, PlayIcon } from "lucide-react";

// Creating custom icons since Lucide doesn't have exact matches for app stores
const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5821 12.571C17.5312 9.63723 20.0185 8.15542 20.1442 8.07991C18.7341 6.06758 16.5658 5.79129 15.8008 5.76261C13.9667 5.57275 12.1884 6.80669 11.2599 6.80669C10.3121 6.80669 8.85979 5.7817 7.33229 5.81996C5.37979 5.85822 3.56062 6.93504 2.56354 8.62941C0.511457 12.0785 2.03896 17.1685 3.9964 19.9593C4.96479 21.3258 6.09312 22.8553 7.57896 22.7894C9.02687 22.7235 9.56937 21.8702 11.3094 21.8702C13.0302 21.8702 13.5344 22.7894 15.0398 22.7512C16.5931 22.7235 17.5517 21.3737 18.483 20.0071C19.5921 18.4298 20.0389 16.8908 20.0581 16.8153C20.0198 16.8057 17.6331 15.6906 17.5821 12.571Z" fill="currentColor"/>
    <path d="M15.0093 4.00645C15.7836 3.07768 16.3069 1.80319 16.1621 0.5C15.0429 0.547542 13.6712 1.23736 12.8587 2.14739C12.1419 2.94069 11.5128 4.26183 11.6767 5.51751C12.9236 5.60281 14.2062 4.91645 15.0093 4.00645Z" fill="currentColor"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.41064 21.6219C4.02521 21.9981 3.42302 22.1083 2.92489 21.8916C2.42676 21.6748 2.09668 21.1686 2.09668 20.6117V3.38883C2.09668 2.83189 2.42676 2.32572 2.92489 2.10896C3.09679 2.03272 3.27645 1.99634 3.45454 1.99634C3.78777 1.99634 4.11441 2.11208 4.41064 2.33829L14.2763 9.94946C14.5986 10.2025 14.8006 10.5892 14.8006 11.0003C14.8006 11.4113 14.5986 11.798 14.2763 12.0511L4.41064 19.6622C4.02521 20.0384 3.42302 20.1487 2.92489 19.9319" fill="currentColor"/>
    <path d="M10.761 11.0003L2.09668 3.38883V20.6117L10.761 13.0006V11.0003Z" fill="currentColor"/>
    <path d="M19.5304 12.0041L15.2155 9.63041C14.7661 9.37779 14.2327 9.54347 13.98 9.99266C13.7274 10.442 13.8931 10.9754 14.3423 11.228L17.7236 13.0005L14.3423 14.7731C13.8931 15.0257 13.7274 15.5591 13.98 16.0084C14.1513 16.3025 14.46 16.4682 14.7794 16.4682C14.9336 16.4682 15.0899 16.4345 15.2356 16.3631L19.5304 13.9969C19.8245 13.8234 20.0079 13.5091 20.0079 13.0005C20.0079 12.492 19.8245 12.1777 19.5304 12.0041Z" fill="currentColor"/>
  </svg>
);

const MobileApp = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#131722] to-[#0A0B0F] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Mobile App Image */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-1 rounded-[32px] inline-block">
              <div className="bg-[#1A1D26] border border-gray-800 rounded-[30px] p-4 relative">
                {/* Replace with actual mobile app mockup */}
                <div className="aspect-[9/16] w-full max-w-[280px] mx-auto bg-gray-900 rounded-2xl overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center text-gray-600 text-center p-4">
                    Mobile App Interface Placeholder
                    <br/>
                    (Replace with actual app screenshot)
                  </div>
                </div>
                
                {/* Phone Details */}
                <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-1/3 h-[25px] bg-black rounded-b-xl"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
                Trade Anywhere with the Madonichain Mobile App
              </h2>
              <p className="text-gray-400 mb-8">
                Take your crypto portfolio wherever you go. Our mobile app offers the full functionality 
                of the desktop platform with an intuitive interface designed specifically for on-the-go trading.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Real-Time Price Alerts</h3>
                    <p className="text-gray-400">Get instantly notified when markets move.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none">
                      <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 21C3 16.0294 7.02944 12 12 12C16.9706 12 21 16.0294 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Face/Touch ID Login</h3>
                    <p className="text-gray-400">Secure and convenient biometric access.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="9" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="9" y1="16" x2="15" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Advanced Order Types</h3>
                    <p className="text-gray-400">Full trading capabilities on mobile.</p>
                  </div>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="bg-gray-900 border-gray-700 hover:bg-gray-800 text-white flex items-center gap-2">
                  <AppleIcon />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Button>
                <Button variant="outline" className="bg-gray-900 border-gray-700 hover:bg-gray-800 text-white flex items-center gap-2">
                  <PlayIcon />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>

              {/* QR Code */}
              <div className="mt-8 flex items-center gap-4">
                <div className="bg-white p-2 rounded-lg">
                  <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-xs text-gray-500">QR Code</div>
                </div>
                <p className="text-sm text-gray-400">Scan to download the app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
