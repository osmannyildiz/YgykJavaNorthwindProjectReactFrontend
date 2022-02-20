import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";

export default function SignedInActions(props) {
	return (
		<Menu.Menu position="right">
			<CartSummary />
			<Menu.Item>
				<Image
					avatar
					spaced="right"
					src="https://i.kym-cdn.com/photos/images/original/001/250/216/305.jpg"
				/>
				<Dropdown text="Engin" pointing="top right">
					<Dropdown.Menu>
						<Dropdown.Item text="Bilgilerim" icon="info" />
						<Dropdown.Item
							text="Çıkış Yap"
							icon="sign-out"
							onClick={props.handleSignOut}
						/>
					</Dropdown.Menu>
				</Dropdown>
			</Menu.Item>
		</Menu.Menu>
	);
}
