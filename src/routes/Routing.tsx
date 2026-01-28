
import { Routes, Route } from 'react-router'
import MainPage from '../pages/MainPage'
import CardPage from '../pages/CardPage'
import CatalogPage from '../pages/CatalogPage'
import SearchPage from '../pages/SearchPage'
import CartPage from '../pages/CartPage'



const Routing = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/products/:id' element={<CardPage/>}/>
          <Route path='/products/catalog' element={<CatalogPage/>}/>
          <Route path='/products/search' element={<SearchPage/>}/>
          <Route path='/products/cart' element={<CartPage/>}/>
      </Routes>
    </>
  )
}

export default Routing
