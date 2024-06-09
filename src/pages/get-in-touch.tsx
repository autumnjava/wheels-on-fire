import emailjs from '@emailjs/browser';
import { A } from '@solidjs/router';
import { Show, createSignal, onMount } from 'solid-js';
import { InstagramIcon } from '../components/icons-library/social-media/instagram';
import { YoutubeIcon } from '../components/icons-library/social-media/youtube';
import { ExpandableContainer } from '../components/expandable-container';

export const GetInTouch = () => {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [comment, setComment] = createSignal('');
  const [isSucess, setIsSuccess] = createSignal(false);
  const [errorMessage, setErrorMessage] = createSignal('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const templateParams = {
      from_name: name(),
      from_email: email(),
      message: comment(),
    };

    try {
      const response = await emailjs.send(
        'default_service',
        'template_al7up4a',
        templateParams
      );
      console.log('SUCCESS!', response.status, response.text);
      setIsSuccess(true);
    } catch (error) {
      console.log('FAILED...', error);
      setErrorMessage(error as any as string);
    }
  };

  onMount(() => {
    console.log('initing emailjs');

    emailjs.init({
      publicKey: 'TdNsRmJeYcW-hy5Za',
    });
  });

  return (
    <>
      <div class="container mx-auto px-4 text-center">
        <h1 class="black-text-outline text-headingXXXL tracking-wider text-red">
          Get in touch
        </h1>

        <h2 class="text-headingL">
          To make the most of your trip, for bookings and other questions,
          please send us an email:{' '}
          <span class="text-red">info@wheelsonfireazores.com</span> or fill the{' '}
          <span class="text-red">contact form</span> below.
        </h2>
      </div>

      <div class="my-8 w-full border-t border-red text-center">
        <div class="mx-auto w-[fit-content] bg-red px-4 py-2 uppercase text-white">
          Contact form
        </div>
      </div>

      <Show
        when={!isSucess()}
        fallback={
          <div class="mx-auto text-center md:w-[50%]">
            <h3 class="font-futuraExtraBold text-headingXXL">
              Thank you for reaching out to us! We’ll get back to you as soon as
              we can.
            </h3>
          </div>
        }
      >
        <div class="flex flex-col justify-center p-4 pt-12 md:m-4 md:pt-4">
          <form onSubmit={handleSubmit} class="mx-auto w-full sm:w-[500px]">
            <div class="flex justify-between">
              <div>
                <label for="name" class="font-futuraMedium text-headingS">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Firstname Lastname"
                  value={name()}
                  onInput={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label for="email" class="font-futuraMedium text-headingS">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  value={email()}
                  onInput={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class="my-6">
              <ExpandableContainer
                heading="Select subject"
                extraCss="text-white py-4 bg-red"
              >
                <div class="[&>*]:my-2">
                  <p>one</p>
                  <p>two</p>
                  <p>three</p>
                  <p>four</p>
                </div>
              </ExpandableContainer>
            </div>

            <div>
              <label for="comment" class="font-futuraMedium text-headingS">
                Comment:
              </label>
              <textarea
                id="comment"
                name="comment"
                class="h-[150px]"
                value={comment()}
                onInput={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>
            <div class="text-end">
              <button
                type="submit"
                class="mt-8 bg-red px-4 py-1 uppercase text-white"
              >
                Submit
              </button>
            </div>
          </form>

          <Show when={errorMessage()}>
            <div class="mx-auto">error: {JSON.stringify(errorMessage())}</div>
          </Show>
        </div>
        <hr class="border-red" />

        <div class="mx-auto my-8 p-4 pt-12 text-center md:my-4 md:w-[35%] md:pt-4">
          <h3 class="font-futuraExtraBold text-headingXL uppercase">
            Wanna see more of what we're up to?
          </h3>

          <h4 class="font-futuraMedium text-headingS uppercase">Check us on</h4>
          <div class="my-4 flex justify-center">
            <A href="https://www.instagram.com">
              <InstagramIcon class="fill-red" />
            </A>
            <A href="https://www.youtube.com">
              <YoutubeIcon class="ml-4 fill-red" />
            </A>
          </div>
        </div>
      </Show>
    </>
  );
};
