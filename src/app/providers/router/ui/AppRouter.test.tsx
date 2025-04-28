import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteProfile,
} from '@/shared/consts/router';
import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';

describe('app/route/AppRouter', () => {
  test('page will be rendered', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage'); // find element by testId because lazy loading

    expect(page).toBeInTheDocument();
  });
  test('page not found', async () => {
    componentRender(<AppRouter />, {
      route: '/asdasd',
    });

    const page = await screen.findByTestId('NotFoundPage'); // find element by testId because lazy loading

    expect(page).toBeInTheDocument();
  });
  test('redirect unauthorized user on the main', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('MainPage'); // find element by testId because lazy loading

    expect(page).toBeInTheDocument();
  });
  test('access to private route for authorized user', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          authData: {},
          _inited: true,
        },
      },
    });

    const page = await screen.findByTestId('ProfilePage'); // find element by testId because lazy loading

    expect(page).toBeInTheDocument();
  });
  test('access denied (no role)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          authData: {},
          _inited: true,
        },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage'); // find element by testId because lazy loading

    expect(page).toBeInTheDocument();
  });
  test('access provided (admin role)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          authData: {
            roles: [UserRole.ADMIN],
          },
          _inited: true,
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage'); // find element by testId because lazy loading

    expect(page).toBeInTheDocument();
  });
});
