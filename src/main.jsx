import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Banner from './Banner.jsx'
import Health from './Components/health.jsx'
import Fotter from './Components/Fotter.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        element: (
          <div>
            <Banner></Banner>
            <Health></Health>
            <Fotter></Fotter>
          </div>

        ),
        loader: () => fetch('/Health.json'),
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
