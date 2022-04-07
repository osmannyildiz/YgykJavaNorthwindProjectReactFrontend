import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { useQuery } from "../hooks/useQuery";
import CategoryService from "../services/categoryService";

export default function CategoriesAside() {
	const { categoryId } = useQuery();

	const [categories, setCategories] = useState([]);
	const [activeCategory, setActiveCategory] = useState(null);

	useEffect(() => {
		CategoryService.getAllWithSortingByName().then((resp) =>
			setCategories(resp.data.data)
		);
	}, []);

	useEffect(() => {
		if (categoryId) {
			setActiveCategory(categories.find((c) => c.id === +categoryId));
		} else {
			setActiveCategory(null);
		}
	}, [categoryId, categories]);

	return (
		<div>
			<h2>Kategoriler</h2>
			<Menu vertical fluid>
				<Link to={`/products`}>
					<Menu.Item name="_all" active={!activeCategory}>
						Hepsi
					</Menu.Item>
				</Link>
				{categories.map((category) => (
					<Link key={category.id} to={`/products?categoryId=${category.id}`}>
						<Menu.Item
							name={category.name}
							active={activeCategory && +activeCategory.id === category.id}
						>
							{category.name}
						</Menu.Item>
					</Link>
				))}
			</Menu>
		</div>
	);
}
