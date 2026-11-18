import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
AppContextProvider
import { BrowserRouter } from "react-router";
import { ClerkProvider } from '@clerk/react'

createRoot(document.getElementById('root')).render(
  <ClerkProvider>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </ClerkProvider>
)
