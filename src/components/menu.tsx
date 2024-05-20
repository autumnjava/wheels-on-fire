import { A } from '@solidjs/router'
import clsx from 'clsx'
import { Show, createSignal } from 'solid-js'

import { Nav } from './nav'
import logo from './utils/wheelsonfire_logoselection-02.svg'

export const MobileMenu = () => {
  const [mobileMenuActive, setMobileMenuActive] = createSignal(false)

  const toggleMenu = () => {
    const body = document.querySelector('body')
    body?.classList.toggle('fixed')
    setMobileMenuActive(!mobileMenuActive())
  }

  return (
    <>
      <div class="flex justify-end md:hidden">
        <button class="m-6" onClick={toggleMenu}>
          {/* font-awesome */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="h-6 w-6 fill-red-500"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>

      <A href="/">
        <img
          src={logo}
          alt="Wheels on fire"
          width={300}
          height={300}
          class="mx-auto"
        />
      </A>

      <Show when={mobileMenuActive()}>
        <div
          class={clsx(
            'fixed',
            'backdrop-blur-3xl',
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 fill-red-500"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>

          <div class="overflow-y-hidden">
            <nav class="my-8 grid gap-4 text-center">
              <Nav />
            </nav>
          </div>
        </div>
      </Show>
    </>
  )
}
