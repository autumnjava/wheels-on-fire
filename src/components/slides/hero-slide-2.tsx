import { Button } from '../button';
import bgImage from '../data/DSC01567.jpg';

type HeroProps = {};

export const HeroSlide2 = (props: HeroProps) => {
  return (
    <div
      class="mb-8 flex h-[500px] w-[100vw] flex-col content-center justify-center bg-black bg-center px-8 pt-4 md:h-[650px]"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <div class="sm:max-w-[50%]">
        <p class="block font-futuraExtraBold text-headingXXL font-bold uppercase tracking-wider text-white">
          S. Miguel in action - exploring the cool trails on the island
        </p>
        <Button url="/what-we-offer">Know more</Button>
      </div>
    </div>
  );
};
