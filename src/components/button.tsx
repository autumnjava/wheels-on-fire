import { useNavigate } from '@solidjs/router';
import clsx from 'clsx';
import { JSX } from 'solid-js';

type SliderProps = {
  children: JSX.Element;
  url: string;
  customClass?: string;
};

export const Button = (props: SliderProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(props.url)}
      class={clsx(
        'mt-8 bg-red px-4 py-1 text-white',
        props.customClass
      )}
    >
      {props.children}
    </button>
  );
};
