import { Button } from '../components/button';
import image2 from '../components/utils/DSC01567.jpg';
import image1 from '../components/utils/Screenshot 2024-02-19 at 20.43.12.png';

export const AboutUs = () => {
  const paragraph1 = (customClass: string) => (
    <p class={customClass}>
      In the spring of 2023 we packed our passion in life and shipped it over to
      São Miguel - 2 enduro bicycles, 2 surf boards and a bike trailer. Ending
      up spending 10 weeks biking and sleeping in a tent around 4 islands in the
      Azores. That was enough, we knew by then that we wanted to move here
      permanently and become part of the community.
    </p>
  );

  return (
    <>
      <hr class="border-red" />

      <div class="mt-8">
        <h1 class="black-text-outline relative block pl-4 text-headingXXXL uppercase tracking-wider text-red">
          About us
        </h1>
        <div class="mt-[-50px] flex">
          <div class="w-1/2 pr-8">
            <img
              src={image1}
              class="h-96 w-full object-cover object-top md:h-[600px]"
            ></img>
          </div>
          <div class="flex w-1/2 flex-col content-center justify-center pr-8">
            <h2 class="text-headingXXL">We discovered the Azores by bike.</h2>
            {paragraph1('hidden md:block')}
          </div>
        </div>

        <div>{paragraph1('block md:hidden px-4 my-8')}</div>

        <div class="flex md:mt-[-50px]">
          <div class="flex w-1/2 flex-col content-center justify-center pl-4 md:pl-8">
            <h3 class="text-headingL">
              Discovering the islands by bike gave us so much.You really feel
              the energy and adrenaline on these islands. Long uphills and
              magical fast descents ending up by a sea of breaking waves.
            </h3>
          </div>
          <div class="w-1/2 pl-8">
            <img
              src={image2}
              class="h-96 w-full object-cover object-top md:h-[500px]"
            ></img>
          </div>
        </div>

        <div class="my-8 flex flex-col-reverse pr-8  md:flex-row">
          <div class="content-center pl-4 md:w-1/2 md:pl-8">
            <h3 class="text-headingL">
              Forget the luxury and the five stars, we want to offer a more
              natural and adventurous way of seeing the island.
            </h3>
          </div>
          <div class="py-4 pl-4 md:w-1/2 md:pl-8">
            <p>
              Now living here, we would like to share this experience with
              others, both locals and tourists looking beyond comfort but more
              for a real life experience. Forget the luxury and the five stars
              we want to offer a more natural and adventurous way of seeing the
              island. The best way of doing this is by mountain bike and São
              Miguel has such a big variety of bike trails from beginner to
              competitive downhill trails all in a mixture of different natural
              environments.
            </p>
          </div>
        </div>

        <hr class="border-red" />

        <div class="mx-auto my-8 w-[60%] text-center">
          <h3 class="font-futuraExtraBold text-headingXXL">
            WHOʼS BEHIND WHEELS ON FIRE ?
          </h3>
        </div>

        <div class="flex flex-col-reverse text-center md:flex-row">
          <div class="border-r border-r-red px-4 [&>*]:my-2">
            <h3 class="text-5xl">Jallas</h3>
            <p>Hello there! </p>
            <p>
              I’m Jallas born in the south Sweden. Since south Sweden is kinda
              flat I started out with cross country biking but lycra and pushing
              on the uphills was not really me. The free ride mountain bike was
              more my style.
            </p>
            <p>
              In 2012 I traveled to Portugal for the first time to pursue my
              surf dream and from then on I just knew that this was where in the
              world I wanted to be. Biking has also always been a big part of my
              life wherever I was, from working as a bike messenger, bikepacking
              or riding downhill and being out in the nature with my bike is
              what I enjoy the most. Not only biking but also creating, building
              and maintaining the bike trails is something I really like
              spending my time on.
            </p>
            <p>
              After discovering the Azores by bike. Me and my partner Juliana
              really enjoyed the island life. We felt that this is were we want
              to be and create -{' '}
              <span class="font-futuraExtraBold">WHEELS ON FIRE.</span>
            </p>
          </div>

          <div class="px-4 [&>*]:my-2">
            <h3 class="text-5xl">Juliana</h3>
            <p>Hey ! I’m Juliana from Porto, Portugal. </p>
            <p>
              I’ll never forget the first time I learnt how to bike. Since then
              biking has always felt more than just the act of riding a bike, -
              represents freedom and creativity and it’s the best way to get
              around! And it’s funny how the surroundings and the kind of bike
              I’m riding can make every experience very unique. Riding in the
              city with my singlespeed, everything is fast and I love it! It’s
              like a game: the other cyclists, the people, the traffic.
            </p>
            <p>
              When mountainbiking is different, being out in the wild riding the
              nature’s “cool obstacles” like the terrain, if it’s rocky, rooty,
              steep, uphill or in flowy trails and jumps. Every bike day is
              different and teaches so much more than just skills, but truly
              being in touch and in tune with everything and myself.
            </p>
            <p>
              <span class="font-futuraExtraBold">WHEELS ON FIRE</span> is born,
              out of the burning passion of riding,travelling and is inspired by
              the vulcanic terrain of this amazing place that is the Azores.
            </p>
          </div>
        </div>

        <div>
          <Button url="/what-we-offer" customClass="block mx-auto">
            Check our article here
          </Button>
        </div>
      </div>
    </>
  );
};
