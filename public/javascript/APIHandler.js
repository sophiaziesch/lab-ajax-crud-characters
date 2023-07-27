class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl;
	}

	async getFullList() {
		try {
			const response = await axios.get(`${this.BASE_URL}/characters`);
			if (response.status === 200) {
				return response.data;
			}
		} catch (error) {
			console.log(error);
		}
	}

	async getOneRegister(id) {
		try {
			const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
			if (response.status === 200) {
				return response.data;
			}
		} catch (error) {
			console.log(error);
		}
	}

	async createOneRegister({ name, occupation, cartoon, weapon }) {
		try {
			const response = await axios.post(`${this.BASE_URL}/characters`, {
				name: string,
				occupation: string,
				cartoon: boolean,
				weapon: string,
			});
			if (response.status === 200) {
				console.log(response.data);
				return response.data;
			}
		} catch (error) {
			console.log(error);
		}
	}

	async updateOneRegister(id) {
		try {
			const response = await axios.patch(`${this.BASE_URL}/characters/${id}`, {
				name: string,
				occupation: string,
				cartoon: boolean,
				weapon: string,
			});
			if (response.status === 200) {
				return response.data;
			} else {
				return "Character not found";
			}
		} catch (error) {
			console.log(error);
		}
	}

	async deleteOneRegister(id) {
		try {
			const response = await axios.delete(`${this.BASE_URL}/characters/${id}`);
			if (response.status === 200) {
				console.log("Character has been successfully deleted");
			} else {
				console.log("Character not found");
			}
		} catch (error) {
			console.log(error);
		}
	}
}
