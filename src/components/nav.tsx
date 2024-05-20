import { A } from '@solidjs/router'
import { navLinks } from './utils/constants'

type NavProps = {
  linkClass?: string
}

export const Nav = (props: NavProps) => {
  return navLinks.map((item) => {
    return (
      <A
        href={item.href}
        class={props.linkClass || 'font-extrabold uppercase text-red-600'}
        activeClass="underline"
      >
        {item.name}
      </A>
    )
  })
}
