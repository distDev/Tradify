import {
  createRootRoute,
  Outlet,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import RootLayout from '@/app/layouts/RootLayout'

export const rootRoute = createRootRoute({
  component: () => (
    <RootLayout>
      <Outlet />
      <TanStackRouterDevtools />
    </RootLayout>
  ),
})
