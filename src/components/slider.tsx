import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import {
  For,
  JSX,
  Show,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
  children as solidChildren,
} from 'solid-js';
import { ChevronLeftIcon } from './icons-library/chevron-left';
import { ChevronRightIcon } from './icons-library/chevron-right';

type SliderProps = {
  children: JSX.Element[];
  slidesPerView?: number;
  spacing?: number;
  autoplay?: boolean;
  controls?: boolean;
};

export const Slider = (props: SliderProps) => {
  let sliderContainer: HTMLDivElement | undefined;
  let slider: KeenSliderInstance | undefined;

  const [currentSlide, setCurrentSlide] = createSignal(0);
  const resolvedChildren = createMemo(
    () => solidChildren(() => props.children)() as JSX.Element[]
  );

  onMount(() => {
    if (!sliderContainer) return;

    slider = new KeenSlider(
      sliderContainer,
      {
        loop: true,
        slides: {
          perView: props.slidesPerView || 1,
          spacing: props.spacing || 100,
        },
        initial: 0,
        slideChanged(s) {
          setCurrentSlide(s.track.details.rel);
        },
      },
      [
        (slider) => {
          let timeout: number;
          let mouseOver = false;

          function clearNextTimeout() {
            clearTimeout(timeout);
          }

          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver || !props.autoplay) return;
            timeout = window.setTimeout(() => {
              slider.next();
            }, 2000);
          }

          slider.on('created', () => {
            slider.container.addEventListener('mouseover', () => {
              mouseOver = true;
              clearNextTimeout();
            });

            slider.container.addEventListener('mouseout', () => {
              mouseOver = false;
              nextTimeout();
            });

            nextTimeout();
          });

          slider.on('dragStarted', clearNextTimeout);
          slider.on('animationEnded', nextTimeout);
          slider.on('updated', nextTimeout);
        },
      ]
    );

    onCleanup(() => {
      slider?.destroy();
    });
  });

  const prev = () => slider?.prev();
  const next = () => slider?.next();
  const moveTo = (idx: number) => slider?.moveToIdx(idx);

  return (
    <div class="relative">
      <div ref={sliderContainer} id="my-keen-slider" class="keen-slider">
        <For each={resolvedChildren()}>
          {(child) => <div class="keen-slider__slide">{child}</div>}
        </For>
      </div>

      <Show when={props.controls}>
        <button onClick={prev}>
          <ChevronLeftIcon class="absolute left-2 top-1/2 opacity-70" />
        </button>
        <button onClick={next}>
          <ChevronRightIcon class="absolute right-2 top-1/2 opacity-70" />
        </button>

        <div class="absolute bottom-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <For each={resolvedChildren()}>
            {(_, idx) => (
              <button
                onClick={() => moveTo(idx())}
                class={`dot ${currentSlide() === idx() ? 'active' : ''}`}
                aria-label={`Go to slide ${idx() + 1}`}
              ></button>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};
