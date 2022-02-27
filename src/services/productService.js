import axios from "axios";

export default class ProductService {
	baseUrl = "http://localhost:8080/api/products";

	getAll() {
		return axios.get(this.baseUrl + "/getAll");
	}

	getById(id) {
		return axios.get(this.baseUrl + "/getById", {
			params: { id: id },
		});
	}

	add(productAddModel) {
		return axios.post(this.baseUrl + "/add", {
			name: productAddModel.name,
			quantityPerUnit: productAddModel.quantityPerUnit,
			unitPrice: productAddModel.unitPrice,
			unitsInStock: productAddModel.unitsInStock,
			category: {
				id: productAddModel.categoryId,
			},
		});
	}
}
