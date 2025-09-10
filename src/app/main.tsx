import { RouterProvider } from '@tanstack/react-router'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { router } from '@/app/router'
import reportWebVitals from '@/reportWebVitals'

import './index.css'

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

reportWebVitals()
