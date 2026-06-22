import Image from "next/image";

import ClientImg01 from "../../../../public/images/client-01-img.png";
import ClientImg02 from "../../../../public/images/client-02-img.png";
import ClientImg03 from "../../../../public/images/client-03-img.png";
import ClientImg04 from "../../../../public/images/client-04-img.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function HomeHeroSection() {
  const clients = [ClientImg01, ClientImg02, ClientImg03, ClientImg04];

  return (
    <div
      className="h-screen bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/home-hero-img.png')",
      }}
    >
      <div className=" pt-24 pb-18 h-full flex items-end justify-between page-layout">
        <div className="flex flex-col gap-4">
          <h1 className="max-w-lg text-5xl font-medium text-heading">
            We Build the Systems Behind Modern Business.
          </h1>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-light text-heading">
              Trusted by{" "}
              <span className="text-primary font-semibold">10k+</span>{" "}
              businesses
            </h2>

            <div className="flex items-center">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/90 shadow-lg -ml-2 first:ml-0 transition-all duration-300 hover:z-20 hover:-translate-y-1"
                  style={{ zIndex: clients.length - index }}
                >
                  <Image
                    src={client}
                    alt={`Client ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}

              <div className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/90 bg-primary text-sm font-semibold text-white">
                +
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-lg leading-relaxed font-light max-w-xl">
            TechSaws builds AI, software, revenue, and security systems that
            help businesses operate smarter, grow faster, and scale.
          </p>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg bg-white px-4 py-3.5 text-sm font-manrope font-medium text-black transition-transform duration-300 hover:scale-[1.02] tracking-wide"
            >
              Get Started
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                <ArrowRight size={12} />
              </div>
            </Link>
            <Link
              href="/"
              className="glass-nav rounded-lg px-4 py-3.5 text-sm font-manrope font-normal text-heading transition-transform duration-300 hover:scale-[1.02] tracking-wide"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeroSection;
