const products = [

    {
        id: 1,
        name: "Apple AirPods Pro",
        price: 249,
        category: "audio",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434",
        rating: 5
    },

    {
        id: 2,
        name: "Sony WH-1000XM5 Headphones",
        price: 399,
        category: "audio",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
        rating: 5
    },

    {
        id: 3,
        name: "Apple Watch Series 9",
        price: 429,
        category: "wearable",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
        rating: 4
    },

    {
        id: 4,
        name: "Samsung Galaxy Watch 6",
        price: 299,
        category: "wearable",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
        rating: 4
    },

    {
        id: 5,
        name: "MacBook Air M2",
        price: 1199,
        category: "computer",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        rating: 5
    },

    {
        id: 6,
        name: "Dell XPS 13 Laptop",
        price: 999,
        category: "computer",
        image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf",
        rating: 5
    },

    {
        id: 7,
        name: "iPhone 15 Pro",
        price: 999,
        category: "mobile",
        image: "https://images.unsplash.com/photo-1695639509828-d4260075e370?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 5
    },

    {
        id: 8,
        name: "Samsung Galaxy S24",
        price: 899,
        category: "mobile",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
        rating: 4
    },

    {
        id: 9,
        name: "JBL Flip Bluetooth Speaker",
        price: 120,
        category: "audio",
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4
    },

    {
        id: 10,
        name: "Logitech G Pro Gaming Mouse",
        price: 79,
        category: "computer",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
        rating: 5
    },

    {
        id: 11,
        name: "RGB Mechanical Keyboard",
        price: 150,
        category: "computer",
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
        rating: 4
    },

    {
        id: 12,
        name: "Meta Quest VR Headset",
        price: 499,
        category: "tech",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
        rating: 5
    }

]

let cart = JSON.parse(localStorage.getItem("cart")) || []

const grid = document.getElementById("product-grid")

function loadProducts(list = products) {

    grid.innerHTML = ""

    list.forEach((p, i) => {

        grid.innerHTML += `

<div class="product-card" onclick="openModal(${i})">

<img src="${p.image}">

<div class="product-info">

<h3>${p.name}</h3>

<p>$${p.price}</p>

<button onclick="event.stopPropagation();addToCart(${i})">Add To Cart</button>

</div>

</div>

`

    })

}

loadProducts()

function addToCart(i) {

    cart.push(products[i])
    updateCart()

}

function updateCart() {

    localStorage.setItem("cart", JSON.stringify(cart))

    document.getElementById("cart-count").innerText = cart.length

    let items = document.getElementById("cart-items")

    items.innerHTML = ""

    let total = 0

    cart.forEach((item, index) => {

        total += item.price

        items.innerHTML += `

<div>

<p>${item.name}</p>
<p>$${item.price}</p>

<button onclick="removeItem(${index})">Remove</button>

</div>

`

    })

    document.getElementById("cart-total").innerText = total

}

updateCart()

function removeItem(i) {
    cart.splice(i, 1)
    updateCart()
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("active")
}

function filterProducts(cat) {

    if (cat === "all") {
        loadProducts(products)
    } else {
        loadProducts(products.filter(p => p.category === cat))
    }

}

document.getElementById("search").addEventListener("input", (e) => {

    const text = e.target.value.toLowerCase()

    loadProducts(products.filter(p => p.name.toLowerCase().includes(text)))

})

function openModal(i) {

    document.getElementById("modal").style.display = "flex"

    document.getElementById("modal-img").src = products[i].image

    document.getElementById("modal-title").innerText = products[i].name

    document.getElementById("modal-price").innerText = "$" + products[i].price

    document.getElementById("modal-cart").onclick = () => addToCart(i)

}

function closeModal() {
    document.getElementById("modal").style.display = "none"
}

function scrollProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" })
}