import { Button } from '../components/button';

export const InAction = () => {
  const sectionStyle = 'container mx-auto my-12 px-4 text-center';
  const h2Style = 'font-futuraExtraBold text-headingXL font-bold uppercase';

  return (
    <>
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-outline relative block pl-4 text-headingXXXL tracking-wider">
          In action
        </h1>

        <h2 class="mx-auto max-w-[704px] text-headingL normal-case">
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
