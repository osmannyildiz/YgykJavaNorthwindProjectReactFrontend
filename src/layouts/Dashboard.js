import React from "react";
import "./Dashboard.css";
import CategoriesAside from "../components/CategoriesAside";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { Container, Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import CartDetail from "../components/CartDetail";

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
							<Route exact path="/" component={ProductList} />
							<Route exact path="/products" component={ProductList} />
							<Route path="/products/:id" component={ProductDetail} />
							<Route path="/cart" component={CartDetail} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}
