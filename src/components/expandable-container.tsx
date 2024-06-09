import clsx from 'clsx';
import { Show, createSignal, mergeProps } from 'solid-js';
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
};

export const ExpandableContainer = (componentProps: ExpandableProps) => {
  const props = mergeProps(defaultProps, componentProps);
  const [isOpen, setIsOpen] = createSignal(props.initialOpen);

  const handleClick = () => {
    isOpen() ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div class={props.customCss}>
      <div
        class={clsx(
          'relative flex cursor-pointer select-none content-center justify-center border-b-2 border-b-white bg-black py-8 text-white',
          props.extraCss
        )}
        onClick={handleClick}
      >
        <h3 class="font-futuraMedium text-headingM uppercase">
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
        <div class="text-center select-none">{props.children}</div>
      </Show>
    </div>
  );
};
