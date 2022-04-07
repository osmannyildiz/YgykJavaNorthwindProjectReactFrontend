import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import { useQuery } from "../hooks/useQuery";
import ProductService from "../services/productService";
import { addToCart } from "../store/actions/cartActions";

export default function ProductList() {
	const { categoryId } = useQuery();

	const dispatch = useDispatch();
	const [allProducts, setAllProducts] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		ProductService.getAll().then((resp) => setAllProducts(resp.data.data));
	}, []);

	useEffect(() => {
		if (categoryId) {
			setProducts(allProducts.filter((p) => p.category.id === +categoryId));
		} else {
			setProducts(allProducts);
		}
	}, [categoryId, allProducts]);

	function handleAddToCart(product) {
		dispatch(addToCart(product));
		toast.success(`${product.name} sepete eklendi!`);
	}

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
					<Table.HeaderCell style={{ minWidth: "125px" }}>
						İşlemler
					</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				{products.map((product) => (
					<Table.Row key={product.id}>
						<Table.Cell>{product.id}</Table.Cell>
						<Table.Cell>
							<Link to={`/products/${product.id}`}>{product.name}</Link>
						</Table.Cell>
						<Table.Cell>{product.quantityPerUnit}</Table.Cell>
						<Table.Cell>₺{product.unitPrice.toFixed(2)}</Table.Cell>
						<Table.Cell>{product.category.name}</Table.Cell>
						<Table.Cell>{product.unitsInStock}</Table.Cell>
						<Table.Cell>
							<Button
								primary
								size="tiny"
								onClick={() => handleAddToCart(product)}
							>
								Sepete ekle
							</Button>
						</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>

			<Table.Footer>
				<Table.Row>
					<Table.HeaderCell colSpan="7">
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
