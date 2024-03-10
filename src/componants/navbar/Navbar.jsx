import style from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHeart, faSearch, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export function Navbar() {
  const [isVisibel, setIsVisibel] = useState(false)

  const handleClick = () => {
    setIsVisibel(!isVisibel)
  }


  return (
    <>
      {isVisibel && (<>
        <span className={style.isVisibel}>
          <label htmlFor="search">
            <input type="text" placeholder='Search here...' id='search' />
            <FontAwesomeIcon icon={faSearch} className={style.search} />
          </label>
          <FontAwesomeIcon icon={faTimes} className={style.close} onClick={handleClick} />
        </span>
      </>
      )}
      <div className={style.Navbar}>
        <span><FontAwesomeIcon icon={faUtensils} className={style.faUtensils} />Resto.</span>

        <ul>
          <Link to="/" className={style.active}>Home</Link>
          <Link to="/dishes">Dishes</Link>
          <Link to="/aboutUs">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/review">Review</Link>
          <Link to="/order">Order</Link>
        </ul>
        <div className={style.NavIcon}>
          <FontAwesomeIcon icon={faSearch} className={style.FontAwesomeIcon} onClick={handleClick} />
          <FontAwesomeIcon icon={faHeart} className={style.FontAwesomeIcon} />
          <FontAwesomeIcon icon={faShoppingCart} className={style.FontAwesomeIcon} />
        </div>
      </div>

    </>
  )
}
