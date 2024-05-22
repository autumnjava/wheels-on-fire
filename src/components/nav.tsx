import { A } from '@solidjs/router'
import { navLinks } from './utils/constants'

type NavProps = {
  linkClass?: string
  toggleMenu?: () => void
}

export const Nav = (props: NavProps) => {
  return navLinks.map((item) => {
    return (
      <A
        href={item.href}
        class={props.linkClass || 'font-extrabold uppercase text-red-600'}
        activeClass="underline"
        onClick={() => props.toggleMenu && props.toggleMenu()}
      >
        {item.name}
      </A>
    )
  })
}
