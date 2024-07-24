import { Button } from '../components/button';
import { Slider } from '../components/slider';
import { HeroSlide1 } from '../components/slides/hero/hero-slide-1';
import { HeroSlide2 } from '../components/slides/hero/hero-slide-2';
import { HeroSlide3 } from '../components/slides/hero/hero-slide-3';

// brand logos
import brand3 from '../components/data/images/brands/OneUp-Logo-Border-1000px.png';
import brand4 from '../components/data/images/brands/chromag-bikes-seeklogo-01.png';
import brand1 from '../components/data/images/brands/commencal-logo-vector-01.png';
import brand2 from '../components/data/images/brands/poc-sports-logo-vector-01.png';

export const Home = () => {
  const sectionStyle = 'container mx-auto mt-[94px] mb-[24px] px-4 text-center';
  const h2Style = 'font-futuraExtraBold text-headingXL font-bold uppercase';

  return (
    <>
      <Slider controls={true} controlsPosition="hero" autoplay={true}>
        <HeroSlide1 />
        <HeroSlide2 />
        <HeroSlide3 />
      </Slider>

      <div class="container mx-auto my-4 px-4">
        <h2 class="mb-4 text-center font-futuraExtraBold text-headingL font-bold uppercase">
          Brands that support us
        </h2>
        <div class="flex items-center justify-evenly">
          <img src={brand1} class="w-[123px] md:w-[153px]" />
          <img src={brand2} class="w-[44px] md:w-[64px]"/>
          <img src={brand3} class="w-[53px] md:w-[73px]"/>
          <img src={brand4} class="w-[43px] md:w-[63px]" />
        </div>
      </div>

      <hr class="mt-8" />

      <div class={sectionStyle}>
        <h2 class={h2Style}>You ride. We pick you up.</h2>
        <h2 class={h2Style}>We got you all set up.</h2>
      </div>

      <div class="container mx-auto px-4 text-center">
        <h3 class="text-headingL uppercase">Get in touch</h3>
        <Button url="/get-in-touch" customClass="mt-[20px]">
          Contact us
        </Button>
      </div>
    </>
  );
};
