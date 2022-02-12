import React from "react";
import "./Dashboard.css";
import CategoriesAside from "../components/CategoriesAside";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { Container, Grid } from "semantic-ui-react";

export default function Dashboard() {
	return (
		<div className="Dashboard">
			<Navbar />
			<Container className="main">
				<Grid>
					<Grid.Row>
						<Grid.Column width={4}>
							<CategoriesAside />
						</Grid.Column>
						<Grid.Column width={12}>
							<ProductList /> {/* TODO Replace with router outlet */}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}
