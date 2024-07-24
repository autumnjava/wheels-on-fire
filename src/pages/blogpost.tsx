import { useParams } from '@solidjs/router';
import { NotFound } from './not-found';
import { BikepackingInTheAzores } from './blogposts/bikepacking-in-the-azores';

export const BlogPost = () => {
  const params = useParams();

  if (params.slug === 'bikepacking-in-the-azores')
    return (
      <BikepackingInTheAzores />
    );
  else {
    return <NotFound />;
  }
};
