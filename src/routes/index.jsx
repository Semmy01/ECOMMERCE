import convertPrice from "../utilities/priceConverter";
import { bestSellersProducts } from "../utilities/products";
import { useState } from "react";
import  Header from "./components/header";
import Outlets from "./components/outlets";
import { createFileRoute } from "@tanstack/react-router";
import CartPage from "./cartPage";

const Index = () => {

 let [ noOfItemsInCart , setNoOfItemsInCart] = useState(0)
 const [ cartItems , setCartItems ] = useState([])

 function increaseCart (){
  setNoOfItemsInCart(noOfItemsInCart + 1)
 }

 const getCart = (product) => {
  increaseCart()
  setCartItems([...cartItems , product])
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
        bestSellersProducts.map((product ) => (
         <div key={product.product_id} className="product-container" >
           <div className="product-content-wrapper">
            <img className="product-img" src={product.image} alt="product-image" />
            <p className="product-name">{product.name.toLocaleUpperCase()}</p>
            <p className="product-price">{convertPrice(product.price)}</p>
            <button onClick={() => getCart(product)} className="add-to-cart">Add To Cart</button>
          </div>
         </div>
        ))
      }
    </section>
    <Outlets  getCart={getCart} cartItems={cartItems}/>
    <CartPage cartItems={cartItems}/>
    </>
  )
}

export default Index


export const Route = createFileRoute('/')({
  component : Index
})



