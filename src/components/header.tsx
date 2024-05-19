import { A } from '@solidjs/router'
import clsx from 'clsx'
import type { Component } from 'solid-js'
import { navLinks } from './utils/constants'

import logo from './utils/wheelsonfire_logoselection-02.svg'

const Header: Component = () => {
  return (
    <header>
      <nav class="m-6 flex justify-end  md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="h-6 w-6 fill-red-500"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </nav>

      <A href="/">
        <img
          src={logo}
          alt="Wheels on fire"
          width={300}
          height={300}
          class="mx-auto"
        />
      </A>

      <hr class="border-red-500" />

      <nav class="my-8 hidden items-center justify-between md:container md:mx-auto  md:flex md:w-full  md:justify-between md:px-4">
        {navLinks.map((item) => {
          const isActive = true

          return (
            <A
              href={item.href}
              class={clsx(
                'font-extrabold uppercase text-red-600',
                isActive && 'underline'
              )}
            >
              {item.name}
            </A>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
