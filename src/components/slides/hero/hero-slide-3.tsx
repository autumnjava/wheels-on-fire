import { Button } from '../../button';
import bgImage from '../../data/images/ju_faial.jpeg';

type HeroProps = {};

export const HeroSlide3 = (props: HeroProps) => {
  return (
    <div
      class="mb-8 flex h-[360px] w-full flex-col bg-black bg-cover bg-center px-12 pt-16 sm:pt-4 md:h-[768px] md:px-16 md:pt-28"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <div class="mx-auto text-center">
        <p class="font-futura text-[8.3vw] font-bold uppercase tracking-wider text-white sm:text-headingXXL">
          Bikepacking
          <br />
          in the Azores
        </p>
        <p class="font-futuraMedium text-headingXXL leading-[137%] text-white">
          How it all started
        </p>
        <Button
          url="/our-adventures/bikepacking-in-the-azores/1"
          customClass="mx-auto"
        >
          Know more
        </Button>
      </div>
    </div>
  );
};
