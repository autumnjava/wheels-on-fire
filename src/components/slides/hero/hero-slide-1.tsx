import { Button } from '../../button';
import bgImage from '../../data/jallas_bike_2.jpeg';

type HeroProps = {};

export const HeroSlide1 = (props: HeroProps) => {
  return (
    <div
      class="mb-8 flex h-[500px] w-full flex-col content-center justify-center bg-black bg-cover px-12 pt-4 md:h-[768px] md:px-24"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <div class="sm:max-w-[490px]">
        <p class="font-futura text-headingXXL font-bold uppercase tracking-wider text-white">
          S. Miguel in action - exploring the cool trails on the island
        </p>
        <Button url="/what-we-offer">Know more</Button>
      </div>
    </div>
  );
};
