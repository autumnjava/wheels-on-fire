import bgImage from '../data/jallas_bike_2.jpeg';

type HeroProps = {};

export const BeastSlide1 = (props: HeroProps) => {
  return (
    <div class="text-center">
      <div class="mx-auto text-center">🚲</div>
      <hr class="dark:bg-gray mx-auto my-4 h-px w-full bg-gray-200" />

      <div class="my-4">
        <p class="uppercase">Commencal meta v5 signature silver</p>

        <div class="mx-auto flex justify-center [&>*]:mx-2 [&>*]:content-center">
          <span class="text-gray line-through">€ 5.300,00</span>
          <span class="">€ 5.123,33</span>
          <span class="bg-lightOliveGreen px-1 py-px">-3%</span>
        </div>
      </div>
    </div>
  );
};
