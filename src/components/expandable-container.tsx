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
};

export const ExpandableContainer = (componentProps: ExpandableProps) => {
  const props = mergeProps(defaultProps, componentProps);
  const [isOpen, setIsOpen] = createSignal(props.initialOpen);

  const handleClick = () => {
    !isOpen() ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <div class="block md:hidden">
      <div
        class="flex cursor-pointer select-none content-center justify-center border-b-2 border-b-white bg-black py-8 text-white"
        onClick={handleClick}
      >
        <h3 class="font-futuraMedium text-headingL">{props.heading}</h3>

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
        <div class="text-center">{props.children}</div>
      </Show>
    </div>
  );
};
