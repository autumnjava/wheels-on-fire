import { PlayIcon } from '../../components/icons-library/play';

// images
import ju_faial from '../../components/data/images/ju_faial.jpeg';
import mosteiros_bike from '../../components/data/images/10.mosteiros_bike.jpg';

type HeroProps = {};

export const BikepackingInTheAzores = (props: HeroProps) => {
  return (
    <>
      <div
        class="relative mb-8 flex h-[500px] w-full flex-col bg-black bg-cover bg-center px-12 pt-8 sm:pt-4 md:h-[868px] md:px-16 md:pt-28"
        style={{ 'background-image': `url(${ju_faial})` }}
      >
        <PlayIcon
          class="absolute left-0 right-0 top-[45%] mx-auto -translate-y-1/2"
          height="130"
          width="130"
        />
      </div>

      <div class="mx-auto max-w-[620px] p-4 pt-12 text-center md:pt-8 [&>*]:my-2">
        <h1 class="font-futura text-headingXL font-bold uppercase">
          Bikepacking
          <br />
          in the Azores
        </h1>
        <h2 class="font-futuraMedium text-headingL">
          Azores: A never ending uphill
        </h2>
      </div>

      <hr />

      <div class="container mx-auto mt-6 max-w-[732px] px-4 [&>*]:my-6">
        <h3 class="text-center font-futuraMedium text-headingL ">
          For some years me and my partner been constantly on the move. Living
          and traveling in a van around Europe and north Africa. We both share
          the interest of exploring new places and combine this with surfing and
          enduro biking. All this was exactly what we wanted to do, bikepack
          around the islands of Azores and hopefully surf some waves along the
          way.
        </h3>

        <p>
          We wanted to be in São Miguel, the biggest island in the beginning of
          march. The first thing we had to do was to find a boat company in
          Portugal that could transfer our bikes, boards and our bike wagon.
          After finding a company and delivered our equipment it would take two
          weeks to arrive! Leaving us without bikes and boards for two weeks
          before catching a flight. We flew into Ponta Delgada the main city of
          São Miguel.
          <br />
          We had an address a half an hour walk away to pick up our bikes. After
          wrong address and misunderstandings we finally arrived 10 min. before
          the terminal closed. Every thing was there and intact so we started to
          assemble the bikes. It was already dark when we started putting every
          thing together and by finishing close to midnight. The easy option
          that night was to spend the first night sleeping inside an container.
          <br />
          We did not arrived with a certain bike route or a time limit. The plan
          was to bike around the islands and ride bike trails and surf. More
          take it as it comes kinda trip.
          <br />
          It felt a bit heavy the first day not biking for two weeks and also
          the fact that we were riding enduro bikes with DH casing.
          <br />
          On top of that I was pushing the bike trailer with all our camping
          gear and wetsuits while Juliana had two surfboards strapped to her
          bike.
          <br />
          We started to pedal east out of Ponta Delgada following the sea threw
          the outskirts of town. By the looks from the locals we passed, I guess
          this was not an common sight too see bikepackers around the island
          with surfboards and a trailer. The surprised crowed cheered and gave
          us extra motivation.
          <br />
          We left the city behind and in front off us started the volcanic
          landscape too emerge.
          <br />
          It was an amazing day, the sun was shining coloring the Atlantic ocean
          in turquoise and from our left the volcanic crater Lago do Fogo was
          looking down at us.
          <br />
          The volcanic landscape makes the terrain and road very hilly with
          constant ups and downs. Looking on a map the distances doesn’t look
          far but when biking it takes a lot of time and energy cause of the ups
          and downs.
        </p>
      </div>

      <div
        class="my-8 h-[500px] w-full flex-col bg-black bg-cover bg-center md:h-[868px]"
        style={{ 'background-image': `url(${mosteiros_bike})` }}
      ></div>
    </>
  );
};
