
import { useState, useEffect } from 'react'
import style from './home.module.css'

export function Home() {
    const sliders = [
        {
            dish: `Our Special Dish`,
            dishName: 'Spicy Noodles',
            p: `Lorem ipsum dolor sit amet consectetur  adipisicing elit. Sit natus dolor cumque?`,
            button: 'Order Now',
            image: `/images/home-img-1.png`,
        },
        {
            dish: `Our Special Dish`,
            dishName: 'Fried Chicken',
            p: `Lorem ipsum dolor sit amet consectetur  adipisicing elit. Sit natus dolor cumque?`,
            button: 'Order Now',
            image: `/images/home-img-2.png`,
        },
        {
            dish: `Our Special Dish`,
            dishName: 'Hot Pizza',
            p: `Lorem ipsum dolor sit amet consectetur  adipisicing elit. Sit natus dolor cumque?`,
            button: 'Order Now',
            image: `/images/home-img-3.png`,
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    useEffect(() => {
        const intervale = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % (sliders.length))
        }, 5000);
        return () => clearInterval(intervale);
    }, [sliders.length]);

    const handleDotClick = (i) => {
        setCurrentSlide(i)
    }

    return (
        <div className={style.Home}>
            <div className={style.homes} style={{ transform: `translate(${-currentSlide * 1050}px)`,
        }}>
                {sliders.map((slid, i) => (
                    <div key={i} className={`${style.slider} ${i === currentSlide ? style.active : ''}`}>
                        <div className={style.home}>
                            <span>{slid.dish}</span>
                            <h1>{slid.dishName}</h1>
                            <p>{slid.p}</p>
                            <button className={style.button}>{slid.button}</button>
                        </div>
                        <img src={slid.image} alt={slid.dishName} />
                    </div>
                ))}
            </div>
            <div className={style.dots}>
                {sliders.map((_, i) => (
                    <span key={i}
                        className={`${style.dot} ${i === currentSlide ? style.activeDot : ''}`}
                        onClick={() => handleDotClick(i)}
                    ></span>
                ))}
            </div>
        </div>
    )
}
