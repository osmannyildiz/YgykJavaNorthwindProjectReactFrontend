import axios from "axios";

export default class ProductService {
	getAll() {
		return axios.get("http://localhost:8080/api/products/getAll");
	}

	getById(id) {
		return axios.get("http://localhost:8080/api/products/getById", {
			params: { id: id },
		});
	}
}
