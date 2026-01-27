
import { Routes, Route } from 'react-router'
import MainPage from '../pages/MainPage'
import CardPage from '../pages/CardPage'
import CatalogPage from '../pages/CatalogPage'



const Routing = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/products/:id' element={<CardPage/>}/>
          <Route path='/products/catalog' element={<CatalogPage/>}/>
      </Routes>
    </>
  )
}

export default Routing
