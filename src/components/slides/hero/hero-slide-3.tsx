import { Button } from '../../button';
import bgImage from '../../data/images/ju_faial.jpeg';

type HeroProps = {};

export const HeroSlide3 = (props: HeroProps) => {
  return (
    <div
      class="mb-8 flex h-[500px] w-full flex-col bg-black bg-cover bg-center px-12 pt-8 sm:pt-4 md:h-[768px] md:px-16 md:pt-28"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <div class="mx-auto text-center">
        <p class="font-futura text-headingXXL font-bold uppercase tracking-wider text-white">
          Bikepacking
          <br />
          in the Azores
        </p>
        <p class="font-futuraMedium text-headingXXL leading-[137%] text-white">
          How it all started
        </p>
        <Button url="/what-we-offer" customClass="mx-auto">
          Know more
        </Button>
      </div>
    </div>
  );
};
