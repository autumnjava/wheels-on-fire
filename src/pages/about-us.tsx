import clsx from 'clsx';
import { Button } from '../components/button';
import image2 from '../components/data/2.jpg';
import image1 from '../components/data/j_jump.jpg';

export const AboutUs = () => {
  const forgetTheLuxury = (customClass: string) => (
    <h3 class={clsx('text-headingL', customClass)}>
      Forget the luxury and the five stars, we want to offer a more natural and
      adventurous way of seeing the island.
    </h3>
  );

  return (
    <>
      <hr />
      <div class="mt-8">
          <h1 class="text-outline relative z-10 text-headingXXXL uppercase tracking-wider">
            About us
          </h1>
        <div class="flex gap-12">
          <div class="w-1/2  sm:mt-[-58px]">
            <img src={image1} class="object-cover object-top"></img>

            <div class="px-8 py-4 [&>*]:my-4">
              <h3 class="max-w-[557px] text-headingL xl:max-w-full">
                Discovering the islands by bike gave us so much. <br /> You
                really feel the energy and adrenaline on these islands. Long
                uphills and magical fast descents ending up by a sea of breaking
                waves.
              </h3>

              <p class="max-w-[557px] xl:max-w-full">
                Now living here, we would like to share this experience with
                others, both locals and tourists looking beyond comfort but more
                for a real life experience. Forget the luxury and the five stars
                we want to offer a more natural and adventurous way of seeing
                the island. The best way of doing this is by mountain bike and
                São Miguel has such a big variety of bike trails from beginner
                to competitive downhill trails all in a mixture of different
                natural environments.
              </p>

              <h3 class={clsx('max-w-[557px] text-headingL xl:max-w-full')}>
                Forget the luxury and the five stars, we want to offer a more
                natural and adventurous way of seeing the island.
              </h3>
            </div>
          </div>
          <div class="w-1/2 sm:mt-[-58px]">
            <div class="py-10 [&>*]:my-4">
              <h2 class="text-headingL leading-[200%]">
                We discovered the Azores by bike.
              </h2>
              <p class="max-w-[620px]">
                In the spring of 2023 we packed our passion in life and shipped
                it over to São Miguel - 2 enduro bicycles, 2 surf boards and a
                bike trailer. Ending up spending 10 weeks biking and sleeping in
                a tent around 4 islands in the Azores. That was enough, we knew
                by then that we wanted to move here permanently and become part
                of the community.
              </p>
            </div>

            <img
              src={image2}
              class="w-full object-cover object-top md:h-[600px]"
            ></img>
            <Button url="/what-we-offer" customClass="block mx-auto">
              Check our article here
            </Button>
          </div>
        </div>

        <div class="mx-auto my-4 px-8 text-center">
          {forgetTheLuxury('block sm:hidden')}
        </div>

        <div class="mx-auto my-16 w-[60%] text-center">
          <h3 class="font-futuraExtraBold text-headingXL">
            WHOʼS BEHIND WHEELS ON FIRE ?
          </h3>
        </div>

        <div class="flex flex-col-reverse text-center md:flex-row">
          <div class="border-r border-r-red  px-4 text-center sm:px-8 md:w-1/2 md:px-16">
            <div class="mx-auto max-w-[482px] [&>*]:my-4">
              <h3 class="font-futura text-headingL font-bold">Jallas</h3>
              <p>
                Hello there! I’m Jallas born in the south Sweden. Since south
                Sweden is kinda flat I started out with cross country biking but
                lycra and pushing on the uphills was not really me. The free
                ride mountain bike was more my style.
              </p>
              <p>
                In 2012 I traveled to Portugal for the first time to pursue my
                surf dream and from then on I just knew that this was where in
                the world I wanted to be. Biking has also always been a big part
                of my life wherever I was, from working as a bike messenger,
                bikepacking or riding downhill and being out in the nature with
                my bike is what I enjoy the most. Not only biking but also
                creating, building and maintaining the bike trails is something
                I really like spending my time on.
              </p>
              <p>
                After discovering the Azores by bike. Me and my partner Juliana
                really enjoyed the island life. We felt that this is were we
                want to be and create -{' '}
                <span class="font-futuraExtraBold">WHEELS ON FIRE.</span>
              </p>
            </div>
          </div>

          <div class="px-4 text-center sm:px-8  md:w-1/2 md:px-16">
            <div class="mx-auto max-w-[482px] [&>*]:my-4">
              <h3 class="font-futura text-headingL font-bold">Juliana</h3>
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
                inspired by the vulcanic terrain of this amazing place that is
                the Azores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
