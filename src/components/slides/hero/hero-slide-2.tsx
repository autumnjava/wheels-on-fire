import { Button } from '../../button';
import bgImage from '../../data/images/ju_bike.jpg';

type HeroProps = {};

export const HeroSlide2 = (props: HeroProps) => {
  return (
    <div
      class="mb-8 flex h-[500px] w-full flex-col bg-black bg-cover bg-center px-12 pt-[8%] xl:pt-[5%] 2xl:pt-[2%] brightness-75 md:h-[600px] lg:h-[768px] md:px-16"
      style={{ 'background-image': `url(${bgImage})` }}
    >
        <q class="text-outline-thicker block font-futura text-heroHeadingXL font-bold uppercase tracking-widest whitespace-nowrap">
          Forget the
          <br /> comfort, let's
          <br /> get dirty!
        </q>
      <div>
        <Button url="/what-we-offer">Know more</Button>
      </div>
    </div>
  );
};
