import { useParams } from '@solidjs/router';
import { Match, Switch } from 'solid-js';
import { BikepackingInTheAzoresPart1 } from './blogposts/bikepacking-in-the-azores-part1';
import { BikepackingInTheAzoresPart2 } from './blogposts/bikepacking-in-the-azores-part2';
import { BikepackingInTheAzoresPart3 } from './blogposts/bikepacking-in-the-azores-part3';
import { BikepackingInTheAzoresPart4 } from './blogposts/bikepacking-in-the-azores-part4';
import { NotFound } from './not-found';

export const BlogPost = () => {
  const params = useParams();

  return (
    <Switch fallback={<NotFound />}>
      <Match when={params.slug === 'bikepacking-in-the-azores'}>
        <Switch fallback={<NotFound />}>
          <Match when={params.page === '1'}>
            <BikepackingInTheAzoresPart1 />
          </Match>
          <Match when={params.page === '2'}>
            <BikepackingInTheAzoresPart2 />
          </Match>
          <Match when={params.page === '3'}>
            <BikepackingInTheAzoresPart3 />
          </Match>
          <Match when={params.page === '4'}>
            <BikepackingInTheAzoresPart4 />
          </Match>
        </Switch>
      </Match>
    </Switch>
  );
};
