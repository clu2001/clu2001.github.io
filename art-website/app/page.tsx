import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative font-sans">
      <Navbar />
      {/* Background Image that defines the page height */}
      <div className="relative w-full">
        <Image
          src="/erm6.png"
          alt="Background"
          width={1920}
          height={3000}
          className="w-full h-auto"
          priority
          quality={100}
        />
        {/* Content overlay positioned on top of the image */}
      </div>
    </div>
  );
}
