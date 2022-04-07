import React from "react";
import ProductDetail from "../components/ProductDetail";
import Centered from "../layouts/Centered";

export default function ProductDetailPage() {
	return <Centered main={<ProductDetail />} />;
}
