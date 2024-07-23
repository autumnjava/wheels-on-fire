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
      <div class="container mx-auto px-4 text-center">
        <div class="relative inline-block">
          <h1 class="text-front text-headingXXXL tracking-wider text-black">
            Blog
          </h1>
          <h1 class="black-text-outline text-back text-headingXXXL tracking-wider text-red">
            Blog
          </h1>
        </div>
      </div>

      <hr />

      <div class="text-center">
        {content()?.map((post: any) => (
          <div class="post">
            <h2>{post.title}</h2>
            {post.mainImage && post.mainImage.asset && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                class="post-image mx-auto"
                width="300px"
                height="300px"
              />
            )}

            <div
              class="post-body"
              innerHTML={toHTML(post.body, {
                components: myPortableTextComponents,
              })}
            />

            <div class="post-author">By: {post.author.name}</div>
            <div class="post-categories">
              Categories:{' '}
              {post.categories
                .map((category: any) => category.title)
                .join(', ')}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
