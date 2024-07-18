import { Button } from '../components/button';

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

      <hr class="my-8" />

      <div class="container mx-auto flex flex-col px-4 sm:flex-row">
        <div class="h-[300px] w-full bg-black sm:h-[328px] sm:w-[525px]"></div>

        <div class="ml-8 text-center sm:w-[30%] sm:text-left [&>*]:my-2">
          <h3 class="font-futura text-[27px] font-bold leading-[85px]">
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

      <div>
        <Button url="#" customClass="mt-2 block mx-auto">
          More
        </Button>
      </div>
    </>
  );
};
