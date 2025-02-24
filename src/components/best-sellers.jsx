import convertPrice from "./priceConverter";
import { bestSellersProducts } from "./products";
import { useState } from "react";
import { createContext } from "react";
import {Header} from "./header";

export const cartContext = createContext()

const BestSelllersProductSection = () => {

 let [ noOfItemsInCart , setNoOfItemsInCart] = useState(0)
 console.log(noOfItemsInCart)


  return (
    <>
    <cartContext.Provider value={noOfItemsInCart}> 
      <Header/>
      </cartContext.Provider>
    <section className="best-sellers-section">
      <div className="section-name">Bestsellers</div>
      <div className="view-all">
        <a href="#">View All </a>
      </div>
    </section>

    <section className="main-product-container">
      {
        bestSellersProducts.map((product , index) => (
         <div key={index} className="product-container" >
           <div className="product-content-wrapper">
            <img className="product-img" src={product.image} alt="product-image" />
            <p className="product-name">{product.name.toLocaleUpperCase()}</p>
            <p className="product-price">{convertPrice(product.price)}</p>
            <button onClick={() => setNoOfItemsInCart(noOfItemsInCart+1)} className="add-to-cart">Add To Cart</button>
          </div>
         </div>
        ))
      }
    </section>
    </>
  )
}

export default BestSelllersProductSection


