import style from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHeart, faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';


export function Navbar() {
  return (
    <div className={style.Navbar}>
        <span><FontAwesomeIcon icon={faUtensils} className={style.faUtensils}/>Resto.</span>
        <ul>
          <a href="#home" className={style.active}>Home</a>
          <a href="#dishes">Dishes</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#review">Review</a>
          <a href="#order">Order</a>
        </ul>
        <div className={style.NavIcon}>
        <FontAwesomeIcon icon={faSearch} className={style.FontAwesomeIcon}/>
        <FontAwesomeIcon icon={faHeart} className={style.FontAwesomeIcon}/>
        <FontAwesomeIcon icon={faShoppingCart} className={style.FontAwesomeIcon}/>
     
        </div>
    </div>
  )
}
