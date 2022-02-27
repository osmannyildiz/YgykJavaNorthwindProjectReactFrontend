import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";
import CategoriesAside from "../components/CategoriesAside";
import Navbar from "../components/Navbar";
import CartDetail from "../pages/CartDetail";
import ProductAdd from "../pages/ProductAdd";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import "./Dashboard.css";

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
							<Switch>
								<Route path="/products/add" component={ProductAdd} />
								<Route path="/products/:id" component={ProductDetail} />
							</Switch>
							<Route path="/cart" component={CartDetail} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}
