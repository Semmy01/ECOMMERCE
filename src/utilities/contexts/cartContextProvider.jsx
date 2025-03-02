import CartContext from "./context"
import { useState } from "react"

const CartContextProvider = ({children}) => {


 let [ noOfItemsInCart , setNoOfItemsInCart] = useState(0)
 const [ cartItems , setCartItems ] = useState([])

  return (
    <CartContext.Provider value={{noOfItemsInCart , setCartItems , setNoOfItemsInCart ,cartItems}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider