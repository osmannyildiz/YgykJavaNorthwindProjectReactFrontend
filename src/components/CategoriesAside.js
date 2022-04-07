import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import { useQuery } from "../hooks/useQuery";
import CategoryService from "../services/categoryService";
import CategoriesAsideItem from "./CategoriesAsideItem";

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
				<CategoriesAsideItem
					name="Hepsi"
					to="/products"
					active={!activeCategory}
				/>
				{categories.map((category) => (
					<CategoriesAsideItem
						key={category.id}
						name={category.name}
						to={`/products?categoryId=${category.id}`}
						active={activeCategory && +activeCategory.id === category.id}
					/>
				))}
			</Menu>
		</div>
	);
}
