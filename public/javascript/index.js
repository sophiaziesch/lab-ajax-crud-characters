const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
	document
		.getElementById("fetch-all")
		.addEventListener("click", async function (event) {
			const allCharacters = await charactersAPI.getFullList();
			console.log(allCharacters);
			const parent = document.getElementById("characters-container");
			parent.innerHTML = "";

			allCharacters.forEach((element) => {
				const child = document.createElement("div");
				child.setAttribute("class", "character-info");

				const name = document.createElement("div");
				name.setAttribute("class", "name");
				name.innerHTML = `Name: <span>${element.name}</span>`;
				child.appendChild(name);

				const occupation = document.createElement("div");
				occupation.setAttribute("class", "occupation");
				occupation.innerHTML = `Occupation: <span>${element.occupation}</span>`;
				child.appendChild(occupation);

				const cartoon = document.createElement("div");
				cartoon.setAttribute("class", "cartoon");
				cartoon.innerHTML = `Cartoon: <span>${element.cartoon}</span>`;
				child.appendChild(cartoon);

				const weapon = document.createElement("div");
				weapon.setAttribute("class", "weapon");
				weapon.innerHTML = `Weapon: <span>${element.weapon}</span>`;
				child.appendChild(weapon);

				parent.appendChild(child);
			});
		});

	document
		.getElementById("fetch-one")
		.addEventListener("click", async function (event) {
			const idInput = document.getElementById("character-id");
			const characterId = idInput.value;
			const oneCharacter = await charactersAPI.getOneRegister(characterId);

			const parent = document.getElementById("characters-container");
			parent.innerHTML = "";

			const child = document.createElement("div");
			child.setAttribute("class", "character-info");

			const name = document.createElement("div");
			name.setAttribute("class", "name");
			name.innerHTML = `Name: <span>${oneCharacter.name}</span>`;
			child.appendChild(name);

			const occupation = document.createElement("div");
			occupation.setAttribute("class", "occupation");
			occupation.innerHTML = `Occupation: <span>${oneCharacter.occupation}</span>`;
			child.appendChild(occupation);

			const cartoon = document.createElement("div");
			cartoon.setAttribute("class", "cartoon");
			cartoon.innerHTML = `Cartoon: <span>${oneCharacter.cartoon}</span>`;
			child.appendChild(cartoon);

			const weapon = document.createElement("div");
			weapon.setAttribute("class", "weapon");
			weapon.innerHTML = `Weapon: <span>${oneCharacter.weapon}</span>`;
			child.appendChild(weapon);

			parent.appendChild(child);
		});

	document
		.getElementById("delete-one")
		.addEventListener("click", async function (event) {
			const idInput = document.getElementById("character-id-delete");
			const characterId = idInput.value;
			const oneCharacterDelete = await charactersAPI.deleteOneRegister(
				characterId
			);
			oneCharacterDelete.remove();
		});

	document
		.getElementById("edit-character-form")
		.addEventListener("submit", function (event) {
			charactersAPI.updateOneRegister();
		});

	document
		.getElementById("new-character-form")
		.addEventListener("submit", async function (event) {
			const nameInput = document.getElementById("name-input");
			const nameIn = nameInput.value;
			const occupationInput = document.getElementById("occupation-input");
			const occupationIn = occupationInput.value;
			const weaponInput = document.getElementById("weapon-input");
			const weaponIn = weaponInput.value;
			const cartoonInput = document.getElementById("cartoon-input");
			const cartoonIn = cartoonInput.value;
			const createCharacter = await charactersAPI.createOneRegister({
				nameIn,
				occupationIn,
				weaponIn,
				cartoon,
			});
			const parent = document.getElementById("characters-container");
			parent.innerHTML = "";

			const child = document.createElement("div");
			child.setAttribute("class", "character-info");

			const name = document.createElement("div");
			name.setAttribute("class", "name");
			name.innerHTML = `Name: <span>${nameIn}</span>`;
			child.appendChild(name);

			const occupation = document.createElement("div");
			occupation.setAttribute("class", "occupation");
			occupation.innerHTML = `Occupation: <span>${occupationIn}</span>`;
			child.appendChild(occupation);

			const cartoon = document.createElement("div");
			cartoon.setAttribute("class", "cartoon");
			cartoon.innerHTML = `Cartoon: <span>${cartoonIn}</span>`;
			child.appendChild(cartoon);

			const weapon = document.createElement("div");
			weapon.setAttribute("class", "weapon");
			weapon.innerHTML = `Weapon: <span>${weaponIn}</span>`;
			child.appendChild(weapon);

			parent.appendChild(child);
		});
});
