import { Button } from '../components/button';
import image1 from '../components/data/pickup2.jpg';
import { ExpandableContainer } from '../components/expandable-container';

export const WhatWeOffer = () => {
  const halfDay = () => (
    <>
      <div class="my-4">
        <p>3-4 hrs - Guided tour</p>
        <p>- Shuttle Service</p>
        <p>- Pick up - Drop off</p>
      </div>

      <hr class="mx-auto h-px w-[20%] border-0 bg-red" />

      <div class="my-4 flex justify-center text-center">
        <p>* Min. 2 riders</p>
        <p class="ml-4">* Max. 3 riders</p>
      </div>

      <div>
        <p>* P/rider - 75€</p>
      </div>
      <div>
        <p>* Bike Rental - 55€</p>
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

      <div class="my-4 flex justify-center text-center">
        <p>* Min. 2 riders</p>
        <p class="ml-4">* Max. 3 riders</p>
      </div>

      <div>
        <p>* P/rider - 95€€</p>
      </div>
      <div>
        <p>* Bike Rental - 75€</p>
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

      <div class="my-4 flex justify-center text-center">
        <p>* Min. 2 riders</p>
        <p class="ml-4">* Max. 3 riders</p>
      </div>
    </>
  );
  return (
    <>
      <div
        class="testi-container ml-4 bg-cover bg-center"
        style={{ 'background-image': `url(${image1})` }}
      >
        <div class="testi-content mx-4 mt-8 w-[90%] xl:w-[60%]">
          <h1 class="text-outline relative block pl-4 text-headingXXXL tracking-wider">
            What we offer
          </h1>

          <h2 class="transparent-overlay text-headingL w-[60%] p-8">
            We want to bring you and your friends out on a bike adventure and
            show the island from a different perspective. Doesnʼt matter if itʼs
            your first time out on a bike trail or if you are a full on dirt
            shredder, either way, youʼre in for a fun ride !
          </h2>
        </div>
      </div>

      <div class="my-16 w-full border-t border-red">
        <div class="relative z-10 w-[fit-content] bg-red px-4 py-2 uppercase text-white md:static">
          The beasts
        </div>
        <div class="-mt-10 bg-white p-4 pt-12 md:m-4 md:pt-4">
          carousel will be here!
        </div>
      </div>

      <hr class="hidden border-red md:block" />

      <div class="mx-auto my-8 px-4 text-center md:w-[60%]">
        <h3 class="font-futuraExtraBold text-headingXXL">What's included</h3>
        <h4>
          Either in for a half, full or a couple of days youʼll sure feel your{' '}
          <span class="font-futuraExtraBold">WHEELS ON FIRE.</span>
        </h4>
        <p>* Ride will be adjusted to your needs & skills*</p>

        <p class="text-red md:hidden">
          * Includes a full suspension Enduro bike, helmet & knee pads, gloves,
          Accident insurance coverage
        </p>
      </div>

      <div class="hidden justify-between text-center md:flex">
        <div class="p-8">
          <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
            Half day
          </div>

          {halfDay()}
        </div>

        <div class="p-8">
          <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
            Full day
          </div>
          {fullDay()}
        </div>

        <div class="p-8">
          <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
            1 day +
          </div>
          {oneDayPlus()}
        </div>
      </div>

      <ExpandableContainer heading="half day">
        {halfDay()}

        <Button url="/get-in-touch" customClass="block mx-auto my-4">
          Get in touch
        </Button>
      </ExpandableContainer>
      <ExpandableContainer heading="full day">
        {fullDay()}

        <Button url="/get-in-touch" customClass="block mx-auto my-4">
          Get in touch
        </Button>
      </ExpandableContainer>
      <ExpandableContainer heading="1 day +">
        {oneDayPlus()}

        <Button url="/get-in-touch" customClass="block mx-auto my-4">
          Get in touch
        </Button>
      </ExpandableContainer>

      <div class="hidden md:block">
        <Button url="/get-in-touch" customClass="block mx-auto">
          Get in touch
        </Button>
      </div>

      <div class="my-8 w-full border-t-0 border-red text-center md:border-t">
        <div class="relative z-10 w-[fit-content] bg-red px-4 py-2 uppercase text-white md:static">
          Private guided tour
        </div>
        <div class="p-4 pt-12 md:m-4 md:pt-4">
          <h3 class="font-futuraExtraBold text-headingXXL">
            Are you the one and only rider?
          </h3>
          <Button url="/get-in-touch" customClass="block mx-auto my-4">
            Get in touch
          </Button>
        </div>
      </div>

      <div class="my-8 w-full border-t border-red text-center">
        <div class="w-[fit-content] bg-red px-4 py-2 uppercase text-white">
          Customize your trip
        </div>
        <div class="p-4 pt-12 md:m-4 md:pt-4">
          <h3 class="font-futuraExtraBold text-headingXXL">
            Do you want us to customize your trip?
          </h3>
          <h4>
            Are you looking for a customized adventure where youʼll get to see
            all the different parts of the island?
          </h4>
          <p>* Ride will be adjusted to your needs & skills*</p>
          <p class="text-red">* Min 1 day</p>
          <Button url="/get-in-touch" customClass="block mx-auto my-4">
            Get in touch
          </Button>
        </div>
      </div>

      <hr class="border-red" />

      <div class="my-8 w-full text-center">
        <div class=" p-4 pt-12 md:m-4 md:pt-4">
          <h3 class="font-futuraExtraBold text-headingXXL">
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
