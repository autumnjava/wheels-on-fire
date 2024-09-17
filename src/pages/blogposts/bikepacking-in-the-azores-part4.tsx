import { A } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { Modal } from '../../components/modal';
import { Slider } from '../../components/slider';

// images
import biking from '../../components/data/images/27.jpg';
import ju_biking from '../../components/data/images/28.jpg';
import ja_biking from '../../components/data/images/30.jpg';

export const BikepackingInTheAzoresPart4 = () => {
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
        style={{ 'background-image': `url(${biking})` }}
        onClick={() => handleOnClickOpenModal(0)}
      ></div>

      <div class="container mx-auto my-4 max-w-[1040px] px-4 sm:my-12">
        <div class="gap-4 space-y-4 sm:columns-2">
          <p>
            The highest mountain of Portugal 2351m high is on the island of
            Pico. We could not be so close and not climb it. We biked back to
            the harbour of Velas but before taking the boat we left the surf
            boards by the transport company and found a place to camp for the
            night.
          </p>
          <p>
            The weather the last days had been good and it looked like the two
            upcoming days would be the same.Perfect for our trip to the mountain
            Pico. We got on a early boat to Pico, the sun was already shinning
            and a group of dolphins came and played in the waves behind the
            boat. The top of Pico was hidden in the clouds.
          </p>
          <p>
            We were a bit sore from biking and surfing so we agreed to bike as
            high as we can the first day of arrival. Juliana didn’t have the
            boards and were much lighter but for me it was the same. 600M over
            sea level was enough for that day.
          </p>
          <p>
            A friendly farmer let us camp on his land and offered us local
            cheese and wine and the guard dog watched over us that night.
          </p>
          <p>
            The following day we continued to bike up to Casa de Montanha that
            is situated 1200m over the sea. It’s were the Pico mountain hiking
            trail starts. The way up with bikes was fine not so steep but
            long,not so much traffic and the weather was really good and we
            could see the mountain top most part of the trip which gave us
            motivation.
          </p>
          <p>
            We arrived in the evening and to our surprise we needed to pay to
            climb the mountain. Not so adventurous we thought.
          </p>
          <p>
            The ticket office opened at 7am so we thought of the brilliant idea
            of startinng to climb the mountain at 3am in the morning and see the
            sunrise wake up all the islands around. Said and done we turned on
            our head torches and started walking up. It was not that easy, some
            parts of trail were really step and a lot of fog was making it hard
            to follow the trail signs. It took us three hours to reach the
            summit.
          </p>
          <p>
            On top there were two tents from people that went with a known local
            guide to also see the sunrise. We rushed to the top to be the first
            and waited for the sun to put it’s colors on the sky. We were lucky
            that morning, no clouds covered the view and we could see all the
            islands around and the hole island of Pico revealing in front of us.
            The guide came up to us and asked who we came up with.
          </p>
          <p>
            We told him we just started to climb in the night by ourselves and
            that we also got here by bike. He laughed and said that we were real
            adventurous people and looked down at our warned out vans
            shoes,“great hiking boots you got” he said while smiling at us. We
            hiked down the mountain tired but very pleased that we just climbed
            the highest mountain of Portugal.
          </p>
        </div>
      </div>

      <div class="container mx-auto my-4 grid gap-4 sm:my-12 sm:grid-cols-2">
        <div
          class="h-[200px] w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat sm:h-[500px]"
          style={{ 'background-image': `url(${ju_biking})` }}
          onClick={() => handleOnClickOpenModal(1)}
        ></div>
        <div
          class="h-[200px] w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat sm:h-[500px]"
          style={{ 'background-image': `url(${ja_biking})` }}
          onClick={() => handleOnClickOpenModal(2)}
        ></div>
      </div>

      <div class="container mx-auto my-4 max-w-[1040px] px-4 sm:my-12">
        <h3 class="my-8 text-center font-futuraMedium text-headingL">
          He laughed and said that we were real adventurous people and looked
          down at our warned out vans shoes, “great hiking boots you got”, he
          said while smiling at us. We hiked down the mountain tired but very
          pleased that we just climbed the highest mountain of Portugal.
        </h3>

        <div class="gap-4 space-y-4 sm:columns-2">
          <p>
            We had some more days left before the flight back to the main land.
            It was more then enough to bike around the island of Pico. I started
            to feel tired of biking, we now almost been out for 10 weeks.
          </p>
          <p>
            We had a really good time, also experienced a lot of ups and downs
            during the trip but most part ups literally. I started to dream
            about biking up the last hill on São Jorge, pack our bikes and send
            them back to the mainland.
          </p>
          <p>
            I had enough of uphills, it was very heavy with a bike trailer. I
            wont be biking with a trailer again if not really needed, better to
            strap bags on your bike cause you will be packing more smart.
          </p>
          <p>
            Even if we were tired, the last days on the island were very nice.
            We followed the south coast on small gravel roads that lingered
            through wineyards.
          </p>
          <p>
            The sun was shining and everywhere was natural pools where we could
            have a refreshing swim.
          </p>
          <p>
            We felt that Pico was a really nice island for bikepacking cause of
            it’s nice routes with no cars and no extreme ups and downs, except
            if you bike up to the mountain. It was more a holiday feeling then a
            wet, windy bike battle.
          </p>
          <p>The time came to face the last hill of the journey.</p>
          <p>
            Packed our bikes in the well used bike boxes that barely could make
            one last boat trip. Has been a good adventure, 4 islands in 10 weeks
            time. I have no clue how many km’s or altitude m we biked and I
            don’t care either. This was a journey not a race.
          </p>
          <p>
            During the time on the bikes we often talked about how nice it would
            be to live on one of the islands of Azores.
          </p>
          <p>
            Now sitting writing this article we both live on the island of Sao
            Miguel.
          </p>
        </div>
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
          <span class="dot border border-red" />
          <h3>S.Jorge pt II</h3>
        </A>
        <A
          class="text-center font-futuraMedium text-headingM leading-[26px] text-red"
          href="/our-adventures/bikepacking-in-the-azores/4"
        >
          <span class="dot border border-red !bg-red" />
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
              class="mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[800px]"
              style={{ 'background-image': `url(${biking})` }}
            ></div>
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[800px]"
              style={{ 'background-image': `url(${ju_biking})` }}
            ></div>
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-bottom bg-no-repeat sm:h-[500px] md:h-[800px]"
              style={{ 'background-image': `url(${ja_biking})` }}
            ></div>
          </Slider>
        </Modal>
      </div>
    </>
  );
};
