import { Button } from '../components/button';
import { ExpandableContainer } from '../components/expandable-container';
import { Slider } from '../components/slider';

// images
import brand1 from '../components/data/images/brands/commencal-logo-vector-01.png';
import image1 from '../components/data/images/pickup2.jpg';

import imageBike2 from '../components/data/images/bikes/22CLASHRIRS_01_2000.jpg';
import imageBike3 from '../components/data/images/bikes/22CLASHRIRS_02_2000.jpg';
import imageBike4 from '../components/data/images/bikes/22CLASHRIRS_03_2000.jpg';
import imageBike1 from '../components/data/images/bikes/22CLASHRIRS_2000.jpg';

export const WhatWeOffer = () => {
  const halfDay = () => (
    <>
      <div class="what-we-offer my-4">
        <p>- Guided tour</p>
        <p>- 3-4 hrs ride</p>
        <p>- Shuttle Service</p>
        <p>- Pick up - Drop off</p>
      </div>

      <div class="what-we-offer-red my-4 justify-center text-center text-red">
        <p>
          Price p/person (with bike + protection gear -<br /> helmet, knee pads
          and gloves) - 120€
        </p>
      </div>
      <div class="mb-2 mt-4">
        <p class="font-futuraMedium text-[19px] uppercase leading-[120%] sm:text-headingL sm:leading-[45px]">
          Got your own bike?
        </p>
      </div>
      <div class="what-we-offer-red my-2 justify-center text-center text-red">
        <p>Price p/ person - 95€</p>
      </div>
      <div class="what-we-offer-red my-2 justify-center text-center text-red">
        <p>-</p>
      </div>
      <div class="what-we-offer-red my-2 flex justify-center whitespace-nowrap text-center [&>*]:mx-2">
        <p>Max. 3 ppl</p>
      </div>
      <div class="my-6">
        <Button
          url="/get-in-touch"
          customClass="block mx-auto !my-4 what-we-offer-get-in-touch uppercase"
        >
          Book now
        </Button>
      </div>
    </>
  );

  const fullDay = () => (
    <>
      <div class="what-we-offer my-4">
        <p>- Guided tour</p>
        <p>- 5-6 hrs ride</p>
        <p>- Shuttle Service</p>
        <p>- Pick up - Drop off</p>
      </div>

      <div class="what-we-offer-red my-4 justify-center text-center text-red">
        <p>
          Price p/person (with bike + protection gear -<br /> helmet, knee pads
          and gloves) - 160€
        </p>
      </div>
      <div class="mb-2 mt-4">
        <p class="font-futuraMedium text-[19px] uppercase leading-[120%] sm:text-headingL sm:leading-[45px]">
          Got your own bike?
        </p>
      </div>
      <div class="what-we-offer-red my-2 justify-center text-center text-red">
        <p>Price p/ person - 120€</p>
      </div>
      <div class="what-we-offer-red my-2 justify-center text-center text-red">
        <p>-</p>
      </div>
      <div class="what-we-offer-red my-2 flex justify-center whitespace-nowrap text-center [&>*]:mx-2">
        <p>Max. 3 ppl</p>
      </div>
      <div class="my-6">
        <Button
          url="/get-in-touch"
          customClass="block mx-auto !my-4 what-we-offer-get-in-touch uppercase"
        >
          Book now
        </Button>
      </div>
    </>
  );

  // const oneDayPlus = () => (
  //   <>
  //     <div class="what-we-offer my-4">
  //       <p>
  //         Join us for a good
  //         <br class="hidden md:block" /> ride! <br class="block md:hidden" />
  //         Guided tour on
  //         <br class="hidden md:block" /> multiple locations.
  //       </p>
  //     </div>

  //     <div class="what-we-offer mb-2 mt-4">
  //       <p>- Guided tour</p>
  //       <p>- 5-6 hrs ride</p>
  //       <p>- Shuttle Service</p>
  //       <p>- Pick up - Drop off</p>
  //     </div>

  //     <div class="what-we-offer-red my-2 justify-center text-center text-red">
  //       <p>-</p>
  //     </div>
  //     <div class="what-we-offer-red my-2 flex justify-center whitespace-nowrap text-center [&>*]:mx-2">
  //       <p>Min. 2 ppl</p>
  //       <p>|</p>
  //       <p>Max. 3 ppl</p>
  //     </div>
  //     <div class="my-6">
  //       <Button
  //         url="/get-in-touch"
  //         customClass="block mx-auto !my-4 what-we-offer-get-in-touch uppercase"
  //       >
  //         Book now
  //       </Button>
  //     </div>
  //   </>
  // );

  const BikeSlide = (props: { image: string }) => (
    <div class="bg-white px-8">
      <img src={props.image} class="mx-auto max-h-[640px] object-contain" />
    </div>
  );

  return (
    <>
      <hr />

      <div
        class="what-we-offer-container mt-6 min-h-[230px] bg-cover bg-[30%] bg-origin-content slighlySmallerThanSM:min-h-[350px] sm:h-[400px] md:h-fit xl:h-[850px]"
        style={{ 'background-image': `url(${image1})` }}
      >
        <div class="what-we-offer-content">
          <h1 class="text-outline word-spacing relative block pl-4 text-headingWhatWeOffer leading-[90%] tracking-wider">
            What <br /> we offer
          </h1>

          <h2 class="transparent-overlay hidden p-4 text-headingWhatWeOfferSub md:block md:max-w-[180px] lg:max-w-[250px]">
            We want to bring you and your friends out on a bike adventure and
            show the island from a different perspective. Doesnʼt matter if itʼs
            your first time out on a bike trail or if you are a full on dirt
            shredder, either way, youʼre in for a fun ride !
          </h2>
        </div>
      </div>

      <div>
        <h2 class="p-4 text-center text-headingWhatWeOfferSub leading-[28px] md:hidden md:max-w-[180px] lg:max-w-[250px]">
          We want to bring you and your friends out on a bike adventure and show
          the island from a different perspective. Doesnʼt matter if itʼs your
          first time out on a bike trail or if you are a full on dirt shredder,
          either way, youʼre in for a fun ride !
        </h2>
      </div>

      <div class="my-10 w-full border-t border-red text-center md:my-16">
        <div class="w-[fit-content] bg-red px-4 py-1 font-futuraMedium text-[16px] uppercase leading-[100%] text-white sm:px-4 sm:text-headingM sm:leading-[27px]">
          What we offer
        </div>
        <div class="mx-auto my-10 px-4">
          <h3 class="font-futuraExtraBold text-headingXL uppercase leading-[100%]">
            Either in for a half,
            <br class="block sm:hidden" /> full, or a couple of <br /> days
            you'll sure feel your wheels on fire!
          </h3>
          <p class="my-4 font-futuraMedium text-[19px] leading-[14px] sm:text-headingL sm:leading-[45px]">
            * Ride will be adjusted to your needs & skills*
          </p>

          <div class="mx-auto mt-8 hidden justify-center gap-12 text-center lg:flex">
            <div>
              <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
                <h4 class="font-futuraMedium text-headingS uppercase">
                  Half day
                </h4>
              </div>

              {halfDay()}
            </div>

            <div>
              <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
                <h4 class="font-futuraMedium text-headingS uppercase">
                  Full day
                </h4>
              </div>
              {fullDay()}
            </div>

            {/* <div>
              <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
                <h4 class="font-futuraMedium text-headingS uppercase">
                  1 day +
                </h4>
              </div>
              {oneDayPlus()}
            </div> */}
          </div>
          {/*
          <div class="mb-2 mt-4">
            <p class="font-futuraMedium text-[19px] uppercase leading-[120%] sm:text-headingL sm:leading-[45px]">
              Need a snack for the day?
            </p>
          </div>
          <div class="what-we-offer-red my-2 justify-center text-center text-red">
            <p>Price p/ person - 20€</p>
          </div>

          <div class="what-we-offer mb-2 mt-4">
            <p class="!text-[14px] sm:!text-[16px]">
              Includes 2x 50 cl bottle of water, <br class="block sm:hidden" />{' '}
              1 hamburger ( veggie <br class="hidden sm:block" /> or meat option
              ),
              <br class="block sm:hidden" /> 2 energetic bars, a fruit
            </p>
          </div>
          <div class="what-we-offer-red justify-center text-center text-red">
            <p class="!text-[18px]">*please mention any allergies</p>
          </div>
          */}
        </div>
      </div>

      <ExpandableContainer heading="half day" customCss="block lg:hidden">
        {halfDay()}
      </ExpandableContainer>
      <ExpandableContainer heading="full day" customCss="block lg:hidden">
        {fullDay()}
      </ExpandableContainer>
      {/* <ExpandableContainer heading="1 day +" customCss="block lg:hidden">
        {oneDayPlus()}
      </ExpandableContainer> */}

      <div class="my-10 mt-10 flex w-full flex-col border-t border-red md:my-16">
        <div class="w-[fit-content] bg-red px-4 py-1 font-futuraMedium text-[16px] uppercase leading-[100%] text-white sm:px-4 sm:text-headingM sm:leading-[27px]">
          Customize your trip
        </div>
        <div class="mx-auto max-w-[650px] p-4 pt-12 text-center md:pt-8 [&>*:not(:first-child)]:my-2">
          <h3 class="font-futuraExtraBold text-headingXL uppercase">
            Do you want us to customize your trip?
          </h3>
          <h4 class="font-futuraMedium text-headingL uppercase">
            Are you looking for a customized adventure where
            <br class="hidden sm:block" /> youʼll get to see all the different
            parts of the island?
          </h4>
          <p class="font-futuraMedium text-headingL">
            * Ride will be adjusted to your needs & skills*
          </p>
          <p class="font-futuraMedium text-headingS text-red">* Min 1 day</p>

          <Button url="/get-in-touch" customClass="block !mt-4 mx-auto">
            Get in touch
          </Button>
        </div>
      </div>
      
      <div class="my-10 w-full border-t border-red text-center md:my-16">
        <div class="w-[fit-content] bg-red px-4 py-1 font-futuraMedium text-[16px] uppercase leading-[100%] text-white sm:px-4 sm:text-headingM sm:leading-[27px]">
          Private tour
        </div>
        <div class="mt-8 px-4 md:m-4 md:mt-4">
          <h3 class="font-futuraExtraBold text-headingXL uppercase">
            Are you the one <br /> and only rider?
          </h3>
          <Button url="/get-in-touch" customClass="block mx-auto !my-4">
            Get in touch
          </Button>
        </div>
      </div>

      {/* 
      <div class="my-10 w-full border-t border-red text-center md:my-16">
        <div class="w-[fit-content] bg-red px-4 py-1 font-futuraMedium text-[16px] uppercase leading-[100%] text-white sm:px-4 sm:text-headingM sm:leading-[27px]">
          Bike rental | shuttle
        </div>
        <div class="mt-8 px-4 md:m-4 md:mt-4">
          <h3 class="font-futuraExtraBold text-headingXL uppercase">
            Do you just want to rent bikes? <br class="hidden sm:block" /> Or
            shuttle?
          </h3>
          <Button url="/get-in-touch" customClass="block mx-auto !my-4">
            Get in touch
          </Button>
        </div>
      </div>
      */}

      <div class="my-10 w-full border-t border-red md:my-16">
        <div class="relative z-10 w-[fit-content] bg-red px-4 py-1 font-futuraMedium text-[16px] uppercase leading-[100%] text-white sm:px-4 sm:text-headingM sm:leading-[27px] md:static">
          The beasts
        </div>
        <div class="pt-8 md:m-8 md:pt-4">
          <Slider
            controls={true}
            slidesPerView={1}
            dotsColor="red"
            autoplay={true}
            showArrowsMobile={true}
            hideDotsMobile={true}
          >
            <BikeSlide image={imageBike1} />
            <BikeSlide image={imageBike2} />
            <BikeSlide image={imageBike3} />
            <BikeSlide image={imageBike4} />
          </Slider>
        </div>

        <div class="px-4 text-center">
          <img src={brand1} width={123} class="mx-auto my-6" />
          <h3 class="font-futuraMedium text-headingL uppercase text-red sm:leading-[60px]">
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

          <div class="flex justify-center">
            <Button
              url="https://www.commencal.com/us/en/commencal-clash-ride-dirt-new-rockshox/22CLASHRIRS.html"
              customClass="block !my-8 !mx-4"
            >
              Check more here
            </Button>

            <Button
              url="https://www.youtube.com/@wheelsonfireazores"
              customClass="block !my-8 !mx-4"
            >
              Check video
            </Button>
          </div>
        </div>
      </div>

      <div class="my-10 w-full border-t border-red text-center md:mt-16">
        <div class="w-[fit-content] bg-red px-8 py-1 font-futuraMedium text-[16px] uppercase leading-[100%] text-white sm:px-4 sm:text-headingM sm:leading-[27px]">
          Sizes
        </div>
        <div class="flex justify-center">
          <div class="mx-8">
            <p class="font-futuraMedium text-[1.25rem] uppercase leading-[60px] text-red sm:text-[30px]">
              M
            </p>
            <p class="whitespace-nowrap font-andaleMonoBold text-[16px] leading-[27px]">
              168 - 180 CM
            </p>
          </div>

          <div class="mx-8">
            <p class="font-futuraMedium text-[1.25rem] uppercase leading-[60px] text-red sm:text-[30px]">
              L
            </p>
            <p class="whitespace-nowrap font-andaleMonoBold text-[16px] leading-[27px]">
              178 - 190 CM
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
