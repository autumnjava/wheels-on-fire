import { useNavigate } from '@solidjs/router'
import bgImage from './utils/MRP_0119.jpg'
import { Button } from './button'

type HeroProps = {}

export const Hero = (props: HeroProps) => {
  const navigate = useNavigate()

  return (
    <div
      class="safari-center mb-8 h-[500px] w-[100vw] content-center bg-black bg-center px-8 pt-4 md:h-[650px]"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <div class="xl:max-w-[70%]">
        <q class="text-outline text-heroHeading font-futuraExtraBold block font-bold uppercase tracking-wider">
          Forget the comfort, let's get dirty!
        </q>
        <Button url="/what-we-offer">What we offer</Button>
      </div>
    </div>
  )
}
