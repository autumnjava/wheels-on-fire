import { Button } from '../components/button';

export const InAction = () => {
  return (
    <>
      <hr />

      <div class="container mx-auto mt-6 px-4 text-center">
        <h1 class="text-outline relative block pl-4 text-headingXXXL tracking-wider">
          In action
        </h1>

        <h2 class="mx-auto max-w-[704px] text-headingL normal-case">
          Videos, Articles and more - We want to share how S. Miguel looks like
          on the saddle and trails, what we’re up to and our true love for dirt
          & fun!
        </h2>
      </div>

      <hr class="my-8" />

      <div class="text-center font-futuraMedium">Content coming soon</div>

      <hr class="my-8" />

      <div class="container mx-auto mb-6 mt-16 text-center">
        <h2 class="font-futuraExtraBold text-headingXL font-bold uppercase">
          You ride. We pick you up. <br /> We got you all set up.
        </h2>
      </div>

      <div class="container mx-auto my-6 text-center">
        <h3 class="text-headingL uppercase">Get in touch</h3>
        <Button url="/get-in-touch" customClass="!mt-6">
          Contact us
        </Button>
      </div>
    </>
  );
};
