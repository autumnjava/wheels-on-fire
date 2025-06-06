import { A } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { Modal } from '../../components/modal';
import { Slider } from '../../components/slider';

// images
import posing from '../../components/data/images/18.jpg';
import surfing from '../../components/data/images/20.jpg';
import mountainView from '../../components/data/images/23.jpg';

export const BikepackingInTheAzoresPart3 = () => {
  const [isModalVisible, setIsModalVisible] = createSignal(false);
  const [initialSlide, setIinitialSlide] = createSignal(0);

  const handleOnClickOpenModal = (initialSlide: number) => {
    setIinitialSlide(initialSlide);
    setIsModalVisible(true);
    document.body.style.overflowY = 'hidden';
  };

  return (
    <>
      <div
        class="mb-4 flex h-[200px] w-full cursor-pointer flex-col bg-black bg-cover bg-center px-12 pt-8 sm:mb-12 sm:h-[500px] sm:pt-4 md:h-[868px] md:px-16 md:pt-28"
        style={{ 'background-image': `url(${mountainView})` }}
        onClick={() => handleOnClickOpenModal(0)}
      ></div>

      <div class="container mx-auto my-4 max-w-[1040px] px-4 sm:my-12">
        <div class="gap-4 space-y-4 sm:columns-2">
          <p>
            This time I managed to bike up the first big hill from Velas without
            breaking any bike parts. Our goal was to bike to the north side of
            the island and visit Fajã dos Cubres and Fajã de Santo Cristo, both
            home of amazing waves. Fajã means a small flat piece of land located
            by the sea formed by rocks fallen from cliffs.
          </p>
          <p>
            The surf forecast looked promising not big but nice size waves with
            offshore wind. It’s just that, to go to the other side of the island
            it’s a long and steep bike ride and we were very heavy at this point
            because we had to buy food for a week. Down at the fajã there were
            no food stores only a cafe that was not always open, so we had to
            gear up a lot to manage to stay for some days.
          </p>
          <p>
            It was heavy to bike with all the extra food. I think we biked up
            more then 800m that day. Tired of biking we arrived to the road
            signs pointing out our destination. We were close, just a 600m
            descent to reach to the sea. We could do it, from here it was just
            going down.
          </p>
          <p class="break-inside-avoid">
            We started to roll down but didn’t make it too far, blinded by an
            amazing view we just had to stop and take in what lied in front of
            us. When you come down to Fajã dos Cubres you can’t drive any
            longer. Only by foot, bike or with authorized quad mobiles you can
            reach to the other Fajãs.
          </p>
          <p>
            The beauty of this place is hard to describe in words, when you sit
            on your surfboard waiting for the next wave and just observe the
            scenario around you it’s just magic.Specially when you made your way
            here by bike and you have put in a lot of effort to come to where
            you are, it makes you really be in peace with yourself. On top of
            that for the most part we just surfed alone picking whatever wave we
            could surf.
          </p>
          <p>
            We stayed down till our last meal, that was just a freshly picked
            spinach soup and we knew by then we needed to go and get some proper
            food.
          </p>
          <p>
            It was a long steep way up to bike all the way back to the top and
            without eating proper food would make it more difficult. But we were
            saved by a local guy called Beto that we had been hanging with
            during our stay. He had been sleepless all night thinking of our way
            up and insisted to strap our bikes and boards on his quad and drive
            us all the way up. We’re forever thankful for that!
          </p>
          <p>
            After biking for some time,we recharged in a mini market buying a
            lot of snacks, our sugar levels got up and we started biking again.
            It felt that the trip was moving towards the end but there was one
            thing we still wanted to do before leaving the Azores.
          </p>
        </div>

        <h3 class="my-4 text-center font-futuraMedium text-headingL sm:my-12">
          The beauty of this place is hard to describe in words, when you sit on
          your surfboard waiting for the next wave and just observe the scenario
          around you is so magical. Specially when you’ve made your way here by
          bike and have put in a lot of effort to come to where you are, it
          makes you really be in peace with yourself.
        </h3>
      </div>

      <div class="container mx-auto my-4 grid gap-4 sm:my-12 sm:grid-cols-2">
        <div
          class="h-[200px] w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat sm:h-[500px]"
          style={{ 'background-image': `url(${posing})` }}
          onClick={() => handleOnClickOpenModal(1)}
        ></div>
        <div
          class="h-[200px] w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat sm:h-[500px]"
          style={{ 'background-image': `url(${surfing})` }}
          onClick={() => handleOnClickOpenModal(2)}
        ></div>
      </div>

      <button
        class="mx-auto mt-8 block bg-red px-[13px] py-[2px] text-white sm:px-[13px] sm:py-[5px]"
        onClick={() => handleOnClickOpenModal(2)}
      >
        + Photos
      </button>

      {/* TODO: refactor later */}
      <div class="container mx-auto my-4 flex flex-col justify-between gap-8 px-4 sm:my-12 sm:max-w-[600px] sm:flex-row sm:gap-16">
        <A
          class="text-center font-futuraMedium text-headingM leading-[26px] text-red"
          href="/our-adventures/bikepacking-in-the-azores/1"
        >
          <span class="dot border border-red" />
          <h3>
            São Miguel -<br />
            S.Jorge pt I
          </h3>
        </A>

        <A
          class="text-center font-futuraMedium text-headingM leading-[26px] text-red"
          href="/our-adventures/bikepacking-in-the-azores/2"
        >
          <span class="dot border border-red" />
          <h3>Faial</h3>
        </A>

        <A
          class="text-center font-futuraMedium text-headingM leading-[26px] text-red"
          href="/our-adventures/bikepacking-in-the-azores/3"
        >
          <span class="dot border border-red !bg-red" />
          <h3>S.Jorge pt II</h3>
        </A>
        <A
          class="text-center font-futuraMedium text-headingM leading-[26px] text-red"
          href="/our-adventures/bikepacking-in-the-azores/4"
        >
          <span class="dot border border-red" />
          <h3>Pico</h3>
        </A>
      </div>

      <div class="container mx-auto my-8 px-4 text-center">
        <Modal
          onClose={() => setIsModalVisible(false)}
          visible={isModalVisible()}
        >
          <Slider
            controls={true}
            autoplay={false}
            showArrowsMobile={true}
            initialSlide={initialSlide()}
          >
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-left bg-no-repeat sm:h-[500px] md:h-[700px]"
              style={{ 'background-image': `url(${mountainView})` }}
            ></div>
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[700px]"
              style={{ 'background-image': `url(${posing})` }}
            ></div>
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[700px]"
              style={{ 'background-image': `url(${surfing})` }}
            ></div>
          </Slider>
        </Modal>
      </div>
    </>
  );
};
