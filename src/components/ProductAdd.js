import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, FormField, Label } from "semantic-ui-react";
import * as Yup from "yup";
import CategoryService from "../services/categoryService";
import ProductService from "../services/productService";
import MyInputUsingHook from "./MyInputUsingHook";
import MyTextInput from "./MyTextInput";

export default function ProductAdd() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		CategoryService.getAllWithSortingByName().then((resp) =>
			setCategories(resp.data.data)
		);
	}, []);

	const initialValues = {
		name: "",
		quantityPerUnit: "",
		unitPrice: 0,
		unitsInStock: 1,
		categoryId: 0,
	};
	const validationSchema = Yup.object({
		name: Yup.string().required("Lütfen ürün adı girin."),
		quantityPerUnit: Yup.string().required("Lütfen birim tanımı girin."),
		unitPrice: Yup.number()
			.min(0.01, "Birim fiyatı 0'dan büyük olmalıdır.")
			.required("Lütfen birim fiyatı girin."),
		unitsInStock: Yup.number()
			.min(1, "Stok adedi en az 1 olmalıdır.")
			.required("Lütfen stok adedi girin."),
		categoryId: Yup.number()
			.min(1, "Lütfen kategori seçin.")
			.required("Lütfen kategori seçin."),
	});
	function handleProductAddFormSubmit(values) {
		ProductService.add(values).then((resp) => {
			if (resp.data.success) {
				toast.success("Ürün eklendi.");
			} else {
				toast.error(`Ürün eklenemedi: "${resp.data.message}"`);
			}
		});
	}

	return (
		<div>
			<h2>Ürün Ekle</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleProductAddFormSubmit}
			>
				<Form className="ui form" style={{ textAlign: "left" }}>
					<MyTextInput name="name" label="Ürün Adı" />
					<MyInputUsingHook name="quantityPerUnit" label="Birim Tanımı" />
					<MyInputUsingHook
						type="number"
						name="unitPrice"
						label="Birim Fiyatı"
					/>
					<MyInputUsingHook
						type="number"
						name="unitsInStock"
						label="Stok Adedi"
					/>
					<FormField>
						<label>Kategori</label>
						<Field as="select" name="categoryId" placeholder="Kategori">
							<option value="0" disabled>
								Kategori
							</option>
							{categories.map((category) => (
								<option value={category.id} key={category.id}>
									{category.name}
								</option>
							))}
						</Field>
						<ErrorMessage
							name="categoryId"
							render={(error) => <Label pointing color="red" content={error} />}
						/>
					</FormField>
					<Button type="submit" color="blue">
						Ekle
					</Button>
				</Form>
			</Formik>
		</div>
	);
}
