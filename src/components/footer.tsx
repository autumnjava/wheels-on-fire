import { A } from '@solidjs/router';
import clsx from 'clsx';
import { InstagramIcon } from './icons-library/social-media/instagram';
import { YoutubeIcon } from './icons-library/social-media/youtube';
import { NavLinks } from './nav-links';

//logo
import logo from './data/images/wheelsonfire_icon-05.png';

export const Footer = () => {
  const columnStyle = 'flex flex-col justify-evenly [&>*]:my-2';
  return (
    <footer class="mt-auto w-full items-center bg-black text-center text-white">
      <div class="lg:container mx-auto py-4 md:grid md:grid-cols-footer">
        <div class="w-auto content-center">
          <A href="/">
            <img
              src={logo}
              alt="Wheels on fire"
              class="mx-auto w-[130px] md:w-[156px]"
            />
          </A>
        </div>
        <div class={clsx('mx-auto max-w-[420px]', columnStyle)}>
          <p class="font-andaleMonoBold text-[15px] leading-[26px]">
            MTB TOURS SÃO MIGUEL AZORES
          </p>

          <nav class="flex flex-wrap justify-center">
            <NavLinks linkClass="text-nowrap px-[14px] font-futuraExtraBold uppercase text-white leading-[28px] no-underline" />
          </nav>
          <div class="font-futuraMedium text-[15px] uppercase leading-[26px]">
            <A class="mr-4 " href="#">
              Legal
            </A>
            <A href="#">General terms</A>
          </div>
        </div>

        <div class={clsx('mx-auto max-w-[208px]', columnStyle)}>
          <hr class="mx-auto w-[50%] border-gray" />
          <p class="text-center font-futuraMedium">
            <span class="font-futura font-bold text-red">WHEELS ON FIRE </span>{' '}
            is a MTB guide & shuttle company based in the island of São Miguel,
            Azores
          </p>
          <hr class="mx-auto w-[50%] border-gray" />
        </div>

        <div class={clsx('mx-auto max-w-[143px]', columnStyle)}>
          <div class="flex justify-center">
            <A href="https://www.instagram.com">
              <InstagramIcon />
            </A>
            <A href="https://www.youtube.com/@wheelsonfireazores">
              <YoutubeIcon class="ml-4" />
            </A>
          </div>

          <hr class="mx-auto w-[33%] border-gray" />

          <p class="font-futuraMedium text-[13px]">
            ART DIRECTION & DESIGN BY JULIANA CORTES
          </p>

          <hr class="mx-auto w-[33%] border-gray" />

          <p class="font-futuraMedium text-[12px]">© WHEELS ON FIRE | 2024</p>
        </div>
      </div>
    </footer>
  );
};
