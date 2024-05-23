import { A } from '@solidjs/router'
import { Nav } from './nav'

import logo from './utils/wheelsonfire_logoselection-01.svg'

export const Footer = () => {
  const columnStyle = 'flex flex-col justify-between [&>*]:my-2'
  return (
    <footer class="mt-auto w-full items-center py-4 bg-black text-center text-white">
      <div class="container mx-auto mt-8 px-4 md:grid md:grid-cols-footer">
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
          <div class="flex flex-wrap justify-center">
            <Nav linkClass="text-nowrap pr-4 font-extrabold uppercase text-white" />
          </div>
          <div>
            <A
              class="pr-4 text-xs font-extrabold uppercase text-white"
              href="#"
            >
              Legal
            </A>
            <A class="text-xs font-extrabold uppercase text-white " href="#">
              General terms
            </A>
          </div>
          <div>social icons</div>
          <p class="text-xs">ART DIRECTION & DESIGN BY JULIANA CORTES</p>
        </div>

        <div class={columnStyle}>
          <p class="text-sm">MTB TOURS SÃO MIGUEL AZORES</p>
          <hr class="mx-auto h-px w-[33%] border-0 bg-gray-200 dark:bg-gray-700" />
          <p class="text-center text-xs">
            <span class="font-bold text-red-600 ">WHEELS ON FIRE </span> is a
            MTB guide & shuttle company based in the island of São Miguel,
            Azores
          </p>
          <hr class="mx-auto h-px w-[33%] border-0 bg-gray-200 dark:bg-gray-700" />
          <p class="text-xs">© ALL RIGHTS RESERVED | 2024</p>
        </div>
      </div>
    </footer>
  )
}
