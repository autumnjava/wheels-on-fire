import { Button } from '../../button';
import bgImage from '../../data/images/jallas_bike_2.jpeg';

type HeroProps = {};

export const HeroSlide1 = (props: HeroProps) => {
  return (
    <div
      class="mb-8 flex h-[270px] w-full flex-col content-center justify-center bg-black bg-cover bg-left px-4 pt-4 sm:h-[500px] sm:bg-top md:h-[768px] md:px-24"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <div class="sm:max-w-[490px]">
        <p class="font-futuraBold text-[1.3rem] font-thick uppercase tracking-wider text-white sm:text-headingXXL">
          S. Miguel <br /> in action - <br /> exploring <br /> the cool <br />{' '}
          trails on <br /> the island
        </p>
        <Button url="/what-we-offer" customClass="!mt-2 sm:!mt-6">
          Know more
        </Button>
      </div>
    </div>
  );
};
