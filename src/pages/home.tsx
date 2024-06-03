import clsx from 'clsx';
import { Button } from '../components/button';
import { Slider } from '../components/slider';
import { HeroSlide1 } from '../components/slides/hero-slide-1';
import { HeroSlide2 } from '../components/slides/hero-slide-2';

export const Home = () => {
  const sectionStyle = 'container mx-auto my-12 px-4 text-center';
  const h2Style = 'font-futuraExtraBold text-headingXL font-bold uppercase';

  return (
    <>
      <Slider controls={true}>
        <HeroSlide1 />
        <HeroSlide2 />
      </Slider>

      <div class="container mx-auto my-4 px-4">
        <h2 class={clsx(h2Style, 'text-headingL')}>Brands that support us</h2>
        <Slider slidesPerView={3} spacing={10} autoplay={true}>
          <p>company1</p>
          <p>company2</p>
          <p>company3</p>
          <p>company4</p>
          <p>company5</p>
          <p>company6</p>
          <p>company7</p>
          <p>company8</p>
        </Slider>
      </div>

      <hr class="border-red" />

      <div class={sectionStyle}>
        <h2 class={h2Style}>You ride. We pick you up.</h2>
        <h2 class={h2Style}>We got you all set up.</h2>
      </div>

      <div class={sectionStyle}>
        <h3 class="text-headingL uppercase">Get in touch</h3>
        <Button url="/get-in-touch" customClass="mt-2">
          Contact us
        </Button>
      </div>
    </>
  );
};
