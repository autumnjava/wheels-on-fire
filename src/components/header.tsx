import { MobileMenu } from './mobile-menu'
import { NavLinks } from './nav-links'

export const Header = () => {
  return (
    <header>
      <MobileMenu />

      <hr class="border-red hidden md:block" />

      <nav class="my-8 hidden items-center justify-between md:container md:mx-auto  md:flex md:w-full  md:justify-between md:px-4 text-red">
        <NavLinks />
      </nav>
    </header>
  )
}
