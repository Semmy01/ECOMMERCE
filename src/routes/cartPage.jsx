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
        <div className='checkout'>CHECKOUT</div>
        {
          cartItems.map((cartItem, index) => (
            <div className='main-wrapper' key={index}>
              <div className='cart-item-wrapper'>
                <img src={cartItem.image} alt="item-image" />
                <div className='price-displayer'>
                  {convertPrice(cartItem.price)}
                </div>
                <div>
                  <button onClick={() => removeItem(cartItem.product_id)} className='remove'>Remove</button>
                </div>
              </div>
            </div>
          ))
        }

        <div className='total'> 
          <div>
            Total :
          </div>
          <div>
            {
              convertPrice(totalAmount)
            }
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
