const LoadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((json) => DisplayCategories(json.categories));
};

const DisplayCategories = (Categories) => {
    // console.log(Categories);
    const categoriesList = document.getElementById("categories");
    categoriesList.innerHTML = "";
    for (let category of Categories) {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
         <button class="w-full text-left px-3 py-2 rounded-lg hover:bg-green-200">Mamun</button>
        `;
        categoriesList.append(btnDiv);
    }

}
LoadCatagories();