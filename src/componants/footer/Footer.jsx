import style from './footer.module.css'

export function Footer() {
    return (
        <div className={style.Footer}>
            <div className={style.FooterLink}>
                <div className={style.Link}>
                    <span>locations</span>
                    <a href="#">india</a>
                    <a href="#">japan</a>
                    <a href="#">russia</a>
                    <a href="#">USA</a>
                    <a href="#">france</a>
                </div>
                <div  className={style.Link}>
                    <span>quick links</span>
                    <a href="#">home</a>
                    <a href="#">dishes</a>
                    <a href="#">about</a>
                    <a href="#">menu</a>
                    <a href="#">reivew</a>
                    <a href="#">order</a>
                </div>
                <div  className={style.Link}>
                    <span>contact info</span>
                    <a href="#">+123-456-7890</a>
                    <a href="#">+111-222-3333</a>
                    <a href="#">shaikhanas@gmail.com</a>
                    <a href="#">anasbhai@gmail.com</a>
                    <a href="#">mumbai, india - 400104</a>
                </div>
                <div  className={style.Link}>
                    <span>follow us</span>
                    <a href="#">facebook</a>
                    <a href="#">twitter</a>
                    <a href="#">instagram</a>
                    <a href="#">linkedin</a>
                </div>
            </div>
            <p>copyright @ 2021 by <span>mr. web designer</span></p>
        </div>
    )
}
