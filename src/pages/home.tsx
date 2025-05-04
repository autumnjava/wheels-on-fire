import { A } from '@solidjs/router';
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
  return (
    <>
      <Slider controls={true} controlsPosition="hero" autoplay={true}>
        <HeroSlide1 />
        <HeroSlide2 />
        <HeroSlide3 />
      </Slider>

      
      <hr class="mt-8 border-none" />

      
      <div class='mx-6'>
        {/* Google reviews widget */}
        <div class="elfsight-app-c4e74546-6720-4e9d-b915-19362727499c" data-elfsight-app-lazy></div>
      </div>

      <hr class="mt-8" />

      <div class="container mx-auto mb-4 mt-8 px-4 text-center sm:mb-[24px] sm:mt-[94px]">
        <h2 class="font-futuraExtraBold text-headingXL uppercase">
          You ride.
          <br class="block md:hidden" /> We pick you up.
          <br />
          We got you all set up.
        </h2>
      </div>

      <div class="container mx-auto px-4 text-center mb-12">
        <h3 class="text-headingL uppercase">Get in touch</h3>
        <Button url="/get-in-touch" customClass="sm:mt-[20px] !mt-2 !px-[10px]">
          Contact us
        </Button>
      </div>
      
       {/* Instagram widget */}
      <div class="elfsight-app-2365f321-6e8c-49fd-8cc1-06cc111a13d1" data-elfsight-app-lazy></div>
    </>
  );
};
