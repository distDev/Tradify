import { RouterProvider } from '@tanstack/react-router'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { router } from '@/app/router'
import reportWebVitals from '@/reportWebVitals'

import '@/app/styles/index.css'

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
        <RouterProvider router={router} />
      </TonConnectUIProvider>
    </StrictMode>,
  )
}

reportWebVitals()
