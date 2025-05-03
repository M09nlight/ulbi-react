import { matchPath, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppRouteByPathPattern, AppRoutes } from '@/shared/consts/router';

export function useRouteChange() {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN);

  useEffect(() => {
    //profile: id..
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  console.log('appRoute', appRoute);

  return appRoute;
}
