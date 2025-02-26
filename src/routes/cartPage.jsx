import { createFileRoute } from '@tanstack/react-router'
import PropTypes from 'prop-types'; 
import '../../src/index.css'
import convertPrice from '../utilities/priceConverter';


const CartPage = ({ cartItems }) => {
  
  const totalAmount = cartItems.reduce((total, cartItem) => total + cartItem.price, 0);

  return (
    <>
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
    </>
  )
}

export default CartPage
export const Route = createFileRoute('/cartPage')({
  component: CartPage,
})

CartPage.propTypes = { 
  cartItems: PropTypes.arrayOf(PropTypes.any).isRequired, 
};
