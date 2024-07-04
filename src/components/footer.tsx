import { A } from '@solidjs/router';
import { NavLinks } from './nav-links';

import logo from './data/wheelsonfire_logoselection-01.svg';
import { InstagramIcon } from './icons-library/social-media/instagram';
import { YoutubeIcon } from './icons-library/social-media/youtube';

export const Footer = () => {
  const columnStyle = 'flex flex-col justify-evenly [&>*]:my-2';
  return (
    <footer class="mt-auto w-full items-center bg-black text-center text-white">
      <div class="container mx-auto px-4 py-4 md:grid md:grid-cols-footer">
        <div class="w-auto">
          <A href="/">
            <img
              src={logo}
              alt="Wheels on fire"
              class="mx-auto w-[130px] md:w-[160px]"
            />
          </A>
        </div>
        <div class={columnStyle}>
          <p class="text-[15px] leading-[26px]">MTB TOURS SÃO MIGUEL AZORES</p>

          <nav class="flex flex-wrap justify-center">
            <NavLinks linkClass="text-nowrap pr-4 font-futuraExtraBold uppercase text-white text-headingS leading-[28px]" />
          </nav>
          <div class="font-futuraMedium text-[15px] uppercase leading-[26px]">
            <A class="mr-4 " href="#">
              Legal
            </A>
            <A href="#">General terms</A>
          </div>
        </div>

        <div class={columnStyle}>
          <hr class="mx-auto h-px w-[33%] border-0 bg-gray-200 dark:bg-gray-700" />
          <p class="text-center font-futuraMedium">
            <span class="font-futura font-bold text-red">WHEELS ON FIRE </span>{' '}
            is a MTB guide & shuttle company based in the island of São Miguel,
            Azores
          </p>
          <hr class="mx-auto h-px w-[33%] border-0 bg-gray-200 dark:bg-gray-700" />
        </div>

        <div class={columnStyle}>
          <div class="flex justify-center">
            <A href="https://www.instagram.com">
              <InstagramIcon />
            </A>
            <A href="https://www.youtube.com">
              <YoutubeIcon class="ml-4" />
            </A>
          </div>

          <hr class="mx-auto h-px w-[33%] border-0 bg-gray-200 dark:bg-gray-700" />

          <p class="font-futuraMedium text-[13px]">
            ART DIRECTION & DESIGN BY JULIANA CORTES
          </p>

          <hr class="mx-auto h-px w-[33%] border-0 bg-gray-200 dark:bg-gray-700" />

          <p class="font-futuraMedium text-[12px]">
            © WHEELS ON FIRE | 2024
          </p>
        </div>
      </div>
    </footer>
  );
};
