import { Button } from '../button';
import bgImage from '../data/ju_faial.jpeg';

type HeroProps = {};

export const HeroSlide3 = (props: HeroProps) => {
  return (
    <div
      class="mb-8 flex h-[500px] w-full flex-col content-center justify-center bg-black bg-cover bg-center px-12 pt-4 md:h-[687px] md:px-16"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <div class="mx-auto text-center sm:max-w-[50%]">
        <p class="font-futuraExtraBold text-headingXXL font-bold uppercase tracking-wider text-white">
          Bikepacking in the Azores
        </p>
        <p class="font-futuraMedium text-headingXXL tracking-wider text-white">
          How it all started
        </p>
        <Button url="/what-we-offer">Know more</Button>
      </div>
    </div>
  );
};
