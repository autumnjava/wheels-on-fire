import { A } from '@solidjs/router'
import { NavLinks } from './nav-links'

import logo from './utils/wheelsonfire_logoselection-01.svg'

export const Footer = () => {
  const columnStyle = 'flex flex-col justify-between [&>*]:my-2'
  return (
    <footer class="mt-auto w-full items-center bg-black text-center text-white">
      <div class="container mx-auto px-4 md:grid md:grid-cols-footer py-8">
        <div>
          <A href="/">
            <img
              src={logo}
              alt="Wheels on fire"
              width={200}
              height={200}
              class="mx-auto"
            />
          </A>
        </div>
        <div class={columnStyle}>
          <nav class="flex flex-wrap justify-center">
            <NavLinks linkClass="text-nowrap pr-4 font-futuraExtraBold uppercase text-white" />
          </nav>
          <div class="font-futuraMedium uppercase">
            <A class="mr-4 " href="#">
              Legal
            </A>
            <A href="#">General terms</A>
          </div>
          <div>social icons</div>
          <p class="font-futuraMedium">ART DIRECTION & DESIGN BY JULIANA CORTES</p>
        </div>

        <div class={columnStyle}>
          <p>MTB TOURS SÃO MIGUEL AZORES</p>
          <hr class="mx-auto h-px w-[33%] border-0 bg-gray-200 dark:bg-gray-700" />
          <p class="text-center font-futuraMedium">
            <span class="text-red font-bold font-futura">WHEELS ON FIRE </span> is a MTB
            guide & shuttle company based in the island of São Miguel, Azores
          </p>
          <hr class="mx-auto h-px w-[33%] border-0 bg-gray-200 dark:bg-gray-700" />
          <p class="font-futuraMedium">© ALL RIGHTS RESERVED | 2024</p>
        </div>
      </div>
    </footer>
  )
}
