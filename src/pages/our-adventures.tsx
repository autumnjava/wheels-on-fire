import { A } from '@solidjs/router';
import { Button } from '../components/button';

// images
import desertTrainFoto from '../components/data/images/desert-train-photo.png';
import bikepackingInTheAzoresFoto from '../components/data/images/ju_faial.jpeg';
import { PlayIcon } from '../components/icons-library/play';

export const OurAdventures = () => {
  return (
    <>
      <hr />

      <div class="container mx-auto mt-6 px-4">
        <div class="flex items-start">
          <h1 class="font-extrabold text-red-600 text-headingXXXL !leading-[78%] text-red lg:text-[11rem] xl:text-[12rem]">
            OUR
          </h1>
          <h2 class="ml-4 self-center border border-red p-1 text-headingL normal-case sm:ml-16 sm:p-2 md:text-headingXL">
            Film & photos from our travels
          </h2>
        </div>
        <h1 class="font-extrabold text-red-600 text-headingXXXL !leading-[78%] text-red lg:text-[11rem] xl:text-[12rem]">
          ADVENTURES
        </h1>
      </div>

      <hr class="mt-8" />

      <A href="#">
        <div class="container mx-auto my-10 flex flex-col gap-8 px-4 sm:flex-row">
          <div
            class="relative h-[300px] w-full bg-cover sm:h-[328px] sm:w-[525px]"
            style={{ 'background-image': `url(${desertTrainFoto})` }}
          >
            <PlayIcon
              class="absolute left-0 right-0 top-1/2 mx-auto -translate-y-1/2"
              height="50"
              width="50"
            />
          </div>

          <div class="sm:w-[30%] [&>*:not(:first-child)]:my-4">
            <h3 class="font-futura text-[27px] font-bold uppercase">
              The desert train
            </h3>
            <p>
              In the winter of 2020, we went all the way from Switzerland to
              Mauritania to ride a freight train that crosses the desert.
            </p>
            <hr class="mx-auto my-8 w-[5%] sm:mx-0" />
            <h4 class="!normal-case">Film & Photos by us.</h4>
          </div>
        </div>
      </A>

      <A href="/our-adventures/bikepacking-in-the-azores">
        <div class="container mx-auto my-10 flex flex-col gap-8 px-4 sm:flex-row">
          <div
            class="relative h-[300px] w-full bg-cover sm:h-[328px] sm:w-[525px]"
            style={{ 'background-image': `url(${bikepackingInTheAzoresFoto})` }}
          >
            <PlayIcon
              class="absolute left-0 right-0 top-1/2 mx-auto -translate-y-1/2"
              height="50"
              width="50"
            />
          </div>

          <div class="sm:w-[30%] [&>*:not(:first-child)]:my-4">
            <h3 class="font-futura text-[27px] font-bold uppercase">
              Bikepacking in the Azores
            </h3>
            <p>
              In the spring of 2023 we packed our passion in life and shipped it
              over to São Miguel - 2 enduro bicycles, 2 surf boards and a bike
              trailer. We did 4 islands in 2 months and a half.
            </p>
            <hr class="mx-auto my-8 w-[5%] sm:mx-0" />
            <h4 class="!normal-case">Film & Photos by us.</h4>
          </div>
        </div>
      </A>

      <div>
        <Button url="#" customClass="mt-2 block mx-auto">
          More
        </Button>
      </div>
    </>
  );
};
