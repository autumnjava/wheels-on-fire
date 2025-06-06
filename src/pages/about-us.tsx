import clsx from 'clsx';
import { Button } from '../components/button';
import image2 from '../components/data/images/2.jpg';
import image1 from '../components/data/images/j_jump.jpg';

export const AboutUs = () => {
  return (
    <>
      <hr />
      <div class="mt-8">
        <h1 class="text-outline relative z-10 text-headingAboutUs uppercase tracking-wider">
          About us
        </h1>
        <div class="flex gap-4">
          <div class="mt-[-20px] w-[60%] sm:mt-[-30px] md:mt-[-30px] md:w-1/2 lg:mt-[-58px]">
            <img
              src={image1}
              class="min-h-[238px] object-cover object-top"
            ></img>
          </div>

          <div class="mb-1 mt-[-20px] flex w-[40%] flex-col content-center justify-center pr-4 sm:mt-[-30px] md:mt-0 md:w-1/2 lg:mt-[-58px]">
            <h2 class="text-[1.2rem] leading-[110%] sm:text-headingL">
              We <br class="block md:hidden" />
              discovered <br class="block md:hidden" />
              the Azores <br class="block md:hidden" />
              by bike.
            </h2>

            <p class="my-4 hidden max-w-[630px] leading-[20px] md:block">
              In the spring of 2023 we packed our passion in life and shipped it
              over to São Miguel - 2 enduro bicycles, 2 surf boards and a bike
              trailer. Ending up spending 10 weeks biking and sleeping in a tent
              around 4 islands in the Azores.
              <br />
              That was enough, we knew by then that we wanted to move here
              permanently and become part of the community.
            </p>
          </div>
        </div>

        <div class="my-8 block px-4 md:hidden">
          <p class="mx-auto leading-[20px] sm:max-w-[560px]">
            In the spring of 2023 we packed our passion in life and shipped it
            over to São Miguel - 2 enduro bicycles, 2 surf boards and a bike
            trailer. Ending up spending 10 weeks biking and sleeping in a tent
            around 4 islands in the Azores.
            <br />
            That was enough, we knew by then that we wanted to move here
            permanently and become part of the community.
          </p>
        </div>

        <div class="flex gap-4 wider:mt-[-2vw] lg:mt-[-4vw] xl:mt-[-8vw]">
          <div class="flex w-[40%] flex-col content-center justify-center pl-4 md:w-1/2">
            <h3 class="mx-auto max-w-[115px] text-[1.2rem] leading-[110%] sm:max-w-[208px] sm:text-headingL  md:max-w-[557px]">
              Discovering the islands by bike gave us so much. <br /> You really
              feel the energy and adrenaline on these islands. Long uphills and
              magical fast descents ending up by a sea of breaking waves.
            </h3>

            <p class="mx-auto my-4 hidden max-w-[557px] md:block">
              Now living here, we would like to share this experience with
              others, both locals and tourists looking beyond comfort but more
              for a real life experience. Forget the luxury and the five stars
              we want to offer a more natural and adventurous way of seeing the
              island. The best way of doing this is by mountain bike and São
              Miguel has such a big variety of bike trails from beginner to
              competitive downhill trails all in a mixture of different natural
              environments.
            </p>

            <h3 class="mx-auto hidden max-w-[557px] text-headingL md:block">
              Forget the luxury and the five stars, we want to offer a more
              natural and adventurous way of seeing the island.
            </h3>
          </div>

          <div class="w-[60%] md:w-1/2">
            <img
              src={image2}
              class="h-full w-full object-cover md:h-[600px] xl:h-[650px] 2xl:h-[700px]"
            ></img>
            <Button
              url="/our-adventures/bikepacking-in-the-azores/1"
              customClass="hidden md:block mx-auto"
            >
              Check our article here
            </Button>
          </div>
        </div>

        <div class="my-8 block px-4 md:hidden">
          <p class="mx-auto leading-[20px] sm:max-w-[560px]">
            Now living here, we would like to share this experience with others,
            both locals and tourists looking beyond comfort but more for a real
            life experience. Forget the luxury and the five stars we want to
            offer a more natural and adventurous way of seeing the island. The
            best way of doing this is by mountain bike and São Miguel has such a
            big variety of bike trails from beginner to competitive downhill
            trails all in a mixture of different natural environments.
          </p>
        </div>

        <div class="my-8 block px-4 text-center md:hidden">
          <h3 class="mx-auto max-w-[560px] text-[1.2rem] leading-[110%] sm:text-headingL">
            Forget the luxury and the five stars, we want to offer a more
            natural and adventurous way of seeing the island.
          </h3>
          <Button
            url="/our-adventures/bikepacking-in-the-azores/1"
            customClass="mx-auto"
          >
            Check our article here
          </Button>
        </div>

        <div class="mx-auto mt-8 px-4 text-center sm:mt-16 md:mb-20 md:mt-28">
          <h3 class="font-futuraExtraBold text-[1.4rem] leading-[100%] sm:text-headingXL">
            WHOʼS BEHIND
            <br class="block sm:hidden" /> WHEELS ON FIRE ?
          </h3>
        </div>

        <hr class="my-10 block md:hidden" />

        <div class="flex flex-col-reverse text-center md:flex-row">
          <div class="border-r border-r-red px-12 text-center md:w-1/2 md:px-16">
            <div class="mx-auto max-w-[482px] [&>*:not(:first-child)]:my-4 md:mb-[80px] mb-[40px]">
              <h3 class="font-futuraExtraBold text-headingL font-bold sm:font-futura">
                Jallas
              </h3>
              <p>
                Hello there! I’m Jallas born in south Sweden. Since south Sweden
                is kinda flat I started out with cross country biking but lycra
                and pushing on the uphills was not really me. The free ride
                mountain bike was more my style.
              </p>
              <p>
                In 2012 I traveled to Portugal for the first time to pursue my
                surf dream and from then on I just knew that this was where in
                the world I wanted to be. Biking has also always been a big part
                of my life wherever I was, from working as a bike messenger,
                bikepacking or riding downhill, I always enjoy riding my bike.
                Not only biking but also creating, building and maintaining the
                bike trails is something I really like spending my time on.
              </p>
              <p>
                After discovering the Azores by bike. Me and my partner Juliana
                really enjoyed the island life. We felt that this is were we
                want to be and create -{' '}
                <span class="font-futuraExtraBold">WHEELS ON FIRE.</span>
              </p>
            </div>
          </div>

          <hr class="my-10 block md:hidden" />

          <div class="px-12 text-center md:w-1/2 md:px-16">
            <div class="mx-auto max-w-[482px] [&>*:not(:first-child)]:my-4 md:mb-[80px] mb-[40px]">
              <h3 class="font-futuraExtraBold text-headingL font-bold sm:font-futura">
                Juliana
              </h3>
              <p>Hey ! I’m Juliana from Porto, Portugal. </p>
              <p>
                I’ll never forget the first time I learnt how to bike. Since
                then biking has always felt more than just the act of riding a
                bike, - represents freedom and creativity and it’s the best way
                to get around! And it’s funny how the surroundings and the kind
                of bike I’m riding can make every experience very unique. Riding
                in the city with my singlespeed, everything is fast and I love
                it! It’s like a game: the other cyclists, the people, the
                traffic.
              </p>
              <p>
                When mountainbiking is different, being out in the wild riding
                the nature’s “cool obstacles” like the terrain, if it’s rocky,
                rooty, steep, uphill or in flowy trails and jumps. Every bike
                day is different and teaches so much more than just skills, but
                truly being in touch and in tune with everything and myself.
              </p>
              <p>
                <span class="font-futuraExtraBold">WHEELS ON FIRE</span> is
                born, out of the burning passion of riding,travelling and is
                inspired by the volcanic terrain of this amazing place that is
                the Azores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
