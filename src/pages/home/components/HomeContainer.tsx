import { Box } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

import ButtonScrollToTop from '../../../components/Button/ButtonScrollToTop';

import Loading from '../../../components/layout/Loading';
import { useUser } from '../../../hooks/authentication/useUser';
import useWatchScroll from '../../../hooks/utils/useWatchScroll';
import clientStorage from '../../../utils/clientStorage';

import { lazy, Suspense } from 'react';
const NavigationComponent = lazy(
  () => import('./../../../components/Navigation/Navigation')
);
const MainContainerComponent = lazy(() => import('./MainContainer'));
const FooterComponent = lazy(() => import('../../../components/Footer/Footer'));
const HeroComponent = lazy(() => import('../../../components/Hero/Hero'));
const HomeContainer = () => {
  const { isShowScrollToTop } = useWatchScroll();
  const { data, error } = useUser(0);

  if (!data && clientStorage.getClientStorage().getToken()) {
    return <Loading />;
  }
  if (!error) {
    if (data) {
      if (
        data?.nameGroup !== 'Customer' &&
        clientStorage.getClientStorage().getToken()
      )
        return <Navigate to={'/user/profile'} replace={true} />;
    }
  }

  return (
    <Box bgColor={'bgMain.100'} position="relative">
      <Suspense fallback={<Loading />}>
        <NavigationComponent />
        <HeroComponent />
        <MainContainerComponent />
        <FooterComponent />
      </Suspense>
      <ButtonScrollToTop isShowScrollToTop={isShowScrollToTop} />
    </Box>
  );
};

export default HomeContainer;
