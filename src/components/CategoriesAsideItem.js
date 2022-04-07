import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function CategoriesAsideItem(props) {
	return (
		<Menu.Item name={props.name} active={props.active} style={{ padding: "0" }}>
			<Link
				to={props.to}
				style={{
					display: "block",
					padding: "13px 16px",
					color: "inherit",
				}}
			>
				{props.name}
			</Link>
		</Menu.Item>
	);
}
