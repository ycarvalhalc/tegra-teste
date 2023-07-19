import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import UserDetail from './routes/UserDetail'
import Users from './routes/Users'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Users />},
      {path: '/user/:id', element: <UserDetail />}
    ]
  }
])

import { UserProvider } from './context/UserContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
