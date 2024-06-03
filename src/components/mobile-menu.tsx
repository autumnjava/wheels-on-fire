import { A } from '@solidjs/router';
import clsx from 'clsx';
import { Show, createSignal } from 'solid-js';

import { NavLinks } from './nav-links';
import logo from './data/wheelsonfire_logoselection-02.svg';
import { CloseIcon } from './icons-library/close';
import { HamburgerMenuIcon } from './icons-library/hamburger-menu';

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

      <div>
        <A href="/">
          <img
            src={logo}
            alt="Wheels on fire"
            width={300}
            height={300}
            class="mx-auto"
          />
        </A>
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
            { 'hidden ': !mobileMenuActive() }
          )}
        >
          <div class="m-6 flex items-center justify-between gap-5">
            <A aria-label="Gå till startsidan" href="/" class="p-s block">
              logo?
            </A>

            <button aria-label="Visa meny" onClick={toggleMenu} class="p-s">
              <CloseIcon />
            </button>
          </div>

          <div class="overflow-y-hidden">
            <nav class="my-8 grid gap-4 text-center">
              <NavLinks toggleMenu={toggleMenu} />
            </nav>
          </div>
        </div>
      </Show>
    </>
  );
};
