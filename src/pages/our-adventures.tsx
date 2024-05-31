import { Button } from '../components/button';

export const OurAdventures = () => {
  return (
    <>
      {/* <div class="container relative mx-auto px-4">
        <h1 class="text-headingXXXL !leading-[78%] tracking-wider text-red">
          Our
          <br />
          advetures
        </h1>

        <div class="absolute right-[50%] top-[15%] border border-red p-4">
          <h2 class="font-futuraMedium text-headingM !normal-case">
            Film & photos from our travels
          </h2>
        </div>
      </div> */}

      <div class="container px-4">
        <div class="flex items-start">
          <h1 class="font-extrabold text-red-600 text-headingXXXL !leading-[78%] text-red">
            OUR
          </h1>
          <h2 class="ml-4 sm:ml-16 self-center text-headingM border border-red sm:p-2 p-1 !normal-case">
            Film & photos from our travels
          </h2>
        </div>
        <h1 class="font-extrabold text-red-600 text-headingXXXL !leading-[78%] text-red">
          ADVENTURES
        </h1>
      </div>

      <hr class="my-8 border-red" />

      <div class="container px-4 flex sm:flex-row flex-col">
        <div class="h-[300px] w-full sm:w-[450px] bg-black md:w-[600px] md:h-[400px]"></div>

        <div class="ml-8 sm:w-[30%] text-center sm:text-left [&>*]:my-2 ">
          <h3>The desert train</h3>
          <p>
            In the winter of 2020, we went all the way from Switzerland to
            Mauritania to ride a freight train that crosses the desert.
          </p>
          <hr class="my-8 h-px w-[33%] border-0 bg-red mx-auto sm:mx-0" />
          <h4 class="!normal-case">Film & Photos by us.</h4>
        </div>
      </div>

      <div>
        <Button url="/get-in-touch" customClass="mt-2 block mx-auto">
          More
        </Button>
      </div>
    </>
  );
};
