
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dishes } from './componants/dishes/Dishes'
import { Footer } from './componants/footer/Footer'
import { Home } from './componants/home/Home'
import { Menu } from './componants/menu/Menu'
import { Navbar } from './componants/navbar/Navbar'
import { Order } from './componants/order/Order'
import { Review } from './componants/review/Review'
import { About } from './componants/about/About'

export default function App() {
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/review" element={<Review />} />
          <Route path="/order" element={<Order />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
