import { toHTML } from '@portabletext/to-html';
import urlBuilder from '@sanity/image-url';
import { createResource } from 'solid-js';
import { client } from '../utils/sanity/client';

export const SanityBlogPost = () => {
  const fetchContent = async () => {
    const CONTENT_QUERY = `*[_type == "post"] {
      ...,
      author->,
      mainImage {
        ...,
        asset->
      },
      categories[]->,
      body
    }`;
    return await client.fetch(CONTENT_QUERY);
  };

  const [content] = createResource(fetchContent);

  const myPortableTextComponents: any = {
    types: {
      image: ({ value }: any) => {
        const imageUrl = urlBuilder(client)
          .image(value)
          .width(800)
          .fit('max')
          .auto('format')
          .url();

        const altText = value.alt || ' ';

        return `<img src="${imageUrl}" alt="${altText}" class="block mx-auto" />`;
      },

      youtube: ({ value }: any) => {
        return `<iframe width="560" height="315" class="mx-auto" src=${value.url} title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
      },
    },
    // marks: {
    //   link: ({ children, value }: any) => {
    //     const href = value.href || '';
    //     if (uriLooksSafe(href)) {
    //       const rel = href.startsWith('/') ? undefined : 'noreferrer noopener';
    //       return `
    //         <a href=${href} rel=${rel}>
    //           ${children}
    //         </a>`;
    //     }
    //     return children;
    //   },
    // },
    onMissingComponent: (message: any, options: any) => {
      console.log(message, options, 'missing sanity component');
    },
  };

  return (
    <>
      {content()?.map((post: any) => (
        <div class="text-center">
          {post.mainImage && post.mainImage.asset && (
            <div
              class="relative mb-12 flex h-[300px] w-full flex-col bg-black bg-cover bg-center px-12 pt-8 sm:h-[500px] sm:pt-4 md:h-[868px] md:px-16 md:pt-28"
              style={{
                'background-image': `url(${post.mainImage.asset.url})`,
              }}
            ></div>
          )}

          <div class="mx-auto my-12 px-4 text-center [&>*]:my-4">
            <h1 class="font-futuraBold text-headingXL uppercase">
              {post.title}
            </h1>
            <h2 class="font-futuraMedium text-headingXL">
              Subtitle will be here (if exists)
            </h2>
          </div>

          <hr />
          <div
            class="post-body container mx-auto my-12 max-w-[1040px] px-4 sm:my-12 [&>*]:my-4"
            innerHTML={toHTML(post.body, {
              components: myPortableTextComponents,
            })}
          />

          <div class="post-author my-">By: {post.author.name}</div>
          <div class="post-categories">
            Categories:{' '}
            {post.categories.map((category: any) => category.title).join(', ')}
          </div>
        </div>
      ))}
    </>
  );
};
