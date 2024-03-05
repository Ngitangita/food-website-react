
import { Dishes } from './componants/dishes/Dishes'
import { Home } from './componants/home/Home'
import { Navbar } from './componants/navbar/Navbar'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Dishes/>
    </div>
  )
}
