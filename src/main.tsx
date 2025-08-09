import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from './Context/initialState.js'
import { FavoriteProvider } from './Context/FavoriteContext.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
)




