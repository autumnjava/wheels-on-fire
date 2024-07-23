import { useParams } from '@solidjs/router';
import { Button } from '../components/button';
import { NotFound } from './not-found';

export const InActionBlogPost = () => {
  const params = useParams();

  if (params.slug === 'bikepacking-in-the-azores')
    return <>what we get herebro?</>;
  else {
    return <NotFound />;
  }
};
