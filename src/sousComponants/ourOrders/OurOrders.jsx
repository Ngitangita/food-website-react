import style from './ourOrders.module.css'

export function OurOrders() {
    return (
        <div className={style.Order}>
            <span> Order Now</span>
            <h2>FREE AND FAST </h2>

            <div className={style.OrdersInput}>
                <label htmlFor="">
                    your name
                    <input type="text" placeholder='Entrer your name' />
                </label>
                <label htmlFor="">
                    your number
                    <input type="number" placeholder='Entrer your number' />
                </label>
                <label htmlFor="">
                    your order
                    <input type="text" placeholder='Entrer food name' />
                </label>
                <label htmlFor="">
                    additional food
                    <input type="text" placeholder='extra with food' />
                </label>
                <label htmlFor="">
                    how musch
                    <input type="number" placeholder='how many orders' />
                </label>
                <label htmlFor="">
                    date and time
                    <input type="datetime-local" />
                </label>
                <label htmlFor="">
                    your address
                    <textarea name="" id="" cols="30" rows="10" placeholder='enter your address'></textarea>
                </label>
                <label htmlFor="">
                    your message
                    <textarea name="" id="" cols="30" rows="10" placeholder='enter your message'></textarea>
                </label>

                <button className={style.button}>Order Now</button>
            </div>
        </div>
    )
}
