import style from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHeart, faSearch, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


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
          <NavLink to="/" className={({ isActive }) => isActive ? style.active : "/"}>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? style.active : ""} to="/dishes">Dishes</NavLink>
          <NavLink className={({ isActive }) => isActive ? style.active : ""} to="/aboutUs">About</NavLink>
          <NavLink className={({ isActive }) => isActive ? style.active : ""} to="/menu">Menu</NavLink>
          <NavLink className={({ isActive }) => isActive ? style.active : ""} to="/review">Review</NavLink>
          <NavLink className={({ isActive }) => isActive ? style.active : ""} to="/order">Order</NavLink>
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
