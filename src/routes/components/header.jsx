import "../../../src/index.css"
import { Link } from "@tanstack/react-router"
import { createFileRoute } from "@tanstack/react-router"
import PropTypes from "prop-types"
import CartContext from "../../utilities/contexts/context"
import { useContext } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../../utilities/firebase-config/config"

const Header = () => {

	const {noOfItemsInCart} = useContext(CartContext)

	const logOut = () => {
		signOut(auth)
	}


	return (
		<header >
			<Link to={'/'}>
			<div>
				<img src="/logo.png" alt="logo" />
			</div>
			</Link>
			<div>
				<ul className="header-list">
					<li>Jewelry</li>
					<li>Collection</li>
					<li>Outlet</li>
					<li>Production</li>
				</ul>
			</div>
			<div>
				<ul className="header-icons">
					<li><i className="bi bi-search"></i></li>
					<li><i className="bi bi-heart"></i></li>
					<li><i className="bi bi-person"></i></li>
				</ul>
			</div>
			<Link to={'/cartPage'}>
				<div className={ 'cart'}>
					🛒
					<div className="product-no">{noOfItemsInCart}</div>
				</div>
			</Link>
			<button onClick={() => logOut()} className="check">Sign Out</button>
		</header>
	)
}

export default Header
export const Route = createFileRoute('/components/header')({
	component : Header
})

Header.propTypes = {
	items : PropTypes.number
}