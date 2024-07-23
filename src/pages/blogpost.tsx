import { useParams } from '@solidjs/router';
import { NotFound } from './not-found';

export const BlogPost = () => {
  const params = useParams();

  if (params.slug === 'bikepacking-in-the-azores')
    return (
      <div class="my-8 text-center">
        <h1>Bikepacking in the azores</h1>
      </div>
    );
  else {
    return <NotFound />;
  }
};
