import { Button } from '../components/button';
import { Slider } from '../components/slider';
import { HeroSlide1 } from '../components/slides/hero/hero-slide-1';
import { HeroSlide2 } from '../components/slides/hero/hero-slide-2';
import { HeroSlide3 } from '../components/slides/hero/hero-slide-3';

// brand logos
import brand1 from '../components/data/brands/commencal-logo-vector-01.png';
import brand2 from '../components/data/brands/poc-sports-logo-vector-01.png';
import brand3 from '../components/data/brands/OneUp-Logo-Border-1000px.png';
import brand4 from '../components/data/brands/chromag-bikes-seeklogo-01.png';

export const Home = () => {
  const sectionStyle = 'container mx-auto my-12 px-4 text-center';
  const h2Style = 'font-futuraExtraBold text-headingXL font-bold uppercase';

  return (
    <>
      <Slider controls={true} controlsPosition="hero">
        <HeroSlide1 />
        <HeroSlide2 />
        <HeroSlide3 />
      </Slider>

      <div class="container mx-auto my-4 px-4">
        <h2 class="mb-4 text-center font-futuraExtraBold text-headingL font-bold uppercase">
          Brands that support us
        </h2>
        <div class="flex items-center justify-evenly">
          <img src={brand1} width={123} />
          <img src={brand2} width={44} />
          <img src={brand3} width={53} />
          <img src={brand4} width={43} class="h-[50px]" />
        </div>
      </div>

      <hr class="mt-8 border-red" />

      <div class={sectionStyle}>
        <h2 class={h2Style}>You ride. We pick you up.</h2>
        <h2 class={h2Style}>We got you all set up.</h2>
      </div>

      <div class="container mx-auto px-4 text-center">
        <h3 class="text-headingL uppercase">Get in touch</h3>
        <Button url="/get-in-touch" customClass="mt-2">
          Contact us
        </Button>
      </div>
    </>
  );
};
