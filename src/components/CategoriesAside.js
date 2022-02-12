import React from "react";
import { Menu } from "semantic-ui-react";

export default function CategoriesAside() {
	return (
		<div>
			<h2>Kategoriler</h2>
			<Menu vertical fluid>
				<Menu.Item
					name="home"
					/*active={activeItem === "home"}
				onClick={this.handleItemClick}*/
				/>
				<Menu.Item
					name="messages"
					/*active={activeItem === "messages"}
				onClick={this.handleItemClick}*/
				/>
				<Menu.Item
					name="friends"
					/*active={activeItem === "friends"}
				onClick={this.handleItemClick}*/
				/>
			</Menu>
		</div>
	);
}
