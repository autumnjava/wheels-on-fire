import { Button } from '../../button';
import bgImage from '../../data/ju_bike.jpg';

type HeroProps = {};

export const HeroSlide2 = (props: HeroProps) => {
  return (
    <div
      class="mb-8 flex h-[500px] w-full flex-col content-center justify-center bg-black bg-cover bg-center px-12 pt-4 brightness-75 md:h-[600px] lg:h-[768px] md:px-16"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <div>
        <q class="text-outline block font-futura text-heroHeadingXL font-bold uppercase tracking-widest">
          Forget the
          <br /> comfort, let's
          <br /> get dirty!
        </q>
        <Button url="/what-we-offer">Know more</Button>
      </div>
    </div>
  );
};
