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
      <div class="what-we-offer my-4">
        <p>Guided tour</p>
        <p>- Shuttle Service</p>
        <p>- Pick up - Drop off</p>
        <br />
        <p>3-4 hrs</p>
      </div>

      {/* <hr class="mx-auto h-px w-[20%] border-0 bg-red" /> */}

      <div class="what-we-offer-red my-4 flex justify-center text-center text-red">
        <p>* Min. 2 ppl</p>
        <p class="ml-2">|</p>
        <p class="ml-2">* Max. 3 ppl</p>
      </div>
      <div class="what-we-offer-red">
        <p class="text-red">* P/rider - 75€</p>
        <p class="text-red">* Bike Rental - 55€</p>
      </div>
    </>
  );
  const fullDay = () => (
    <>
      <div class="what-we-offer my-4">
        <p>Guided tour</p>
        <p>- Shuttle Service</p>
        <p>- Pick up - Drop off</p>
        <br />
        <p>5-6 hrs</p>
      </div>

      {/* <hr class="mx-auto h-px w-[20%] border-0 bg-red" /> */}

      <div class="what-we-offer-red my-4 flex justify-center text-center text-red">
        <p>* Min. 2 ppl</p>
        <p class="ml-2">|</p>
        <p class="ml-2">* Max. 3 ppl</p>
      </div>

      <div class="what-we-offer-red">
        <p class="text-red">* P/rider - 95€</p>
        <p class="text-red">* Bike Rental - 75€</p>
      </div>
    </>
  );
  const oneDayPlus = () => (
    <>
      <div class="what-we-offer my-4">
        <p>Join us for a good ride!</p>
        <p>Guided tour on multiple locations.</p>
      </div>

      {/* <hr class="mx-auto h-px w-[20%] border-0 bg-red" /> */}

      <div class="what-we-offer my-4">
        <p>- Guided tour</p>
        <p>- Shuttle Service</p>
        <p>- Pick up - Drop off</p>
      </div>

      <div class="what-we-offer-red my-4 flex justify-center text-center text-red">
        <p>* Min. 2 ppl</p>
        <p class="ml-2">|</p>
        <p class="ml-2">* Max. 3 ppl</p>
      </div>
    </>
  );
  return (
    <>
      <hr class="border-red" />

      <div
        class="testi-container mt-6 bg-cover bg-center bg-origin-content sm:h-[450px] sm:bg-[30%] md:h-fit xl:h-[850px]"
        style={{ 'background-image': `url(${image1})` }}
      >
        <div class="testi-content">
          <h1 class="text-outline text-headingWhatWeOffer relative block pl-4 leading-[90%] tracking-wider">
            What <br /> we offer
          </h1>

          <h2 class="text-headingWhatWeOfferSub transparent-overlay p-4 md:max-w-[180px] lg:max-w-[250px]">
            We want to bring you and your friends out on a bike adventure and
            show the island from a different perspective. Doesnʼt matter if itʼs
            your first time out on a bike trail or if you are a full on dirt
            shredder, either way, youʼre in for a fun ride !
          </h2>
        </div>
      </div>

      <div class="my-16 w-full border-t border-red">
        <div class="relative z-10 w-[fit-content] bg-red px-4 py-2 font-futuraMedium text-headingM uppercase leading-[27px] text-white md:static">
          The beasts
        </div>
        <div class="-mt-10 bg-white p-2 pt-12 md:m-8 md:pt-4">
          <Slider controls={true} slidesPerView={3}>
            <BeastSlide1 />
            <BeastSlide2 />
            <BeastSlide3 />
          </Slider>
        </div>
      </div>

      <hr class="hidden border-red md:block" />

      <div class="mx-auto my-16 px-4 text-center md:max-w-[991px]">
        <h3 class="font-futuraExtraBold text-headingXL uppercase leading-[85px]">
          What's included
        </h3>
        <h4 class="font-futuraMedium text-headingL uppercase leading-[45px]">
          Either in for a half, full or a couple of days youʼll sure feel your{' '}
          <span class="font-futuraExtraBold">WHEELS ON FIRE.</span>
        </h4>
        <p class="font-futuraMedium text-headingL leading-[45px]">
          * Ride will be adjusted to your needs & skills*
        </p>

        <p class="text-red md:hidden">
          * Includes a full suspension Enduro bike, helmet & knee pads, gloves,
          Accident insurance coverage
        </p>
      </div>

      <div class="mx-auto hidden max-w-[1156px] justify-between text-center md:flex">
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
            <Button url="/get-in-touch" customClass="block mx-auto text-[17px]">
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

      <div class="my-16 w-full border-t border-red text-center">
        <div class="w-[fit-content] bg-red px-4 py-2 font-futuraMedium text-headingM uppercase leading-[27px] text-white">
          Customize your trip
        </div>
        <div class="mx-auto max-w-[620px] p-4 pt-12 md:pt-8 [&>*]:my-2">
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
          <Button url="/get-in-touch" customClass="block mx-auto !my-8">
            Get in touch
          </Button>
        </div>
      </div>

      <div class="my-16 w-full border-t-0 border-red text-center md:border-t">
        <div class="relative z-10 w-[fit-content] bg-red px-4 py-2 font-futuraMedium text-headingM uppercase leading-[27px] text-white md:static">
          Private tour
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
