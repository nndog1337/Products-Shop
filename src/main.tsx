import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter} from 'react-router'
import Routing from './routes/Routing'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Header from './components/Header/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Header/>
      <Routing/>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
