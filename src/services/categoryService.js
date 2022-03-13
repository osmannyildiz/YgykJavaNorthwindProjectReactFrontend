import axios from "axios";

export default class CategoryService {
	static baseUrl = "http://localhost:8080/api/categories";

	static getAllWithSortingByName(descending = false) {
		return axios.get(this.baseUrl + "/getAllWithSortingByName", {
			params: { descending: descending },
		});
	}

	static getById(id) {
		return axios.get(this.baseUrl + "/getById", {
			params: { id: id },
		});
	}
}
