import { A } from '@solidjs/router';
import { createResource } from 'solid-js';
import { Button } from '../components/button';
import { client } from '../utils/sanity/client';

export const InAction = () => {
  const fetchContent = async () => {
    const CONTENT_QUERY = `*[_type == "video"] {
      ...,
      videoImage {
        ...,
        asset->
      },
    }`;
    return await client.fetch(CONTENT_QUERY);
  };

  const [content] = createResource(fetchContent);

  return (
    <>
      <hr />

      <div class="container mx-auto mt-6 px-4 text-center">
        <h1 class="text-outline relative block text-headingXXXL tracking-wider">
          In action!
        </h1>

        <h2 class="mx-auto max-w-[704px] text-headingWhatWeOfferSub normal-case leading-[28px]">
          Videos, Articles and more - We want to share how S. Miguel looks like
          on the saddle and trails, what we’re up to and our true love for dirt
          & fun!
        </h2>
      </div>

      <hr class="my-8" />

      <div class="container mx-auto my-8 grid max-w-[1200px] gap-8 px-4 sm:grid-cols-3">
        {content()?.map((post: any) => (
          <A href={post.videoLink} target="_blank" rel="noopener noreferrer">
            <div
              class="h-[180px] w-full bg-black bg-cover bg-right sm:h-[250px]"
              style={{
                'background-image': `url(${post.videoImage.asset.url})`,
              }}
            ></div>

            <div class="my-4">
              <h3 class="font-futura text-[20px] font-thick uppercase leading-[100%] sm:text-[27px]">
                {post.title}
              </h3>
            </div>
          </A>
        ))}
      </div>

      <hr class="my-8" />

      <div class="container mx-auto mb-6 mt-6 text-center sm:mt-16">
        <h2 class="font-futuraExtraBold text-headingXL uppercase">
          You ride. <br class="sm:hidden" /> We pick you up. <br /> We got you
          all set up.
        </h2>
      </div>

      <div class="container mx-auto my-6 text-center">
        <h3 class="text-headingL uppercase">Get in touch</h3>
        <Button url="/get-in-touch" customClass="sm:mt-[20px] !mt-4">
          Contact us
        </Button>
      </div>
    </>
  );
};
