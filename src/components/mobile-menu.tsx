import { A } from '@solidjs/router';
import clsx from 'clsx';
import { Show, createSignal } from 'solid-js';
import { CloseIcon } from './icons-library/close';
import { HamburgerMenuIcon } from './icons-library/hamburger-menu';
import { NavLinks } from './nav-links';

// logo
import logoWhite from './data/images/wheelsonfire_white-01.png';

export const MobileMenu = () => {
  const [mobileMenuActive, setMobileMenuActive] = createSignal(false);

  const toggleMenu = () => {
    const main = document.querySelector('main');
    const body = document.querySelector('body');
    main?.classList.toggle('hidden');
    body?.classList.toggle('fixed');
    body?.classList.toggle('overflow-y-scroll');
    setMobileMenuActive(!mobileMenuActive());
  };

  return (
    <>
      <div class="flex select-none justify-end md:hidden">
        <button class="m-6" onClick={toggleMenu}>
          <HamburgerMenuIcon />
        </button>
      </div>

      <Show when={mobileMenuActive()}>
        <div
          class={clsx(
            'fixed',
            'bg-black',
            'text-white',
            'top-0',
            'bottom-0',
            'left-0',
            'right-0',
            'overflow-y-auto',
            { 'hidden ': !mobileMenuActive() }
          )}
        >
          <div class="flex select-none justify-end md:hidden">
            <button onClick={toggleMenu} class="m-6">
              <CloseIcon />
            </button>
          </div>

          <div class="flex justify-center gap-5">
            <A
              aria-label="Gå till startsidan"
              href="/"
              class="p-s block"
              onClick={() => toggleMenu()}
            >
              <img
                src={logoWhite}
                alt="Wheels on fire"
                class="mx-auto w-[230px]"
              />
            </A>
          </div>

          <div class="overflow-y-hidden">
            <nav class="my-8 grid gap-4 px-4 text-center">
              <NavLinks toggleMenu={toggleMenu} linkClass='!text-[2rem]' />
            </nav>
          </div>
        </div>
      </Show>
    </>
  );
};
