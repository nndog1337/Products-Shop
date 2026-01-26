
import { Routes, Route } from 'react-router'
import MainPage from '../pages/MainPage/MainPage'
import CardPage from '../pages/MainPage/CardPage'



const Routing = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/products/:id' element={<CardPage/>}/>
      </Routes>
    </>
  )
}

export default Routing
