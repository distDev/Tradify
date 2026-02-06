import { createRouter } from '@tanstack/react-router'

import { rootRoute } from './root'
import { indexRoute, inventoryExchangesRoute, inventoryGiftsRoute, inventoryHistoryRoute, inventoryRoute } from './routes'

const routeTree = rootRoute.addChildren([
  indexRoute,

  inventoryRoute.addChildren([inventoryGiftsRoute, inventoryExchangesRoute, inventoryHistoryRoute]),
])

export const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
