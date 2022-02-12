import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductList() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		let productService = new ProductService();
		productService.getAll().then((resp) => setProducts(resp.data.data));
	});

	return (
		<Table celled>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>#</Table.HeaderCell>
					<Table.HeaderCell>İsmi</Table.HeaderCell>
					<Table.HeaderCell>Birim Tanımı</Table.HeaderCell>
					<Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
					<Table.HeaderCell>Kategori İsmi</Table.HeaderCell>
					<Table.HeaderCell>Stok Adedi</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				{products.map((product) => (
					<Table.Row key={product.id}>
						<Table.Cell>{product.id}</Table.Cell>
						<Table.Cell>{product.name}</Table.Cell>
						<Table.Cell>{product.quantityPerUnit}</Table.Cell>
						<Table.Cell>₺{product.unitPrice.toFixed(2)}</Table.Cell>
						<Table.Cell>{product.category.name}</Table.Cell>
						<Table.Cell>{product.unitsInStock}</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>

			<Table.Footer>
				<Table.Row>
					<Table.HeaderCell colSpan="6">
						<Menu floated="right" pagination>
							<Menu.Item as="a" icon>
								<Icon name="chevron left" />
							</Menu.Item>
							<Menu.Item as="a">1</Menu.Item>
							<Menu.Item as="a">2</Menu.Item>
							<Menu.Item as="a">3</Menu.Item>
							<Menu.Item as="a">4</Menu.Item>
							<Menu.Item as="a" icon>
								<Icon name="chevron right" />
							</Menu.Item>
						</Menu>
					</Table.HeaderCell>
				</Table.Row>
			</Table.Footer>
		</Table>
	);
}
