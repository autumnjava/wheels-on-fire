import { A } from '@solidjs/router';
import { Button } from '../../components/button';

// images
import view from '../../components/data/images/13.jpg';
import bike1 from '../../components/data/images/14.jpg';
import bike2 from '../../components/data/images/15.faial_banshee.jpg';
import biking from '../../components/data/images/16.jpg';

export const BikepackingInTheAzoresPart2 = () => {
  return (
    <>
      <div class="container mx-auto my-12 flex flex-col gap-4 sm:flex-row">
        <div
          class="h-[500px] w-full bg-cover bg-center bg-no-repeat"
          style={{ 'background-image': `url(${biking})` }}
        ></div>
        <div
          class="h-[500px] w-full bg-cover bg-center bg-no-repeat"
          style={{ 'background-image': `url(${view})` }}
        ></div>
      </div>

      <div class="container mx-auto my-12 max-w-[1040px] px-4">
        <div class="gap-4 space-y-4 sm:columns-2">
          <h3 class="!mt-0 mb-4 block !break-inside-avoid font-futuraMedium text-headingL sm:hidden">
            We reached the peak of the route and for a moment the fog
            disappeared and a beautiful view of the sea and the 10 volcanoes
            appeared in front of us. Sweaty, tired and wet in one second it all
            makes sense why you go through what you do.
          </h3>
          <p>
            The local bike shop managed to patch up my bike with a new
            derailleur but they did not have a replacement for the brake lever,
            they just had some scrap parts and made my front brake kinda work
            again till a new lever would arrive.
          </p>
          <p>
            With a working bike again we had a look at the map and made a bike
            route. There was a small gravel road going up and and around the
            biggest crater Caldeira, it’s huge and really impressive.
          </p>
          <p>
            The lonely gravel road was nice to follow. Not too steep, more like
            slowly working it’s way up and no cars except for one tractor.It’s
            so peaceful biking like this, makes the bike journey so much more
            joyful. It was mid April and we thought the weather now would offer
            more sunny days. We were wrong. Faial’s weather was rough and we
            were constantly fighting strong winds and on and off rain.
          </p>
          <p class="break-inside-avoid">
            I really admire my girlfriend Juliana,she kept pushing on her heavy
            bike with the boards working like a sail that tossed her off the
            bike several times.Luckily nothing happened to her or the
            surfboards.
          </p>
          <p class="break-inside-avoid break-after-column">
            We reached the peak of the route and for a moment the fog
            disappeared and a beautiful view of the sea and the 10 volcanoes
            appeared in front of us.
          </p>
          <h3 class="!mt-0 mb-4 hidden !break-inside-avoid font-futuraMedium text-headingL sm:block">
            We reached the peak of the route and for a moment the fog
            disappeared and a beautiful view of the sea and the 10 volcanoes
            appeared in front of us. Sweaty, tired and wet in one second it all
            makes sense why you go through what you do.
          </h3>
          <p>
            Sweaty, tired and wet,in one second it all makes sense why you go
            through what you do.
          </p>
          <p>
            The wind slowed down and changed direction and we made it as a goal
            to make it down to the surf beach Fajã Praia Norte.
          </p>
          <p>
            The way down to the beach was long and fast and we just couldn't
            stop smiling. Most part of the world when you arrive to the main
            surf beach there will likely be some surfers out. Here not.
          </p>
          <p>
            Far out measured from the beach was a head high wave breaking. I was
            a bit nervous paddling out alone to a new wave but I had to do it,
            otherwise would have been hard to go to sleep. This night I didn’t
            had any problems going to sleep.
          </p>
          <p>
            We woke up the following day, the wind had increased and the waves
            were not as good. So we took down our tent and packed our stuff.
          </p>
        </div>
      </div>

      <div class="container mx-auto my-12 flex flex-col gap-4 sm:flex-row">
        <div
          class="h-[500px] w-full bg-cover bg-center bg-no-repeat"
          style={{ 'background-image': `url(${bike1})` }}
        ></div>
        <div
          class="h-[500px] w-full bg-cover bg-center bg-no-repeat"
          style={{ 'background-image': `url(${bike2})` }}
        ></div>
      </div>

      <div class="container mx-auto my-12 max-w-[1040px] px-4">
        <div class="gap-4 space-y-4 sm:columns-2">
          <p>
            The west part of the island had a lot to offer and see. First we had
            to bike up again to the main road and that was a good 270m climb.
          </p>
          <p>
            We had an address a half an hour walk away to pick up our bikes.
            After wrong address and misunderstandings we finally arrived 10 min.
            before the terminal closed. Every thing was there and intact so we
            started to assemble the bikes. It was already dark when we started
            putting every thing together and by finishing close to midnight. The
            easy option that night was to spend the first night sleeping inside
            an container.
          </p>
          <p>
            In the 1957 there was a volcanic eruption that made the island
            bigger. The lava cooled down and a peninsula was created. The old
            houses got destroyed but the old lighthouse remained and turned into
            a museum about the eruption.
          </p>
          <p class="break-inside-avoid">
            The good thing about Faial was that was a much smaller island then
            São Miguel. If you want you can bike around the island in two days.
          </p>
          <p class="break-after-column">
            I was still waiting for a new brake lever so there was no point in
            rushing. On the north east part of the island there was a bike park
            that the locals had build. For us that was a great place to spend
            some time while waiting.
          </p>
          <p>
            We set up a base camp and started to get familiar with the bike
            trails. The locals had put in a lot of effort in the trails with
            cool gaps and jumps all build by wood and all marked up very well.
          </p>

          <p>
            At this point we had spent two weeks on this island and still no
            spare part. It takes long time to get stuff over to the islands so I
            gave up. I could brake, even managed to ride some trails, bit
            sketchy but it worked. We decided to bike back to the main city
            Horta and bought a boat ticket back to São Jorge.
          </p>
        </div>
      </div>

      <Button url="#" customClass="block mx-auto !my-8">
        + Photos
      </Button>

      <div class="container mx-auto my-12 flex flex-col justify-between gap-8 px-4 sm:max-w-[600px] sm:flex-row sm:gap-16">
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
          <span class="dot border border-red !bg-red" />
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
          <span class="dot border border-red" />
          <h3>Pico</h3>
        </A>
      </div>
    </>
  );
};
