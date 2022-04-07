import React from "react";
import { Container } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import "./Centered.css";

export default function Dashboard(props) {
	return (
		<div className="layout-centered">
			<Navbar />
			<Container text className="main">
				{props.main}
			</Container>
		</div>
	);
}
