import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import style from './ourReviews.module.css'

export function OurReviews() {
    const reviewSlider = [
        {
            image: `/images/pic-1.png`,
            name: 'Jhon Deo'
        },
        {
            image: `/images/pic-2.png`,
            name: 'Jhon Deo'
        },
        {
            image: `/images/pic-3.png`,
            name: 'Jhon Deo'
        },
        {
            image: `/images/pic-4.png`,
            name: 'Jhon Deo'
        }
    ]

    const [slider, setSlider] = useState(0)

    useEffect(() => {
        const intervale = setInterval(() => {
            setSlider((prevSlide) => (prevSlide + 1) % (reviewSlider.length))
        }, 5000);
        return () => clearInterval(intervale);
    }, [reviewSlider.length])

    return (
        <div className={style.Review}>
            <span>customer's review</span>
            <h2>WHAT THEY SAY </h2>
            <div className={style.reviews}  >
                {reviewSlider.map((review, i) => (
                    <div key={i} className={`${style.reviewSlider} ${i === slider ? style.active : ''}`}
                        style={{ transform: `translate(${-slider * 155}px)` }}
                    >
                        <div className={style.reviewSlid}>
                            <img src={review.image} alt="" />
                            <div>
                                <span className={style.name}>{review.name}</span>
                                <div className={style.IconStar}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faQuoteRight} className={style.iconRigth} />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sit fugiat consequuntur repellendus aperiam deserunt nihil,
                            corporis fugit voluptatibus voluptate totam neque illo placeat
                            eius quis laborum aspernatur quibusdam. Ipsum, magni.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
