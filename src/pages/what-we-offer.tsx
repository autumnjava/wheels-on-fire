import { Button } from '../components/button';
import { ExpandableContainer } from '../components/expandable-container';
import { Slider } from '../components/slider';

// images
import brand1 from '../components/data/brands/commencal-logo-vector-01.png';
import image1 from '../components/data/pickup2.jpg';

import imageBike2 from '../components/data/bikes/22CLASHRIRS_01_2000.jpg';
import imageBike3 from '../components/data/bikes/22CLASHRIRS_02_2000.jpg';
import imageBike4 from '../components/data/bikes/22CLASHRIRS_03_2000.jpg';
import imageBike1 from '../components/data/bikes/22CLASHRIRS_2000.jpg';

export const WhatWeOffer = () => {
  const halfDay = () => (
    <>
      <div class="what-we-offer my-4">
        <p>- Guided tour</p>
        <p>- Shuttle Service</p>
        <p>- Pick up - Drop off</p>
        <br />
        <p>3-4 hrs</p>
      </div>

      <div class="what-we-offer-red my-4 flex justify-center text-center text-red">
        <p>* Min. 2 ppl</p>
        <p class="ml-2">|</p>
        <p class="ml-2">* Max. 3 ppl</p>
      </div>
      <div class="what-we-offer-red">
        <p class="text-red">* P/rider - 65€</p>
        <p class="text-red">* Bike Rental - 55€</p>
      </div>
    </>
  );

  const fullDay = () => (
    <>
      <div class="what-we-offer my-4">
        <p>- Guided tour</p>
        <p>- Shuttle Service</p>
        <p>- Pick up - Drop off</p>
        <br />
        <p>5-6 hrs</p>
      </div>

      <div class="what-we-offer-red my-4 flex justify-center text-center text-red">
        <p>* Min. 2 ppl</p>
        <p class="ml-2">|</p>
        <p class="ml-2">* Max. 3 ppl</p>
      </div>

      <div class="what-we-offer-red">
        <p class="text-red">* P/rider - 85€</p>
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

  const BikeSlide = (props: { image: string }) => (
    <div class="bg-white px-8">
      <img src={props.image} class="mx-auto max-h-[640px] object-contain" />
    </div>
  );

  return (
    <>
      <hr />

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

      <div class="mb-16 w-full border-t border-red">
        <div class="relative z-10 w-[fit-content] bg-red px-4 py-2 font-futuraMedium text-headingM uppercase leading-[27px] text-white md:static">
          The beasts
        </div>
        <div class="p-2 pt-12 md:m-8 md:pt-4">
          <Slider controls={true} slidesPerView={1} dotsColor="red">
            <BikeSlide image={imageBike1} />
            <BikeSlide image={imageBike2} />
            <BikeSlide image={imageBike3} />
            <BikeSlide image={imageBike4} />
          </Slider>
        </div>

        <div class="px-4 text-center">
          <img src={brand1} width={123} class="mx-auto" />
          <h3 class="font-futuraMedium text-headingL uppercase leading-[60px] text-red">
            Commencal clash ride dirt rockshox
          </h3>

          <h4 class="mx-auto my-6 max-w-[809px] font-futuraMedium text-headingM leading-[28px]">
            The CLASH has 170 mm of travel and 27.5" wheels, and is designed for
            one thing and one thing only - having fun! With a look of the FRS,
            the freeride affiliation is obvious. In addition to descending at
            full gas, the CLASH knows how to pedal to get to the trailhead when
            the lift is closed. Depending on the terrain you can optimise grip
            or dynamism thanks to a specific insert.
          </h4>

          <Button url="/get-in-touch" customClass="block mx-auto !my-8">
            Check more here
          </Button>
        </div>
      </div>

      <hr />

      <div class="my-16 flex justify-center text-center">
        <div class="mx-4">
          <p class="font-futuraMedium text-[40px] uppercase leading-[60px] text-red">
            M
          </p>
          <p class="font-andaleMonoBold text-[20px] leading-[27px]">
            168 - 180 CM
          </p>
        </div>

        <div class="mx-4">
          <p class="font-futuraMedium text-[40px] uppercase leading-[60px] text-red">
            L
          </p>
          <p class="font-andaleMonoBold text-[20px] leading-[27px]">
            178 - 190 CM
          </p>
        </div>
      </div>

      <div class="my-16 w-full border-t border-red text-center">
        <div class="w-[fit-content] bg-red px-4 py-2 font-futuraMedium text-headingM uppercase leading-[27px] text-white">
          What we offer
        </div>
        <div class="mx-auto p-4 pt-12 md:max-w-[1042px] md:pt-8">
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
            * Includes a full suspension Enduro bike, helmet & knee pads,
            gloves, Accident insurance coverage
          </p>
        </div>

        <div class="mx-auto mt-8 hidden max-w-[1042px] justify-between text-center md:flex">
          <div class="mx-8">
            <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
              <h4 class="font-futuraMedium text-headingS uppercase">
                Half day
              </h4>
            </div>

            {halfDay()}
          </div>

          <div class="mx-8">
            <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
              <h4 class="font-futuraMedium text-headingS uppercase">
                Full day
              </h4>
            </div>
            {fullDay()}
          </div>

          <div class="mx-8">
            <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
              <h4 class="font-futuraMedium text-headingS uppercase">1 day +</h4>
            </div>
            {oneDayPlus()}
            <div class="hidden md:block">
              <Button
                url="/get-in-touch"
                customClass="block mx-auto text-[17px]"
              >
                Get in touch
              </Button>
            </div>
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

      <div class="my-16 w-full border-t border-red flex flex-col">
        <div class="w-[fit-content] bg-red px-4 py-2 font-futuraMedium text-headingM uppercase leading-[27px] text-white">
          Customize your trip
        </div>
        <div class="mx-auto max-w-[620px] p-4 pt-12 text-center md:pt-8 [&>*]:my-2">
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
        </div>

        <div class="self-center">
          <p class="font-futuraMedium text-headingM text-red">* Min 1 day</p>
          <Button url="/get-in-touch" customClass="block !my-8">
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
            Are you the one <br /> and only rider?
          </h3>
          <Button url="/get-in-touch" customClass="block mx-auto my-4">
            Get in touch
          </Button>
        </div>
      </div>

      <hr />

      <div class="mt-16 w-full text-center">
        <div class="px-4 pt-12">
          <h3 class="font-futuraExtraBold text-headingXL uppercase">
            Do you just want to rent bikes? <br /> Or shuttle?
          </h3>

          <Button url="/get-in-touch" customClass="block mx-auto mt-4">
            Get in touch
          </Button>
        </div>
      </div>
    </>
  );
};
