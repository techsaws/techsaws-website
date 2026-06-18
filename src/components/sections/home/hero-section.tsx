import { TransparentVideo } from "@/components/media/transparent-video";

function HeroSection() {
  return (
    <section className="section-tight overflow-hidden">
      <div className="flex w-full flex-col">
        <div className="page-layout h-25"></div>

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
