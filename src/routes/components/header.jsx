import "../../../src/index.css"
import { Link } from "@tanstack/react-router"
import { createFileRoute } from "@tanstack/react-router"
import PropTypes from "prop-types"

const Header = ({items}) => {


	return (
		<header >
			<div>
				<img src="/logo.png" alt="logo" />
			</div>
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
				<div className={ 'cart-anime'}>
					🛒
					<div className="product-no">{items}</div>
				</div>
			</Link>
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