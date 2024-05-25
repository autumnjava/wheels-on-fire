import { useNavigate } from '@solidjs/router'
import clsx from 'clsx'
import { JSX } from 'solid-js'

type SliderProps = {
  children: JSX.Element
  url: string
  customClass?: string
}

export const Button = (props: SliderProps) => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/what-we-offer')}
      class={clsx("bg-red mt-8 px-4 py-1 uppercase text-white", props.customClass)}
    >
      {props.children}
    </button>
  )
}
