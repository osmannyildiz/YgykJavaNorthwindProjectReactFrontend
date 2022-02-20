import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown, Label } from "semantic-ui-react";

export default function CartSummary() {
	const { cartItems } = useSelector((state) => state.cartReducer);

	return (
		<Dropdown item text={`Sepet (${cartItems.length})`} direction="left">
			<Dropdown.Menu>
				{cartItems.length > 0 ? (
					cartItems.map((cartItem) => (
						<Dropdown.Item key={cartItem.product.id}>
							{cartItem.product.name}
							<Label
								color="blue"
								style={{ marginLeft: "1em", marginRight: "0" }}
							>
								{cartItem.quantity}
							</Label>
						</Dropdown.Item>
					))
				) : (
					<Dropdown.Item>
						<em>Sepetiniz boş.</em>
					</Dropdown.Item>
				)}
				<Dropdown.Divider />
				<Dropdown.Item as={Link} to="/cart">
					Sepete git
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
