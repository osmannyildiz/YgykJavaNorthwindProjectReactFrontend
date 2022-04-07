import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

export default function Dashboard(props) {
	return (
		<div className="layout-dashboard">
			<Navbar />
			<Container className="main">
				<Grid>
					<Grid.Row>
						<Grid.Column width={4}>{props.aside}</Grid.Column>
						<Grid.Column width={12}>{props.main}</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}
