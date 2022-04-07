import React from "react";
import CategoriesAside from "../components/CategoriesAside";
import ProductList from "../components/ProductList";
import Dashboard from "../layouts/Dashboard";

export default function ProductsPage() {
	return <Dashboard aside={<CategoriesAside />} main={<ProductList />} />;
}
