import { For, createSignal } from 'solid-js'
import { createSlider } from 'solid-slider'
// import { autoplay } from 'solid-slider/plugins/autoplay'

type SliderProps = {
  children: any
}

export const Slider = (props: SliderProps) => {
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
    options
    /* autoplay(2000, {
      pause,
      pauseOnDrag: true,
    }) */
  )

  return (
    <div class="relative">
      <div ref={(el) => slider(el)}>{props.children}</div>

      {/* <div class="navigation-buttons">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div> */}

      <div class="dots absolute bottom-[50px] left-1/2">
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
    </div>
  )
}
