import { A } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { PlayIcon } from '../../components/icons-library/play';
import { Modal } from '../../components/modal';
import { Slider } from '../../components/slider';

// images
import mosteiros_bike from '../../components/data/images/10.mosteiros_bike.jpg';
import jallas_forest from '../../components/data/images/11.jpg';
import bikes_camping from '../../components/data/images/3.camping.jpg';
import bikes_old_guy from '../../components/data/images/3.jpg';
import pickup_hitchhike from '../../components/data/images/4.pickup_hitchhike.jpg';
import coast_view from '../../components/data/images/5.jpg';
import mosteiros from '../../components/data/images/6.mosteiros.jpg';
import coast_2 from '../../components/data/images/7.jpg';
import ju_bike from '../../components/data/images/8.ju_bike_2.jpg';
import ju_faial from '../../components/data/images/ju_faial.jpeg';

export const BikepackingInTheAzoresPart1 = () => {
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
        class="relative mb-12 flex h-[300px] w-full flex-col bg-black bg-cover bg-center px-12 pt-8 sm:h-[500px] sm:pt-4 md:h-[868px] md:px-16 md:pt-28"
        style={{ 'background-image': `url(${ju_faial})` }}
      >
        <A
          href="https://www.youtube.com/watch?v=XqkRExdx120&ab_channel=WheelsonFire"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PlayIcon class="absolute left-0 right-0 top-1/2 mx-auto h-[50px] w-[50px] -translate-y-1/2 sm:h-[100px] sm:w-[100px]" />
        </A>
      </div>

      <div class="mx-auto my-12 px-4 text-center [&>*]:my-4">
        <h1 class="font-futuraBold text-headingXL uppercase">
          Bikepacking in the Azores
        </h1>
        <h2 class="font-futuraMedium text-headingXL">
          Azores: A never ending uphill
        </h2>
      </div>

      <hr />

      <div class="container mx-auto my-4 max-w-[1040px] px-4 sm:my-12">
        <h3 class="my-8 text-center font-futuraMedium text-headingL">
          For some years me and my partner been constantly on the move. Living
          and traveling in a van around Europe and north Africa. We both share
          the interest of exploring new places and combine this with surfing and
          enduro biking. All this was exactly what we wanted to do, bikepack
          around the islands of Azores and hopefully surf some waves along the
          way.
        </h3>

        <div class="gap-4 space-y-4 sm:columns-2">
          <p>
            We wanted to be in São Miguel, the biggest island in the beginning
            of march. The first thing we had to do was to find a boat company in
            Portugal that could transfer our bikes, boards and our bike wagon.
            After finding a company and delivered our equipment it would take
            two weeks to arrive! Leaving us without bikes and boards for two
            weeks before catching a flight. We flew into Ponta Delgada the main
            city of São Miguel.
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
            We did not arrived with a certain bike route or a time limit.
            <br /> The plan was to bike around the islands and ride bike trails
            and surf. More take it as it comes kinda trip.
          </p>
          <p>
            It felt a bit heavy the first day not biking for two weeks and also
            the fact that we were riding enduro bikes with DH casing. On top of
            that I was pushing the bike trailer with all our camping gear and
            wetsuits while Juliana had two surfboards strapped to her bike.
          </p>
          <p>
            We started to pedal east out of Ponta Delgada following the sea
            threw the outskirts of town. By the looks from the locals we passed,
            I guess this was not an common sight too see bikepackers around the
            island with surfboards and a trailer. The surprised crowed cheered
            and gave us extra motivation.
          </p>
          <p>
            We left the city behind and in front off us started the volcanic
            landscape too emerge.
          </p>
          <p>
            It was an amazing day, the sun was shining coloring the Atlantic
            ocean in turquoise and from our left the volcanic crater Lago do
            Fogo was looking down at us.
          </p>
          <p>
            The volcanic landscape makes the terrain and road very hilly with
            constant ups and downs. Looking on a map the distances doesn’t look
            far but when biking it takes a lot of time and energy cause of the
            ups and downs.
          </p>
        </div>
      </div>

      <div
        class="my-4 h-[200px] w-full cursor-pointer flex-col bg-black bg-cover bg-left sm:my-12 sm:h-[500px] md:h-[868px]"
        style={{ 'background-image': `url(${mosteiros_bike})` }}
        onClick={() => handleOnClickOpenModal(0)}
      ></div>

      <div class="container mx-auto my-4 max-w-[1040px] px-4 sm:my-12">
        <div class="gap-4 space-y-4 sm:columns-2">
          <h3 class="mb-8 font-futuraMedium text-headingL">
            It felt a bit heavy the first day not biking for two weeks and also
            the fact that we were riding enduro bikes with DH casing. On top of
            that I was pushing the bike trailer with all our camping gear and
            wet suites while Juliana had two surfboards strapped to her bike.
          </h3>
          <p>
            The first day turned into a peaceful evening and we found a
            beautiful camping spot over looking the sea.
          </p>
          <p>
            A local family passed by to catch the sun go down. They looked
            surprised when they saw our bikes,gear and the chosen camping spot.
            They told us there would be a big storm hapenning that night and
            offered us to camp in their garden down in the village. Too tired to
            pack up, we said we would be fine. Well, locals always know best.
          </p>
          <p>
            We woke up in the middle of the night with heavy wind that bent our
            tent too the max combined with powerful rain and thunders. We made
            it through the night and got the first taste of the Azorian weather,
            something we just had to get use to.
          </p>
          <p>
            We did not spent to many days on the south coast, the surf forecast
            looked just too good too miss on the north side of the island. The
            fastest way was too traverse over the volcano in the center of the
            island.
          </p>
          <p>
            A very long and steep descent with a altitude of 800m. Not too keen
            on this long descent we started to pedal up.
          </p>
          <p>
            It was hard and heavy and it felt like it would take a hole day to
            bike over.
          </p>
          <p>
            Suddenly, a pickup car with a cow in the back honked and stopped,
            telling us we are crazy to bike over with all our stuff. They gave
            us a ride on the back over to the other side. It felt really nice
            not having to bike up or more likely push up the bikes on this never
            ending mountain and, sooner then we thought we arrived to the north
            coast.
          </p>
          <p>
            It’s so amazing how the island changes, the nature is so diverse and
            the climate unpredictable.From dry rocky beaches to very humid deep
            forest with waterfalls and the north coast more rawer colder feeling
            with big waves hitting the coast. Also the accent changes from
            village to village, some of them are really complicated to
            understand even for Juliana that is Portuguese.
          </p>
        </div>
      </div>

      <div class="container mx-auto my-4 grid gap-4 sm:my-12 sm:grid-cols-2">
        <div
          class="h-[200px] w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat sm:h-[500px]"
          style={{ 'background-image': `url(${bikes_old_guy})` }}
          onClick={() => handleOnClickOpenModal(1)}
        ></div>
        <div
          class="h-[200px] w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat sm:h-[500px]"
          style={{ 'background-image': `url(${bikes_camping})` }}
          onClick={() => handleOnClickOpenModal(2)}
        ></div>
      </div>

      <div class="container mx-auto my-4 max-w-[1040px] px-4 sm:my-12">
        <div class="gap-4 space-y-4 sm:columns-2">
          <p>
            We arrived to a viewpoint and deep down that bay, was a lonely
            surfer having the waves all for himself. We got very existed and
            jumped up on the bike to start to find the way down, but how did he
            get down there? We could not find any roads or even a small trail
            going down there.
          </p>
          <p>
            So we followed a dirt road with plenty of holes and bumps that ended
            up next to a farm. We asked the local farmer how to get there and he
            told us we have to walk on small path then follow the rocky beach
            till the bay. He looked at our bikes and gear and said that we
            couldn’t leave them alone, they would get stolen. We couldn't take
            the risk of losing everything we had, so we let the lonely surfer
            enjoy himself and looked for another surf spot where we could see
            the bikes while surfing.
          </p>
          <p>
            We biked one hour following the coast to the west, ending up in
            Ribeira Grande where we got welcomed with amazing strong pealing
            waves.
          </p>
          <p>
            Even if we could see our locked bikes from the line up, it still
            didn't feel totally safe. There were a lot of junkies roaming around
            in the area and our gear was like a bone for the dogs.
          </p>
          <p>
            Against what we normally, do we stayed in a hostel for a few days so
            we could just enjoy surfing and not be paranoid that junkies would
            sneak up and steal our stuff.
          </p>
          <p>
            Fit for fight, we pedalled out of Ribeira Grande and set our
            direction towards the western tip of the Island to a village called
            Mosteiros.
          </p>
        </div>
      </div>

      <div class="container mx-auto my-4 grid gap-4 sm:my-12 sm:grid-cols-2">
        <div
          class="h-[200px] w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat sm:h-[500px]"
          style={{ 'background-image': `url(${pickup_hitchhike})` }}
          onClick={() => handleOnClickOpenModal(3)}
        ></div>
        <div
          class="h-[200px] w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat sm:h-[500px]"
          style={{ 'background-image': `url(${coast_view})` }}
          onClick={() => handleOnClickOpenModal(4)}
        ></div>
      </div>

      <div class="container mx-auto my-4 max-w-[1040px] px-4 sm:my-12">
        <div class="gap-4 space-y-4 sm:columns-2">
          <p>
            The village it famous for its characteristic rocky surf beach and
            its well organized downhill trails overlooking the sea. The easiest
            route was to follow the normal car road that curved it’s way through
            small towns and farm lands. The traffic got less hectic but still
            aggressive, don’t understand why it’s so hard to slow down and give
            space to bicycle riders in Portugal, it feels like you are in the
            middle of a racetrack!
          </p>
          <p>
            Still alive, we arrived to a viewpoint and saw the famous rocky
            pillars that frames the beach of Mosteiros. We ended up having a
            very good time in and around Mosteiros. Super friendly locals showed
            and shared waves and bike trails, letting us put our stuff behind
            the cafe counter while going mountain biking.
          </p>
          <p>
            Many times we set up a base camp but hide most of our belongings in
            the bush and just hoped to find them untouched when we came back.
            And it worked! We never had any problems during this trip.
          </p>
          <p>
            The local bikers from Mosteiros told us that we need to bike to the
            south east part of the island, where the most raw enduro trails
            were.
          </p>
          <p>
            That meant following the road to Ponta Delgada and again pass were
            we traversed over but this time just continue biking east.
          </p>
          <p>
            This time it felt easier, our legs and bodies were well used to be
            on the bikes by now. But it was still a heavy journey with a lot of
            rain and wind, so it felt like had to bike up double as much.
          </p>
        </div>

        <h3 class="my-8 text-center font-futuraMedium text-headingL">
          The easiest route was to follow the normal car road that curved it’s
          way threw small towns and farm lands. The traffic got less hectic but
          still aggressive, don’t understand why its so hard to slow down and
          give space to bicycle riders in the Azores, it feels like you are in
          the middle of a racetrack!
        </h3>
      </div>

      <div class="container mx-auto my-4 sm:my-12">
        <div class="mx-auto my-4 grid gap-4 sm:my-12 sm:grid-cols-2">
          <div
            class="h-[200px] w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat sm:h-[500px]"
            style={{ 'background-image': `url(${mosteiros})` }}
            onClick={() => handleOnClickOpenModal(5)}
          ></div>
          <div
            class="h-[200px] w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat sm:h-[500px]"
            style={{ 'background-image': `url(${jallas_forest})` }}
            onClick={() => handleOnClickOpenModal(6)}
          ></div>
        </div>
        <div class="mx-auto my-4 grid gap-4 sm:my-12 sm:grid-cols-2">
          <div
            class="h-[200px] w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat sm:h-[500px]"
            style={{ 'background-image': `url(${ju_bike})` }}
            onClick={() => handleOnClickOpenModal(7)}
          ></div>
          <div
            class="h-[200px] w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat sm:h-[500px]"
            style={{ 'background-image': `url(${coast_2})` }}
            onClick={() => handleOnClickOpenModal(8)}
          ></div>
        </div>
      </div>

      <button
        class="mx-auto mt-8 block bg-red px-[13px] py-[2px] text-white sm:px-[13px] sm:py-[5px]"
        onClick={() => handleOnClickOpenModal(8)}
      >
        + Photos
      </button>

      <div class="container mx-auto my-4 max-w-[1040px] px-4 sm:my-12">
        <div class="gap-4 space-y-4 sm:columns-2">
          <p>
            Close to Furnas, a town famous for boiling hot streams and a
            constant smell of sulfur, we found a nice bike trail called 16
            seconds. It was just days after a downhill race so the trail was in
            perfect conditions. We liked it so much that we ended up camping
            there for two days enjoying the trail and the nearby nature.
          </p>
          <p>
            The reason for biking towards the south east side was the little
            town called Faial da Terra where the Enduro bike fest been held many
            times.
          </p>
          <p>
            The uphills started to have a impact on us.It was always up, down,
            up, down, never really any flat parts. Far down the valley we could
            almost see the small village of Faial da terra, where most of the
            trails ended up. It was so far down by the sea and just the thought
            of having to bike all the way up again with our without gear was
            just too heavy. So we skipped that part and kept pedalling around
            the east and north part of the island.
          </p>
          <p>
            By this time we been travelling for more then a month on São Miguel
            and it felt it was time to move on to the central islands. Again, we
            had to pack our bikes and boards and ship it on a boat and fly to
            São Jorge. It’s a big miss that from São Miguel you can’t travel by
            boat. Since covid the boat company doesn’t operate anymore between
            the islands. No one really knows the reason why they don’t operate
            again,just that it has something to do with stupid politicians...
          </p>
          <p>
            We arrived to São Jorge airport and caught a lift from a friendly
            woman that dropped us off by the logistics warehouse. We told them
            we were traveling the islands by bike and if it would be possible to
            store our bike boxes there.
          </p>
          <p>
            First things first, we need to get food for our trip on the new
            island. The closest supermarket was down in the town Velas. We
            rolled down to town. Somehow I felt a bit like a cowboy but instead
            of a horse I rode my bike, ready for everything that would come my
            way.
          </p>
        </div>

        <h3 class="my-8 text-center font-futuraMedium text-headingL">
          We rolled down to town. Somehow I felt a bit like a cowboy but instead
          of a horse I rode my bike, ready for everything that would come may
          way. With enough food for a week packed and strapped the goal was to
          bike to the north part of the island. But it didn’t went exactly as
          planed. On the way up from Velas my derailleur snapt in two pieces,
          impossible to repair.
        </h3>

        <div class="gap-4 space-y-4 sm:columns-2">
          <p>
            With enough food for a week packed and strapped, the goal was to
            bike to the northern part of the island. But it didn’t go exactly as
            planned. On the way up from Velas my derailleur snapt into two
            pieces, impossible to repair, I needed to find a new one, also my
            brake lever was hanging on a loose thread after a crash.
          </p>
          <p class="break-inside-avoid">
            There was no bike shop in São Jorge only on the island Faial, two
            hours away by boat.
          </p>
          <p>
            I strapped my chain and kick pushed my bike down to the boat
            terminal.
          </p>
          <p>
            Even though my bike was broken to a point it was no longer rideable
            , it felt so good to finally be travelling by boats. That’s more
            what you expect when you go traveling on the islands in the middle
            of the Atlantic.
          </p>
        </div>
      </div>

      {/* TODO: refactor later */}
      <div class="container mx-auto my-4 flex flex-col justify-between gap-8 px-4 sm:my-12 sm:max-w-[600px] sm:flex-row sm:gap-16">
        <A
          class="text-center font-futuraMedium text-headingM leading-[26px] text-red"
          href="/our-adventures/bikepacking-in-the-azores/1"
        >
          <span class="dot border border-red !bg-red" />
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
              style={{ 'background-image': `url(${mosteiros_bike})` }}
            ></div>
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[700px]"
              style={{ 'background-image': `url(${bikes_old_guy})` }}
            ></div>
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[700px]"
              style={{ 'background-image': `url(${bikes_camping})` }}
            ></div>
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[700px]"
              style={{ 'background-image': `url(${pickup_hitchhike})` }}
            ></div>
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[700px]"
              style={{ 'background-image': `url(${coast_view})` }}
            ></div>
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[700px]"
              style={{ 'background-image': `url(${mosteiros})` }}
            ></div>
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[700px]"
              style={{ 'background-image': `url(${jallas_forest})` }}
            ></div>
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[700px]"
              style={{ 'background-image': `url(${ju_bike})` }}
            ></div>
            <div
              class="mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[700px]"
              style={{ 'background-image': `url(${coast_2})` }}
            ></div>
          </Slider>
        </Modal>
      </div>
    </>
  );
};
