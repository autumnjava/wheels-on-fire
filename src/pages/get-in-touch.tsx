import emailjs from '@emailjs/browser';
import { A } from '@solidjs/router';
import clsx from 'clsx';
import { For, Show, createSignal, onMount } from 'solid-js';
import { ExpandableContainer } from '../components/expandable-container';

// icons
import { InstagramIcon } from '../components/icons-library/social-media/instagram';
import { YoutubeIcon } from '../components/icons-library/social-media/youtube';
import whatsAppIcon from '../components/data/images/whatsapp.png';

type SubjectType = {
  value: string;
  label: string;
};

export const GetInTouch = () => {
  const [firstName, setFirstName] = createSignal('');
  const [lastName, setLastName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [comment, setComment] = createSignal('');
  const [isSucess, setIsSuccess] = createSignal(false);
  const [subject, setSubject] = createSignal({} as SubjectType);
  const [errorMessage, setErrorMessage] = createSignal({} as any);
  const [expandableOpen, setExpandableOpen] = createSignal(false);

  const subjectOptions = [
    { value: 'halfDay', label: 'Half day' },
    { value: 'fullDay', label: 'Full day' },
    { value: 'privateGuidedTour', label: 'Private guided tour' },
    { value: 'customizeYourDay', label: 'Customize your day' },
    { value: 'bikeRental', label: 'Bike rental' },
    { value: 'shuttle', label: 'Shuttle' },
  ];

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!subject().value) {
      setErrorMessage({ text: 'Please select a subject!' });
      return;
    }

    const templateParams = {
      from_name: `${firstName()} ${lastName()} `,
      from_email: email(),
      subject: subject().label,
      message: comment(),
    };

    try {
      const response = await emailjs.send(
        'default_service',
        'template_9kr5gbo',
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
    emailjs.init({
      publicKey: 'xiKB2qC-EzY13ebzX',
    });
  });

  const handleSubjectClick = (subject: SubjectType) => {
    setSubject(subject);
    setExpandableOpen((prev) => !prev);
  };

  return (
    <>
      <hr />

      <A aria-label="Chat on WhatsApp" href="https://wa.me/351915797870">
        <img
          src={whatsAppIcon}
          class="fixed bottom-6 right-6 z-10 w-[50px] sm:w-[100px]"
        />
      </A>

      <div class="container mx-auto mt-6 px-4 text-center">
        <h1 class="black-text-outline mb-2 text-headingXXXL2 tracking-wider text-red">
          Get in touch
        </h1>

        <h2 class="mx-auto text-[1.05rem] leading-[110%] sm:text-headingL sm:leading-[100%]">
          To make the most of your trip, for bookings
          <br class="block sm:hidden" /> and other questions, please contact us
          on
          <br />
          WhatsApp:{' '}
          <A aria-label="Chat on WhatsApp" href="https://wa.me/351915797870">
            <span class="text-red">+351 915 797 870</span>
          </A>
          ,<br class="block sm:hidden" /> email:{' '}
          <span class="text-red">wheelsonfireazores@gmail.com</span>
          <br class="block sm:hidden" /> or fill the{' '}
          <span class="text-red">contact form</span> below.
        </h2>
      </div>

      <Show
        when={!isSucess()}
        fallback={
          <>
            <hr class="my-8 sm:my-16" />
            <div class="mx-auto my-8 text-center sm:my-16">
              <h3 class="font-futuraExtraBold text-[1.3rem] uppercase leading-[110%] sm:text-[2rem] sm:text-headingXXL">
                Thank you
                <br class="block 2xl:hidden" /> for reaching out to us!
                <br />
                We’ll get back to you
                <br />
                as soon as we can.
              </h3>
            </div>
          </>
        }
      >
        <div class="my-8 border-t  border-red text-center ">
          <div class="mx-auto w-[fit-content] bg-red px-8 py-1 font-futuraMedium text-[16px] uppercase leading-[100%] text-white sm:px-4 sm:text-headingM sm:leading-[27px]">
            Contact form
          </div>
        </div>

        <div class="mt-4 flex flex-col justify-center px-4 md:m-4 md:mt-4">
          <form onSubmit={handleSubmit} class="mx-auto w-full lg:w-[931px]">
            <div class="lg:flex lg:justify-between">
              <div>
                <label for="name">Name:</label>
                <div class="flex flex-col flex-wrap gap-4 sm:gap-8 md:flex-row">
                  <input
                    type="text"
                    id="firstName"
                    name="name"
                    placeholder="First"
                    value={firstName()}
                    onInput={(e) => setFirstName(e.target.value)}
                    class="md:min-w-[217px]"
                    required
                  />

                  <input
                    type="text"
                    id="lastName"
                    name="name"
                    placeholder="Last"
                    value={lastName()}
                    onInput={(e) => setLastName(e.target.value)}
                    required
                    class="md:min-w-[217px]"
                  />
                </div>
              </div>
              <div>
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  value={email()}
                  onInput={(e) => setEmail(e.target.value)}
                  required
                  class="md:min-w-[408px]"
                />
              </div>
            </div>

            <div class="my-6">
              <ExpandableContainer
                heading={subject().label || 'Select subject'}
                extraCss="text-white !py-1 bg-red"
                headingCss="text-[16px]"
                onClose={expandableOpen()}
              >
                <div class="expandable-options [&>*]:!my-1">
                  <For each={subjectOptions}>
                    {(option) => (
                      <p
                        onClick={() => handleSubjectClick(option)}
                        class={clsx(
                          {
                            'bg-red bg-opacity-50':
                              subject().value === option.value,
                          },
                          '!py-2'
                        )}
                      >
                        {option.label}
                      </p>
                    )}
                  </For>
                </div>
              </ExpandableContainer>
            </div>

            <div>
              <label for="comment">Comment:</label>
              <textarea
                id="comment"
                name="comment"
                class="h-[300px]"
                value={comment()}
                onInput={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>
            <div class="text-end">
              <button
                type="submit"
                class="my-8 bg-red px-4 py-1 text-[16px] uppercase text-white sm:text-[21.2px]"
              >
                Submit
              </button>
            </div>
          </form>

          <Show when={errorMessage().text}>
            <div class="mx-auto my-4 bg-red px-16 py-4 text-white">
              {errorMessage().text}
            </div>
          </Show>
        </div>
        <hr />

        <div class="mx-auto my-8 mb-0 p-4 pt-12 text-center md:mt-32 md:w-[35%] md:pt-4">
          <h3 class="font-futuraExtraBold text-headingXL uppercase">
            Wanna see more of what we're up to?
          </h3>

          <h4 class="mt-4 text-headingL uppercase">Check us on</h4>
          <div class="mt-2 flex justify-center">
            <A
              href="https://www.instagram.com/wheelsonfireazores"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon class="fill-red" />
            </A>
            <A
              href="https://m.youtube.com/@wheelsonfireazores"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon class="ml-4 fill-red" />
            </A>
          </div>
        </div>
      </Show>
    </>
  );
};
