import { A } from '@solidjs/router';
import { navLinks } from '../utils/constants';
import clsx from 'clsx';

type NavProps = {
  linkClass?: string;
  toggleMenu?: () => void;
};

export const NavLinks = (props: NavProps) => {
  return navLinks.map((item) => {
    return (
      <A
        href={item.href}
        class={clsx(
          'font-futuraExtraBold text-navMenu uppercase',
          props.linkClass
        )}
        activeClass="underline underline-offset-[6px]"
        onClick={() => props.toggleMenu && props.toggleMenu()}
      >
        {item.name}
      </A>
    );
  });
};
