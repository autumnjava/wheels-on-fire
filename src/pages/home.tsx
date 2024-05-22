import { useNavigate } from '@solidjs/router'
import { Hero } from '../components/hero'
import { Slider } from '../components/slider'

export const Home = () => {
  const navigate = useNavigate()

  const sectionStyle = 'container mx-auto my-4 px-4 text-center'
  const h2Style = 'font-bold uppercase text-2xl'

  return (
    <>
      <Slider>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
      </Slider>

      <div class="container mx-auto my-4 px-4">
        <h2 class="font-bold uppercase">Brands that support us</h2>
        <p>carousel will be here</p>
      </div>

      <hr class="border-red-500" />

      <div class={sectionStyle}>
        <h2 class={h2Style}>You ride. We pick you up.</h2>
        <h2 class={h2Style}>We got you all set up.</h2>
      </div>

      <div class={sectionStyle}>
        <h3 class="font-bold uppercase">Get in touch</h3>
        <button
          onClick={() => navigate('/get-in-touch')}
          class="bg-red-600 px-4 py-1 uppercase text-white"
        >
          Contact us
        </button>
      </div>
    </>
  )
}
