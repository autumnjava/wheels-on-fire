import { Button } from '../../button';
import bgImage from '../../data/images/ju_bike.jpg';

type HeroProps = {};

export const HeroSlide2 = (props: HeroProps) => {
  return (
    <div
      class="mb-8 flex h-[270px] w-full flex-col bg-black bg-cover bg-center px-4 pt-[10%] brightness-75 sm:px-12 md:h-[768px] md:px-16 xl:pt-[5%] 2xl:pt-[2%]"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <q class="text-outline sm:text-outline-thicker block whitespace-nowrap font-futuraBold text-heroHeadingXL font-bold uppercase tracking-widest">
        {' '}
        Forget the
        <br />
        comfort, let's
        <br />
        get dirty!{' '}
      </q>
      <div>
        <Button url="/what-we-offer" customClass="!mt-2">Know more</Button>
      </div>
    </div>
  );
};
