import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faDollarSign, faHeadset } from '@fortawesome/free-solid-svg-icons';
import style from './aboutUs.module.css'

export function AboutUs() {
    return (
        <div className={style.AboutUs}>
            <span>  About Us</span>
            <h2>PWHY CHOOSE US? </h2>
            <div className={style.About}>
                <img src="/images/about-img.png" alt="" />
                <div className={style.bestFood}>
                    <h3>Best Food In The Country</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                        sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem,
                        saepe numquam quod reprehenderit rem?
                        Tempora aut soluta odio corporis nihil!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo.
                        Sit porro illo eos cumque deleniti iste alias, eum natus.
                    </p>

                    <div className={style.buttons}>
                        <button className={`${style.button} ${style.btns}`}>
                            <FontAwesomeIcon icon={faShippingFast} className={style.buttonsIcon} />
                            Free Delivery
                        </button>
                        <button className={`${style.button} ${style.btns}`}>
                            <FontAwesomeIcon icon={faDollarSign} className={style.buttonsIcon} />
                            Easy Payments
                        </button>
                        <button className={`${style.button} ${style.btnsHeadset}`}>
                            <FontAwesomeIcon icon={faHeadset} className={style.buttonsIcon} />
                            24/7 Service
                        </button>
                    </div>
                    <button className={style.btn}>Learn More</button>
                </div>
            </div>
        </div>
    )
}
