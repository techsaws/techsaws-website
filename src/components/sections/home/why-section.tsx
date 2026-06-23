import Image from "next/image";

import SystemFirstImg from "../../../../public/images/system-first-image.webp";
import OutcomeDrivenImg from "../../../../public/images/outcome-driven-img.webp";
import SecurityBuiltInImg from "../../../../public/images/security-built-in-img.webp";

function WhySection() {
  return (
    <section className="page-layout section-tight">
      <div className="flex flex-col items-center text-center mb-12">
        <p className="mb-2 text-lg font-manrope font-extrabold uppercase tracking-[0.32em] text-sub-heading relative inline-block">
          Why Businesses Choose TechSaws
          <span className="absolute bottom-3 left-0 -z-10 h-5 w-full rounded-full bg-sub-heading/20 blur-xl" />
        </p>
        <h2 className="text-4xl font-light leading-[1.05] tracking-normal font-manrope text-heading">
          Technology should create leverage, not complexity.
        </h2>
      </div>

      <div className="w-full grid grid-cols-3 gap-10">
        <div className="flex flex-col">
          <Image
            src={SystemFirstImg}
            alt="system first"
            className="h-70 mb-4 border border-border rounded-3xl object-cover bg-center"
          />

          <h1 className="text-2xl font-medium">System First</h1>
          <p className="font-light text-lg">Lorem ipsum, dolor sit amet</p>
        </div>

        <div className="flex flex-col">
          <Image
            src={OutcomeDrivenImg}
            alt="outcome driven"
            className="h-70 mb-4 border border-border rounded-3xl object-cover bg-center"
          />

          <h1 className="text-2xl font-medium">Outcome Driven</h1>
          <p className="font-light text-lg">Lorem ipsum, dolor sit amet</p>
        </div>

        <div className="flex flex-col">
          <Image
            src={SecurityBuiltInImg}
            alt="security built-in"
            className="h-70 mb-4 border border-border rounded-3xl object-cover bg-center"
          />

          <h1 className="text-2xl font-medium">Security Built-In</h1>
          <p className="font-light text-lg">Lorem ipsum, dolor sit amet</p>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
