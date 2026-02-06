import { createRoute } from '@tanstack/react-router'

import { InventoryExchangesPage, InventoryGiftsPage, InventoryHistoryPage, InventoryPage, TradePage } from '@/pages'

import { rootRoute } from './root'

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: TradePage,
})

export const inventoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/inventory',
  component: InventoryPage,
})

export const inventoryGiftsRoute = createRoute({
  getParentRoute: () => inventoryRoute,
  path: '/',
  component: InventoryGiftsPage,
  validateSearch: (search: Record<string, unknown>) => ({
    tab: (search.tab as string) || undefined,
  }),
})

export const inventoryExchangesRoute = createRoute({
  getParentRoute: () => inventoryRoute,
  path: '/exchanges',
  component: InventoryExchangesPage,
  validateSearch: (search: Record<string, unknown>) => ({
    tab: (search.tab as string) || undefined,
    offers: (search.offers as string) || undefined,
    in_progress: (search.in_progress as string) || undefined,
  }),
})

export const inventoryHistoryRoute = createRoute({
  getParentRoute: () => inventoryRoute,
  path: '/history',
  component: InventoryHistoryPage,
})
