import { createRoute } from '@tanstack/react-router'

import { TradePage } from '@/pages'

import { rootRoute } from './root'

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: TradePage,
})
