const LoadCatagories = () => {
    showSpinner();
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((json) => {
            DisplayCategories(json.categories);
            hideSpinner();
            LoadAllPlants();
        });
};

const LoadAllPlants = () => {
    showSpinner();
    fetch("https://openapi.programming-hero.com/api/plants")
        .then((res) => res.json())
        .then((json) => DisplayTrees(json.plants));
        hideSpinner();
};


const DisplayCategories = (Categories) => {
    const categoriesList = document.getElementById("categories");
    categoriesList.innerHTML = "";

    for (let category of Categories) {
        const btn = document.createElement("button");
        btn.textContent = category.category_name;
        btn.className =
            "w-full text-left px-3 py-2 rounded-lg hover:bg-green-200";

        btn.onclick = () => {
            document.querySelectorAll("#categories button").forEach((b) => {
                b.classList.remove(
                    "bg-green-600",
                    "text-white",
                    "font-semibold"
                );
                b.classList.add("hover:bg-green-200");
            });

            btn.classList.add("bg-green-600", "text-white", "font-semibold");
            btn.classList.remove("hover:bg-green-200");

            loadTree(category.id);
        };

        categoriesList.append(btn);
    }
};

const loadTree = (id) => {
    showSpinner();
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((json) => DisplayTrees(json.plants));
        hideSpinner();
};

const DisplayTrees = (trees) => {
    const loadtreeGrid = document.getElementById("treeGrid");
    loadtreeGrid.innerHTML = "";

    for (let tree of trees) {
        const TreeCard = document.createElement("div");
        TreeCard.className =
            "bg-white rounded-lg shadow p-4 flex flex-col";

        TreeCard.innerHTML = `
          <img src="${tree.image}" alt="${tree.name}" 
               class="w-full h-40 object-cover rounded-lg mb-3">
          
          <h3 class="font-semibold text-sm cursor-pointer text-black hover:underline"
    onclick='openModal(${JSON.stringify(tree)})'>
    ${tree.name}
</h3>

          <p class="text-xs text-slate-600 flex-grow">${tree.description}</p>
          
          <div class="flex justify-between items-center mt-2">
            <span class="inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
              ${tree.category}
            </span>
            <span class="text-sm font-semibold">৳${tree.price}</span>
          </div>
          
          <button onclick="addToCart('${tree.name}', ${tree.price})"
            class="mt-3 bg-green-600 text-white rounded-lg py-2 text-sm font-semibold hover:bg-green-700">
            Add to Cart
          </button>
        `;
        loadtreeGrid.append(TreeCard);
    }
};

let cart = [];

const addToCart = (name, price) => {
    cart.push({ name, price });
    displayCart();
};

const displayCart = () => {
    const cartList = document.getElementById("cartList");
    const cartTotal = document.getElementById("cartTotal");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.className =
            "flex justify-between items-center bg-green-50 px-3 py-2 rounded";

        li.innerHTML = `
          <div>
            <p class="font-semibold">${item.name}</p>
            <p class="text-sm text-gray-600">৳${item.price} × 1</p>
          </div>
          <button onclick="removeFromCart(${index})" 
            class="text-gray-500 hover:text-red-600 font-bold">×</button>
        `;
        cartList.appendChild(li);
    });

    cartTotal.textContent = `৳${total}`;
};

const removeFromCart = (index) => {
    cart.splice(index, 1);
    displayCart();
};
const openModal = (tree) => {
    const modal = document.getElementById("treeModal");
    const modalContent = document.getElementById("modalContent");

    modalContent.innerHTML = `
        <img src="${tree.image}" alt="${tree.name}" class="w-full h-48 object-cover rounded-lg mb-3">
        <h3 class="font-semibold text-lg">${tree.name}</h3>
        <p class="text-sm text-slate-600 my-2">${tree.description}</p>
        <div class="flex justify-between items-center mt-2">
          <span class="inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded">${tree.category}</span>
          <span class="text-base font-semibold">৳${tree.price}</span>
        </div>
        <button onclick="addToCart('${tree.name}', ${tree.price}); closeModal()" 
          class="mt-4 w-full bg-green-600 text-white rounded-lg py-2 text-sm font-semibold hover:bg-green-700">
          Add to Cart
        </button>
    `;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
};

const closeModal = () => {
    const modal = document.getElementById("treeModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
};
const showSpinner = () => {
    const spinner = document.getElementById("loadingSpinner");
    spinner.classList.remove("hidden");
    spinner.classList.add("flex");
};

const hideSpinner = () => {
    const spinner = document.getElementById("loadingSpinner");
    spinner.classList.add("hidden");
    spinner.classList.remove("flex");
};



LoadCatagories();
