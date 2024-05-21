import bgImage from './utils/MRP_0119.jpg'

type HeroProps = {}

export const Hero = (props: HeroProps) => {
  return (
    <div
      class="mb-8 h-[600px] w-[100vw] bg-black bg-center px-4 pt-4"
      style={{ 'background-image': `url(${bgImage})` }}
    >
      <q class="text-outline text-7xl font-bold uppercase md:text-8xl lg:text-9xl">
        Forget the comfort, let's get dirty!
      </q>
    </div>
  )
}
