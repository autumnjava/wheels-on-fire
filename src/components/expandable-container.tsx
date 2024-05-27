import { Show, createSignal, mergeProps, onCleanup, onMount } from 'solid-js';
import { ChevronUpIcon } from './icons-library/chevron-up';

const defaultProps = {
  isDropdown: false,
  initialOpen: false,
};

type ExpandableProps = {
  children: any;
  heading: string;
  initialOpen?: boolean;
};

export const ExpandableContainer = (componentProps: ExpandableProps) => {
  const props = mergeProps(defaultProps, componentProps);
  const [open, setOpen] = createSignal(props.initialOpen);

  const handleClick = () => {
    !open() ? setOpen(true) : setOpen(false);
  };

  return (
    <div class="block md:hidden">
      <div
        class="flex cursor-pointer select-none content-center justify-center bg-black py-8 text-white border-b-white border-b-2"
        onClick={handleClick}
      >
        <h3 class="font-futuraMedium text-headingL">{props.heading}</h3>

        <ChevronUpIcon class="absolute right-12 self-center stroke-white" />
      </div>
      <Show when={open()}>
        <div class="text-center">{props.children}</div>
      </Show>
    </div>
  );
};
