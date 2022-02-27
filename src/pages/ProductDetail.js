import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
	const params = useParams();

	const [product, setProduct] = useState(null);

	useEffect(() => {
		let productService = new ProductService();
		productService
			.getById(params.id)
			.then((resp) => setProduct(resp.data.data));
	}, []);

	return (
		<Card fluid>
			{product && (
				<Card.Content>
					<Card.Header>{product.name}</Card.Header>
					<Card.Meta>{product.category.name}</Card.Meta>
					<Card.Description>
						<p>
							₺{product.unitPrice.toFixed(2)} = {product.quantityPerUnit}
						</p>
						<p>Stokta {product.unitsInStock} adet birim mevcut</p>
					</Card.Description>
				</Card.Content>
			)}
			<Card.Content extra>
				<div className="ui two buttons">
					<Button basic color="green">
						Sepete Ekle
					</Button>
					<Button basic color="orange">
						Favorilere Ekle
					</Button>
				</div>
			</Card.Content>
		</Card>
	);
}
