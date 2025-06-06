import clsx from 'clsx';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import {
  For,
  JSX,
  Show,
  createMemo,
  createSignal,
  mergeProps,
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
  controlsPosition?: 'hero' | 'normal';
  dotsColor?: 'red' | 'white';
  showArrowsMobile?: boolean;
  hideDotsMobile?: boolean;
  initialSlide?: number;
};

const defaultProps: SliderProps = {
  children: [],
  controlsPosition: 'normal',
  dotsColor: 'white',
  showArrowsMobile: false,
  hideDotsMobile: false,
  initialSlide: 0,
};

export const Slider = (componentProps: SliderProps) => {
  const props = mergeProps(defaultProps, componentProps);

  let sliderContainer: HTMLDivElement | undefined;
  let slider: KeenSliderInstance | undefined;

  const [currentSlide, setCurrentSlide] = createSignal(props.initialSlide);
  const resolvedChildren = createMemo(
    () => solidChildren(() => props.children)() as JSX.Element[]
  );

  const getSlidesPerView = () => {
    if (window.innerWidth <= 768) {
      // If the screen width is less than or equal to 768px, set slidesPerView to 1
      return 1;
    }
    return props.slidesPerView || 1;
  };

  onMount(() => {
    if (!sliderContainer) return;

    slider = new KeenSlider(
      sliderContainer,
      {
        loop: true,
        slides: {
          perView: getSlidesPerView(),
          spacing: props.spacing || 100,
        },
        initial: props.initialSlide,
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
            if (props.autoplay && !mouseOver) {
              timeout = window.setTimeout(() => {
                slider.next();
              }, 4000);
            }
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
        <button
          onClick={prev}
          class={clsx('hidden sm:block', {
            '!block': props.showArrowsMobile,
          })}
        >
          <ChevronLeftIcon
            class={clsx('absolute left-2 top-1/2 opacity-70', {
              'fill-red': props.controlsPosition === 'normal',
              'fill-white': props.dotsColor === 'white',
            })}
          />
        </button>
        <button
          onClick={next}
          class={clsx('hidden sm:block', {
            '!block': props.showArrowsMobile,
          })}
        >
          <ChevronRightIcon
            class={clsx('absolute right-2 top-1/2 opacity-70', {
              'fill-red': props.controlsPosition === 'normal',
              'fill-white': props.dotsColor === 'white',
            })}
          />
        </button>

        <div
          class={clsx({
            'hidden-mobile-only': props.hideDotsMobile,
            'absolute bottom-[30px] left-1/2 -translate-x-1/2 -translate-y-1/2 sm:bottom-[50px]':
              props.controlsPosition === 'hero',
            'my-6 flex justify-center': props.controlsPosition === 'normal',
          })}
        >
          <For each={resolvedChildren()}>
            {(_, idx) => (
              <button
                onClick={() => moveTo(idx())}
                class={`dot block border ${clsx(props.dotsColor === 'white' ? 'border-white' : 'border-red')} ${currentSlide() === idx() && `active ${clsx(props.dotsColor === 'white' ? '!bg-white' : '!bg-red')}`}`}
                aria-label={`Go to slide ${idx() + 1}`}
              ></button>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};
