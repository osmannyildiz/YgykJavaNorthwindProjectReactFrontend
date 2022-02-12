import React from "react";
import { Dropdown } from "semantic-ui-react";

export default function CartSummary() {
	return (
		<Dropdown item text="Sepet (0)">
			<Dropdown.Menu>
				<Dropdown.Item>English</Dropdown.Item>
				<Dropdown.Item>Russian</Dropdown.Item>
				<Dropdown.Item>Spanish</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
