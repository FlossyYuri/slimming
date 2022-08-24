import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MetaPixel = () => {
  const router = useRouter();
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1968198653570585');
        ReactPixel.pageView();

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, []);
  return <div></div>;
};

export default MetaPixel;
