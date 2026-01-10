import Image from "next/image";
import Navbar from "../components/Navbar";

export default function OCS() {
  return (
    <div className="relative font-sans">
      <Navbar />
      
      {/* Background Image - Same as other pages */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/erm6.png"
          alt="Background"
          fill
          className="object-cover object-top blur-sm"
          priority
          quality={100}
        />
        {/* Optional: Add overlay to reduce brightness */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/20"></div>
      </div>

      {/* Content - Centered */}
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white">
          under construction!
        </h1>
      </div>
    </div>
  );
}

