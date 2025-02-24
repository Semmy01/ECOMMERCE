import "../index.css"


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
			<div className="cart">
			🛒
			<div className="product-no">{items}</div>
			</div>
			
		</header>
	)
}

export {Header} 