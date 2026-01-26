
import { Routes, Route } from 'react-router'
import MainPage from '../pages/MainPage/MainPage'


const Routing = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default Routing
