import convertPrice from "./priceConverter";
import { bestSellersProducts } from "./products";
import { useState } from "react";
import {Header} from "./header";
import Outlets from "./outlets";



const BestSelllersProductSection = () => {

 let [ noOfItemsInCart , setNoOfItemsInCart] = useState(0)
 console.log(noOfItemsInCart)

 function increaseCart (){
  setNoOfItemsInCart(noOfItemsInCart + 1)
 }


  return (
    <>
      <Header items={noOfItemsInCart}/>
      
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
            <button onClick={() => increaseCart()} className="add-to-cart">Add To Cart</button>
          </div>
         </div>
        ))
      }
    </section>
    <Outlets items={noOfItemsInCart} addToCart={increaseCart}/>
    </>
  )
}

export default BestSelllersProductSection



