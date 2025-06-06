import clsx from 'clsx';
import { Show, createEffect, createSignal, mergeProps, on } from 'solid-js';
import { ChevronDownIcon } from './icons-library/chevron-down';

const defaultProps = {
  initialOpen: false,
};

type ExpandableProps = {
  children: any;
  heading: string;
  initialOpen?: boolean;
  customCss?: string;
  extraCss?: string;
  headingCss?: string;
  onClose?: any;
};

export const ExpandableContainer = (componentProps: ExpandableProps) => {
  const props = mergeProps(defaultProps, componentProps);
  const [isOpen, setIsOpen] = createSignal(props.initialOpen);

  const handleClick = () => {
    isOpen() ? setIsOpen(false) : setIsOpen(true);
  };

  createEffect(
    on(
      () => props.onClose,
      () => setIsOpen(false),
      {
        defer: true,
      }
    )
  );

  return (
    <div class={props.customCss}>
      <div
        class={clsx(
          'relative flex cursor-pointer select-none content-center justify-center border-b-2 border-b-white bg-black py-6 text-white',
          props.extraCss
        )}
        onClick={handleClick}
      >
        <h3
          class={clsx(
            'font-futuraMedium text-[1.2rem] uppercase leading-[100%] sm:text-headingM',
            props.headingCss
          )}
        >
          {props.heading}
        </h3>

        <ChevronDownIcon
          class={clsx(
            'absolute right-12 origin-center transform self-center stroke-white transition-transform duration-500',
            {
              'rotate-180': isOpen(),
            }
          )}
        />
      </div>
      <Show when={isOpen()}>
        <div class="my-8 select-none text-center">{props.children}</div>
      </Show>
    </div>
  );
};
