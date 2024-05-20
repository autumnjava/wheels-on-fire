import { MobileMenu } from './menu'
import { Nav } from './nav'

export const Header = () => {
  return (
    <header>
      <MobileMenu />

      <hr class="border-red-500" />

      <nav class="my-8 hidden items-center justify-between md:container md:mx-auto  md:flex md:w-full  md:justify-between md:px-4">
        <Nav />
      </nav>
    </header>
  )
}
