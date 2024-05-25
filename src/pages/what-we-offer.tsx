import { Button } from '../components/button'
import image1 from '../components/utils/Hip Hucks 1.jpg'

export const WhatWeOffer = () => {
  return (
    <>
      <div
        class="testi-container ml-4"
        style={{ 'background-image': `url(${image1})` }}
      >
        <div class="testi-content mx-4 mt-8 w-[60%]">
          <h1 class=" black-text-outline text-red relative block text-5xl font-bold uppercase tracking-wider md:text-9xl">
            What we offer
          </h1>

          <p class="transparent-overlay">
            We want to bring you and your friends out on a bike adventure and
            show the island from a different perspective. Doesnʼt matter if itʼs
            your first time out on a bike trail or if you are a full on dirt
            shredder, either way, youʼre in for a fun ride !
          </p>

          {/* <div class="absolute top-6 left 6 h-[500px] w-[100vw]" style={{ 'background-image': `url(${image1})` }}></div> */}

          {/* <div>
          <button
            onClick={() => navigate('/what-we-offer')}
            class="m-auto mt-8 block bg-red px-4 py-1  uppercase text-white"
          >
            Check our article here
          </button>
        </div> */}
        </div>
      </div>

      <div class="border-red my-8 w-full border-t">
        <div class="bg-red w-[fit-content] px-4 py-2 uppercase text-white">
          The beasts
        </div>
      </div>

      <div class="m-4 bg-white p-4">carousel will be here</div>

      <hr class="border-red" />

      <div class="mx-auto my-8 w-[60%] text-center text-5xl">
        <h3 class="my-8">Whats included</h3>
        <p class="uppercase">
          Either in for a half, full or a couple of days youʼll sure feel your
          <span class="font-bold">WHEELS ON FIRE !</span>
        </p>
        <p>* Ride will be adjusted to your needs & skills*</p>
      </div>

      <div class="flex justify-between text-center">
        <div class="p-8">
          <div class="bg-red mx-auto w-[fit-content] px-4 py-2 uppercase text-white">
            Half day
          </div>
          <div>
            <p>- Guided tour</p>
            <p>- Shuttle Service</p>
            <p>- Pick up - Drop off</p>
          </div>

          <div>
            <p>3-4 hrs</p>
          </div>

          <div class="flex justify-between">
            <p>* Min. 2 ppl</p>
            <p>* Max. 3 ppl</p>
          </div>

          <div>
            <p>* P/rider - 75€</p>
          </div>
          <div>
            <p>* Bike Rental - 55€</p>
          </div>
        </div>

        <div class="p-8">
          <div class="bg-red mx-auto w-[fit-content] px-4 py-2 uppercase text-white">
            Full day
          </div>
          <div>
            <p>- Guided tour</p>
            <p>- Shuttle Service</p>
            <p>- Pick up - Drop off</p>
          </div>

          <div>
            <p>5-6 hrs</p>
          </div>

          <div class="flex justify-between">
            <p>* Min. 2 ppl</p>
            <p>* Max. 3 ppl</p>
          </div>

          <div>
            <p>* P/rider - 95€</p>
          </div>
          <div>
            <p>* Bike Rental - 75€</p>
          </div>
        </div>

        <div class="p-8">
          <div class="bg-red mx-auto w-[fit-content] px-4 py-2 uppercase text-white">
            1 day +
          </div>
          <div>
            <p>Join us for a good ride!</p>
            <p>Guided tour on multiple locations.</p>
          </div>
          <div>
            <p>- Guided tour</p>
            <p>- Shuttle Service</p>
            <p>- Pick up - Drop off</p>
          </div>

          <div>
            <p>3-4 hrs</p>
          </div>

          <div class="flex justify-between">
            <p>* Min. 2 ppl</p>
            <p>* Max. 3 ppl</p>
          </div>
        </div>
      </div>

      <div>
        <Button url="/get-in-touch">Get in touch</Button>
      </div>
    </>
  )
}
