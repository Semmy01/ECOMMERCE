import { createFileRoute } from '@tanstack/react-router'
import PropTypes from 'prop-types'; 
import '../../src/index.css'
import convertPrice from '../utilities/priceConverter';
import Header from './components/header';
import { useContext } from 'react';
import CartContext from '../utilities/contexts/context';



const CartPage = () => {

const {noOfItemsInCart} = useContext(CartContext)
const {setNoOfItemsInCart} = useContext(CartContext)
const {cartItems} = useContext(CartContext)
const {setCartItems} = useContext(CartContext)


  const totalAmount = cartItems.reduce((total, cartItem) => total + cartItem.price, 0);

  function reduceNoOfItems () {
    setNoOfItemsInCart(noOfItemsInCart-1)
  }

  const removeItem = (id) => {
    reduceNoOfItems()
    const remainItems = cartItems.filter((cartItem) => cartItem.product_id !== id) 
    setCartItems(remainItems)
    console.log(noOfItemsInCart)
  }
  return (
    <>
    {
      cartItems.length === 0? 
      (
        <div className="no-items">
          <h1>There are no items in your cart</h1>
        </div>
      ) : (
        <section className='check-out-section'>
          <p className='order-summary-p'>Order Summary</p>
        <div className='checkout-main-wrapper'>
        <div>
        {
          cartItems.map((cartItem) => (
            <div className='order-summary' key={cartItem.product_id}>
              <div className='order-summary-image'><img src={cartItem.image} alt="" /></div>
              <div className='order-summary-item-name'>{cartItem.name.toUpperCase()}</div>
              <div className='order-summary-item-price'>{convertPrice(cartItem.price)}</div>
              <button onClick={() => removeItem(cartItem.product_id)} className='remove'>Remove</button>
            </div>
          ))
        }
        </div>
          <div className='payment-summary'>
            {
              cartItems.map((cartItem) => (
                <div>
                  <div className='wrapper'>
                    <img src={cartItem.image} alt="" />
                    <div className='description-wrapper'>
                      <p className='order-summary-item-name'>{cartItem.name.toUpperCase()}</p>
                      <p className='order-summary-item-price'>{convertPrice(cartItem.price)}</p>
                    </div>
                  </div>
                </div>
              ))
            }
            <section className='coupon-section'>
              <input type="text" className='coupon-input' placeholder='Coupon code'/>
              <button className='add-coupon'>Add Coupon</button>
            </section>

            <section className='total-section'>
              <div>Total</div>
              <div className='total-price'>{convertPrice(totalAmount)}</div>
            </section>

            <div className='checkout-button-wrapper'>
              <button className='check'>Checkout</button>
            </div>
          </div>
        </div>

      </section>
      )
    } 
    </>
  )
}

export default CartPage
export const Route = createFileRoute('/cartPage')({
  component: CartPage,
})

CartPage.propTypes = { 
  cartItems: PropTypes.arrayOf(PropTypes.any).isRequired, 
  setCartItems : PropTypes.func,
  setNoOfItemsInCart : PropTypes.func,
  noOfItemsInCart : PropTypes.number
};
