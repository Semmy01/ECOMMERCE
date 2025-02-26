import { outletProduts } from "../../utilities/products"
import convertPrice from "../../utilities/priceConverter"
// import { useContext } from "react"
// import { cartContext } from "./best-sellers"
import { createFileRoute } from "@tanstack/react-router"

const Outlets = ({items , addToCart}) => {

// const [noOfItemsInCart , setNoOfItemsInCart] = useContext(cartContext)

  return (
    <>
    <section className="best-sellers-section">
      <div className="section-name">
        Outlet
      </div>
      <div className="view-all">
        <a href="#">View All</a>
      </div>
    </section>

    <section className="outlet-products ">
      {
        outletProduts.map((product , index) => (
          <div key={index} className="outlet-product-container">
            <div className="product-content-wrapper">
              <img className="product-image" src={product.image} alt="image-product" />
              <p className="product-name">{product.name.toLocaleUpperCase()}</p>
              <p className="product-price">{convertPrice(product.price)}</p>
              <button onClick={() => addToCart()} className="add-to-cart">Add To Cart</button>
            </div>
          </div>
        ))
      }
    </section>
    </>
  )
}

export default Outlets
export const Route = createFileRoute('/components/outlets')({
  component : Outlets
})