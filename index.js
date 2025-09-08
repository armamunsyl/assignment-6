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
        // console.log(category)
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
         <button onclick="loadTree(${category.id})" class="w-full text-left px-3 py-2 rounded-lg hover:bg-green-200">${category.category_name}</button>
        `;
        categoriesList.append(btnDiv);
    }

}
const loadTree = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    console.log(url)
    fetch(url)
        .then((res) => res.json())
        .then((json) => DisplayTrees(json.plants));
}

const DisplayTrees = (trees) => {
    console.log(trees);
    const loadtreeGrid = document.getElementById("treeGrid");
    loadtreeGrid.innerHTML = "";
    for (let tree of trees) {
        // console.log(tree)
        const TreeCard = document.createElement("div");
        TreeCard.innerHTML = `
        <img src="image"  class="rounded-lg">
      <h3 class="mt-2 font-semibold text-sm">Mamun</h3>
      <p class="text-xs text-slate-600">mia</p>
      <span class="text-sm font-semibold mt-1">৳100</span>
      <span class="inline-block mt-1 px-2 py-1 text-xs bg-green-100 text-green-700 rounded">nai</span>
      <button class="mt-auto bg-green-600 text-white rounded-lg py-2 text-sm font-semibold hover:bg-green-700">
        Add to Cart
      </button>
        `;
        loadtreeGrid.append(TreeCard);
    }

}

LoadCatagories();