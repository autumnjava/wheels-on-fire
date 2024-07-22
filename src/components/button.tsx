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
  const handleClick = () => {
    if (props.url.startsWith('http')) {
      window.location.href = props.url;
    } else {
      navigate(props.url);
    }
  };
  return (
    <button
      onClick={handleClick}
      class={clsx(
        'mt-8 bg-red px-[13px] py-[9px] text-white',
        props.customClass
      )}
    >
      {props.children}
    </button>
  );
};
