import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Menu } from "semantic-ui-react";
import SignedInActions from "./SignedInActions";
import SignedOutActions from "./SignedOutActions";

export default function Navbar() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const history = useHistory();

	function handleSignIn() {
		setIsSignedIn(true);
	}

	function handleSignOut() {
		setIsSignedIn(false);
		history.replace("/");
	}

	return (
		<Menu inverted fixed="top" style={{ minHeight: "54px" }}>
			<Container>
				<Menu.Item header>Reaktif Market</Menu.Item>
				<Menu.Item
					link
					name="home"
					content="Ana Sayfa"
					as={NavLink}
					to="/"
					exact
					/*active={activeItem === "home"}
					onClick={this.handleItemClick}*/
				/>
				<Menu.Item
					link
					name="productAdd"
					content="Ürün Ekle"
					as={NavLink}
					to="/products/add"
					/*active={activeItem === "messages"}
					onClick={this.handleItemClick}*/
				/>

				{isSignedIn ? (
					<SignedInActions handleSignOut={handleSignOut} />
				) : (
					<SignedOutActions handleSignIn={handleSignIn} />
				)}
			</Container>
		</Menu>
	);
}
