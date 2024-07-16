import { A } from '@solidjs/router';
import { createSignal, onCleanup, onMount } from 'solid-js';
import { MobileMenu } from './mobile-menu';
import { NavLinks } from './nav-links';

// logo
import clsx from 'clsx';
import logo from './data/wheelsonfire_logoselection-03.png';
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
              class="mx-auto w-[130px] md:w-[226px]"
            />
          </A>
        </div>

        <hr class="hidden border-red md:block" />
      </header>
      <nav
        class={clsx(
          'sticky top-0 z-10 hidden items-center justify-between  py-4 text-red md:container md:mx-auto md:flex md:w-full md:justify-between md:px-8',
          {
            frostedBackground: floatHeader(),
          }
        )}
      >
        <NavLinks />
      </nav>

      <div ref={headerRef} />
    </>
  );
};
