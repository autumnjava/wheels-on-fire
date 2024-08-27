import { Button } from '../../button';
import bgImage from '../../data/images/ju_faial.jpeg';

type HeroProps = {};

export const HeroSlide3 = (props: HeroProps) => {
  return (
    <div
      class="mb-8 flex h-[270px] w-full flex-col bg-black bg-cover bg-center px-4 pt-4 sm:pt-4 md:h-[768px] md:px-16 md:pt-28"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <div class="mx-auto text-center">
        <p class="font-futuraBold text-[7vw] uppercase tracking-wider text-white sm:text-headingXXL leading-[110%]">
          Bikepacking
          <br />
          in the Azores
        </p>
        <p class="font-futuraMedium text-headingL sm:leading-[137%] text-white">
          How it all started
        </p>
        <Button
          url="/our-adventures/bikepacking-in-the-azores/1"
          customClass="mx-auto !mt-2"
        >
          Know more
        </Button>
      </div>
    </div>
  );
};
