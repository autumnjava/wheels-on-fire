import { Button } from '../button';
import bgImage from '../data/MRP_0119.jpg';

type HeroProps = {};

export const HeroSlide1 = (props: HeroProps) => {
  return (
    <div
      class="mb-8 flex h-[500px] w-[100vw] flex-col content-center justify-center bg-black bg-center px-8 pt-4 md:h-[650px]"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <div class="xl:max-w-[70%]">
        <q class="text-outline block font-futuraExtraBold text-heroHeading font-bold uppercase tracking-wider">
          Forget the comfort, let's get dirty!
        </q>
        <Button url="/what-we-offer">What we offer</Button>
      </div>
    </div>
  );
};
