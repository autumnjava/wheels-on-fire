import { Button } from '../components/button';

export const InAction = () => {
  const sectionStyle = 'container mx-auto my-12 px-4 text-center';
  const h2Style = 'font-futuraExtraBold text-headingXL font-bold uppercase';

  return (
    <>
      <div class="container mx-auto px-4 text-center">
        <div class="relative inline-block">
          <h1 class="text-front text-headingXXXL tracking-wider text-black">
            In action
          </h1>
          <h1 class="black-text-outline text-back text-headingXXXL tracking-wider text-red">
            In action
          </h1>
        </div>

        <h2 class="text-headingXL" style={'text-transform: none !important'}>
          Videos, Articles and more - We want to share how S. Miguel looks like
          on the saddle and trails, what we’re up to and our true love for dirt
          & fun!
        </h2>
      </div>

      <hr class="my-8 border-red" />

      <div class="text-center">blogposts and whatnot</div>

      <hr class="my-8 border-red" />

      <div class={sectionStyle}>
        <h2 class={h2Style}>You ride. We pick you up.</h2>
        <h2 class={h2Style}>We got you all set up.</h2>
      </div>

      <div class={sectionStyle}>
        <h3 class="text-headingL uppercase">Get in touch</h3>
        <Button url="/get-in-touch" customClass="mt-2">
          Contact us
        </Button>
      </div>
    </>
  );
};
