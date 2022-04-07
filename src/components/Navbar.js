import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import AuthContext from "../contexts/authContext";
import SignedInActions from "./SignedInActions";
import SignedOutActions from "./SignedOutActions";

export default function Navbar() {
	const authContext = useContext(AuthContext);

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
				/>
				<Menu.Item
					link
					name="productAdd"
					content="Ürün Ekle"
					as={NavLink}
					to="/products/add"
				/>

				{authContext.isSignedIn ? (
					<SignedInActions handleSignOut={authContext.handleSignOut} />
				) : (
					<SignedOutActions handleSignIn={authContext.handleSignIn} />
				)}
			</Container>
		</Menu>
	);
}
