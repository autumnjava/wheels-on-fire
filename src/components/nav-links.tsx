import { A } from '@solidjs/router'
import { navLinks } from './utils/constants'

type NavProps = {
  linkClass?: string
  toggleMenu?: () => void
}

export const NavLinks = (props: NavProps) => {
  return navLinks.map((item) => {
    return (
      <A
        href={item.href}
        class={props.linkClass || 'font-futuraExtraBold font-bold uppercase text-navMenu'}
        activeClass="underline"
        onClick={() => props.toggleMenu && props.toggleMenu()}
      >
        {item.name}
      </A>
    )
  })
}
