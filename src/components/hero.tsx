import { useNavigate } from '@solidjs/router'
import bgImage from './utils/MRP_0119.jpg'

type HeroProps = {}

export const Hero = (props: HeroProps) => {
  const navigate = useNavigate()

  return (
    <div
      class="safari-center mb-8 h-[500px] w-[100vw] content-center bg-black bg-center px-8 pt-4 md:h-[650px]"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <div class="xl:max-w-[70%]">
        <q class="text-outline block text-5xl font-bold uppercase tracking-wider md:text-8xl">
          Forget the comfort, let's get dirty!
        </q>
        <button
          onClick={() => navigate('/what-we-offer')}
          class="mt-8 bg-red-600 px-4 py-1 uppercase text-white"
        >
          What we offer
        </button>
      </div>
    </div>
  )
}
