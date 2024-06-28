import { Button } from '../components/button';
import image1 from '../components/data/pickup2.jpg';
import { ExpandableContainer } from '../components/expandable-container';
import { Slider } from '../components/slider';
import { BeastSlide1 } from '../components/slides/the-beasts/beast-slide-1';
import { BeastSlide2 } from '../components/slides/the-beasts/beast-slide-2';
import { BeastSlide3 } from '../components/slides/the-beasts/beast-slide-3';

export const WhatWeOffer = () => {
  const halfDay = () => (
    <>
      <div class="my-4">
        <p>3-4 hrs - Guided tour</p>
        <p>- Shuttle Service</p>
        <p>- Pick up - Drop off</p>
      </div>

      <hr class="mx-auto h-px w-[20%] border-0 bg-red" />

      <div class="my-4 flex justify-center text-center text-red">
        <p>* Min. 2 ppl</p>
        <p class="ml-4">* Max. 3 ppl</p>
      </div>

      <div>
        <p class="text-red">* P/rider - 75€</p>
      </div>
      <div>
        <p class="text-red">* Bike Rental - 55€</p>
      </div>
    </>
  );
  const fullDay = () => (
    <>
      <div class="my-4">
        <p>5-6 hrs - Guided tour</p>
        <p>- Shuttle Service</p>
        <p>- Pick up - Drop off</p>
      </div>

      <hr class="mx-auto h-px w-[20%] border-0 bg-red" />

      <div class="my-4 flex justify-center text-center text-red">
        <p>* Min. 2 ppl</p>
        <p class="ml-4">* Max. 3 ppl</p>
      </div>

      <div>
        <p class="text-red">* P/rider - 95€€</p>
      </div>
      <div>
        <p class="text-red">* Bike Rental - 75€</p>
      </div>
    </>
  );
  const oneDayPlus = () => (
    <>
      <div class="my-4">
        <p>Join us for a good ride!</p>
        <p>Guided tour on multiple locations.</p>
      </div>

      <hr class="mx-auto h-px w-[20%] border-0 bg-red" />

      <div class="my-4">
        <p>- Guided tour</p>
        <p>- Shuttle Service</p>
        <p>- Pick up - Drop off</p>
      </div>

      <div class="my-4 flex justify-center text-center text-red">
        <p>* Min. 2 ppl</p>
        <p class="ml-4">* Max. 3 ppl</p>
      </div>
    </>
  );
  return (
    <>
      <div
        class="testi-container bg-cover bg-center md:ml-4"
        style={{ 'background-image': `url(${image1})` }}
      >
        <div class="testi-content mx-4 mt-8 w-[90%] xl:w-[60%]">
          <h1 class="text-outline relative block pl-4 text-headingXXXL tracking-wider">
            What we offer
          </h1>

          <h2 class="transparent-overlay w-[60%] p-8 text-headingL">
            We want to bring you and your friends out on a bike adventure and
            show the island from a different perspective. Doesnʼt matter if itʼs
            your first time out on a bike trail or if you are a full on dirt
            shredder, either way, youʼre in for a fun ride !
          </h2>
        </div>
      </div>

      <div class="my-16 w-full border-t border-red">
        <div class="relative z-10 w-[fit-content] bg-red px-4 py-2 font-futuraMedium text-headingM uppercase text-white md:static">
          The beasts
        </div>
        <div class="-mt-10 bg-white p-4 pt-12 md:m-4 md:pt-4">
          <Slider controls={true} slidesPerView={3}>
            <BeastSlide1 />
            <BeastSlide2 />
            <BeastSlide3 />
          </Slider>
        </div>
      </div>

      <hr class="hidden border-red md:block" />

      <div class="mx-auto my-16 px-4 text-center md:w-[60%]">
        <h3 class="font-futuraExtraBold text-headingXL">What's included</h3>
        <h4 class="font-futuraMedium text-headingL uppercase">
          Either in for a half, full or a couple of days youʼll sure feel your{' '}
          <span class="font-futuraExtraBold">WHEELS ON FIRE.</span>
        </h4>
        <p class="font-futuraMedium text-headingL">
          * Ride will be adjusted to your needs & skills*
        </p>

        <p class="text-red md:hidden">
          * Includes a full suspension Enduro bike, helmet & knee pads, gloves,
          Accident insurance coverage
        </p>
      </div>

      <div class="hidden justify-between text-center md:flex">
        <div class="mx-8">
          <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
            <h4 class="font-futuraMedium text-headingS uppercase">Half day</h4>
          </div>

          {halfDay()}
        </div>

        <div class="mx-8">
          <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
            <h4 class="font-futuraMedium text-headingS uppercase">Full day</h4>
          </div>
          {fullDay()}
        </div>

        <div class="mx-8">
          <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
            <h4 class="font-futuraMedium text-headingS uppercase">1 day +</h4>
          </div>
          {oneDayPlus()}
          <div class="hidden md:block">
            <Button url="/get-in-touch" customClass="block mx-auto">
              Get in touch
            </Button>
          </div>
        </div>
      </div>

      <ExpandableContainer heading="half day" customCss="block md:hidden">
        {halfDay()}

        <Button url="/get-in-touch" customClass="block mx-auto my-4">
          Get in touch
        </Button>
      </ExpandableContainer>
      <ExpandableContainer heading="full day" customCss="block md:hidden">
        {fullDay()}

        <Button url="/get-in-touch" customClass="block mx-auto my-4">
          Get in touch
        </Button>
      </ExpandableContainer>
      <ExpandableContainer heading="1 day +" customCss="block md:hidden">
        {oneDayPlus()}

        <Button url="/get-in-touch" customClass="block mx-auto my-4">
          Get in touch
        </Button>
      </ExpandableContainer>

      <div class="my-16 w-full border-t-0 border-red text-center md:border-t">
        <div class="relative z-10 w-[fit-content] bg-red px-4 py-2 font-futuraMedium text-headingM uppercase text-white md:static">
          Private guided tour
        </div>
        <div class="p-4 pt-12 md:m-4 md:pt-4">
          <h3 class="font-futuraExtraBold text-headingXL uppercase">
            Are you the one and only rider?
          </h3>
          <Button url="/get-in-touch" customClass="block mx-auto my-4">
            Get in touch
          </Button>
        </div>
      </div>

      <div class="my-16 w-full border-t border-red text-center">
        <div class="w-[fit-content] bg-red px-4 py-2 font-futuraMedium text-headingM uppercase text-white">
          Customize your trip
        </div>
        <div class="p-4 pt-12 md:m-4 md:pt-4">
          <h3 class="font-futuraExtraBold text-headingXL uppercase">
            Do you want us to customize your trip?
          </h3>
          <h4 class="font-futuraMedium text-headingL uppercase">
            Are you looking for a customized adventure where youʼll get to see
            all the different parts of the island?
          </h4>
          <p class="font-futuraMedium text-headingL">
            * Ride will be adjusted to your needs & skills*
          </p>
          <p class="font-futuraMedium text-headingM text-red">* Min 1 day</p>
          <Button url="/get-in-touch" customClass="block mx-auto my-4">
            Get in touch
          </Button>
        </div>
      </div>

      <hr class="border-red" />

      <div class="my-16 w-full text-center">
        <div class=" p-4 pt-12 md:m-4 md:pt-4">
          <h3 class="font-futuraExtraBold text-headingXL uppercase">
            Do you just want to rent bikes? <br /> Or shuttle?
          </h3>

          <Button url="/get-in-touch" customClass="block mx-auto my-4">
            Get in touch
          </Button>
        </div>
      </div>
    </>
  );
};
