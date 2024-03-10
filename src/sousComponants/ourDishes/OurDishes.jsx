import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import style from './ourDoshes.module.css'

export function OurDishes() {
  return (
      <div className={style.ourDishes}>
        <span> Our Dishes</span>
        <h2>POPULAR DISHES </h2>
        <div className={style.Dishes}>
          <div className={style.DisheFood}>
            <div className={style.FontAwesomeIcon}>
              <FontAwesomeIcon icon={faEye} className={style.Icon} />
              <FontAwesomeIcon icon={faHeart} className={style.Icon} />
            </div>
            <div className={style.Dishe}>
              <img src="/images/dish-1.png" alt="" />
              <p>tasty food</p>
              <div className={style.IconStar}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <div className={style.button}>
                <span>$15.99</span>
                <button>add to cart</button>
              </div>
            </div>
          </div>
          <div className={style.DisheFood}>
            <div className={style.FontAwesomeIcon}>
              <FontAwesomeIcon icon={faEye} className={style.Icon} />
              <FontAwesomeIcon icon={faHeart} className={style.Icon} />
            </div>
            <div className={style.Dishe}>
              <img src="/images/dish-2.png" alt="" />
              <p>tasty food</p>
              <div className={style.IconStar}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <div className={style.button}>
                <span>$15.99</span>
                <button>add to cart</button>
              </div>
            </div>
          </div>
          <div className={style.DisheFood}>
            <div className={style.FontAwesomeIcon}>
              <FontAwesomeIcon icon={faEye} className={style.Icon} />
              <FontAwesomeIcon icon={faHeart} className={style.Icon} />
            </div>
            <div className={style.Dishe}>
              <img src="/images/dish-3.png" alt="" />
              <p>tasty food</p>
              <div className={style.IconStar}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <div className={style.button}>
                <span>$15.99</span>
                <button>add to cart</button>
              </div>
            </div>
          </div>
          <div className={style.DisheFood}>
            <div className={style.FontAwesomeIcon}>
              <FontAwesomeIcon icon={faEye} className={style.Icon} />
              <FontAwesomeIcon icon={faHeart} className={style.Icon} />
            </div>
            <div className={style.Dishe}>
              <img src="/images/dish-4.png" alt="" />
              <p>tasty food</p>
              <div className={style.IconStar}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <div className={style.button}>
                <span>$15.99</span>
                <button>add to cart</button>
              </div>
            </div>
          </div>
          <div className={style.DisheFood}>
            <div className={style.FontAwesomeIcon}>
              <FontAwesomeIcon icon={faEye} className={style.Icon} />
              <FontAwesomeIcon icon={faHeart} className={style.Icon} />
            </div>
            <div className={style.Dishe}>
              <img src="/images/dish-5.png" alt="" />
              <p>tasty food</p>
              <div className={style.IconStar}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <div className={style.button}>
                <span>$15.99</span>
                <button>add to cart</button>
              </div>
            </div>
          </div>
          <div className={style.DisheFood}>
            <div className={style.FontAwesomeIcon}>
              <FontAwesomeIcon icon={faEye} className={style.Icon} />
              <FontAwesomeIcon icon={faHeart} className={style.Icon} />
            </div>
            <div className={style.Dishe}>
              <img src="/images/dish-6.png" alt="" />
              <p>tasty food</p>
              <div className={style.IconStar}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <div className={style.button}>
                <span>$15.99</span>
                <button>add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

