import { TransparentVideo } from "@/components/media/transparent-video";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

function HeroSection() {
  return (
    <section className="section-tight overflow-hidden page-layout">
      <div className="flex w-full flex-col">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.36em] text-primary">
            Systems Engineering Agency
          </p>
          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-heading font-manrope sm:text-5xl md:text-6xl lg:text-7xl">
            Automate. Accelerate. Scale.
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-7 sm:text-lg md:mt-6 md:text-xl md:leading-8">
            We build automation, backend, security, and growth systems that help
            B2B teams operate faster, scale cleaner, and convert more reliably.
          </p>

          <div className="flex items-center gap-2 mt-8">
            <Button className="px-8 py-5 rounded-full hover:bg-primary-hover border-4 border-blue-900">
              <Phone strokeWidth={2.5} /> Book a Consultation
            </Button>

            <Button className="px-8 py-5 rounded-full hover:bg-muted hover:border-primary/70 bg-transparent border-4 border-primary">
              View Our Services <ArrowRight strokeWidth={2.5} />
            </Button>
          </div>
        </div>

        <div className="relative mt-8 aspect-[1.32/1] w-full sm:mt-7 sm:aspect-[1.8/1] lg:mt-3 lg:aspect-[2.65/1]">
          <div className="pointer-events-none absolute inset-0 w-full">
            <TransparentVideo
              src="/videos/home-hero.mp4"
              className="h-full w-full"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background via-background/60 to-transparent sm:w-24 lg:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background via-background/60 to-transparent sm:w-24 lg:w-32" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-linear-to-t from-background via-background/60 to-transparent sm:h-20 lg:h-28" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
