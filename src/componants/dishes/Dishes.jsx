import { AboutUs } from "../../sousComponants/aboutUs/AboutUs";
import { OurDishes } from "../../sousComponants/ourDishes/OurDishes";
import { OurHome } from "../../sousComponants/ourHomes/OurHome";
import { OurMenus } from "../../sousComponants/ourMenus/OurMenus";
import { OurOrders } from "../../sousComponants/ourOrders/OurOrders";
import { OurReviews } from "../../sousComponants/ourReviews/OurReviews";
import { Footer } from "../footer/Footer";

export function Dishes() {
    return (
        <>
         <OurHome />
         <OurDishes />
         <AboutUs />
         <OurMenus />
         <OurReviews />
         <OurOrders />
         <Footer />
      </>
    )
}
