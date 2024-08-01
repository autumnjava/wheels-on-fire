import { A } from '@solidjs/router';
import { createSignal, onCleanup, onMount } from 'solid-js';
import { MobileMenu } from './mobile-menu';
import { NavLinks } from './nav-links';

// logo
import clsx from 'clsx';
import logo from './data/images/wheelsonfire_logoselection-03.png';
export const Header = () => {
  const [floatHeader, setFloatHeader] = createSignal(false);

  let headerRef: any;
  onMount(() => {
    const pageAtTopObserver = new IntersectionObserver(
      (payload) => {
        const pageAtTop = payload[0].isIntersecting;
        setFloatHeader(!pageAtTop);
      },
      {
        threshold: 1,
        // Else the floating header will be triggered too soon if we don't have a hero at the top.
        rootMargin: '-65px',
      }
    );

    if (headerRef) {
      pageAtTopObserver.observe(headerRef);
    }

    onCleanup(() => pageAtTopObserver.observe(headerRef));
  });

  return (
    <>
      <header>
        <MobileMenu />
        <div>
          <A aria-label="Gå till startsidan" href="/">
            <img
              src={logo}
              alt="Wheels on fire"
              class="mx-auto w-[150px] md:w-[300px]"
            />
          </A>
        </div>

        <hr class="hidden md:block" />
      </header>
      <nav
        class={clsx('sticky top-0 z-10 hidden py-6 md:block', {
          'frostedBackground !py-4': floatHeader(),
        })}
      >
        <div class="items-center justify-between text-red md:container md:mx-auto md:flex md:w-full md:justify-between md:px-8">
          <NavLinks linkClass='!text-headingS' />
        </div>
      </nav>

      <div ref={headerRef} />
    </>
  );
};
