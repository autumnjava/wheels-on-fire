import { useNavigate } from '@solidjs/router'
import { For, createSignal } from 'solid-js'
import { createSlider } from 'solid-slider'
import { autoplay } from 'solid-slider/plugins/autoplay'
import { Hero } from '../components/hero'

export const Home = () => {
  const navigate = useNavigate()

  const sectionStyle = 'container mx-auto my-4 px-4 text-center'
  const h2Style = 'font-bold uppercase text-2xl'

  const [slides, setSlides] = createSignal([])
  const [pause, togglePause] = createSignal(false)

  const options = {
    duration: 1000,
    loop: true,

    created: (slider: any) => {
      setSlides(slider.slides)
    },
  }

  const [slider, { current, next, prev, moveTo }] = createSlider(
    options,
    autoplay(2000, {
      pause,
      pauseOnDrag: true,
    })
  )

  return (
    <>
      <div ref={(el) => slider(el)}>
        <Hero />
        <Hero />
        <Hero />
      </div>

      {/* <div class="navigation-buttons">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div> */}

      <div class="dots">
        <For each={slides().slice(0, slides().length)}>
          {(_, idx) => {
            return (
              <button
                onClick={() => moveTo(idx())}
                class={`dot ${current() === idx() ? 'active' : ''}`}
              ></button>
            )
          }}
        </For>
      </div>

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
