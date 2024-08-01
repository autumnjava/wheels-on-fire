import { Button } from '../../button';
import bgImage from '../../data/images/jallas_bike_2.jpeg';

type HeroProps = {};

export const HeroSlide1 = (props: HeroProps) => {
  return (
    <div
      class="mb-8 flex h-[270px] sm:h-[500px] w-full flex-col content-center justify-center bg-black bg-cover bg-left px-4 pt-4 sm:bg-top md:h-[768px] md:px-24"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <div class="sm:max-w-[490px]">
        <p class="font-futura text-[1.2rem] sm:text-headingXXL font-bold uppercase tracking-wider text-white">
          S. Miguel <br /> in action - <br /> exploring <br /> the cool <br />{' '}
          trails on <br /> the island
        </p>
        <Button url="/what-we-offer">Know more</Button>
      </div>
    </div>
  );
};
