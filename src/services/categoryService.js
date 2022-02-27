import axios from "axios";

export default class CategoryService {
	baseUrl = "http://localhost:8080/api/categories";

	getAllWithSortingByName(descending = false) {
		return axios.get(this.baseUrl + "/getAllWithSortingByName", {
			params: { descending: descending },
		});
	}

	getById(id) {
		return axios.get(this.baseUrl + "/getById", {
			params: { id: id },
		});
	}
}
