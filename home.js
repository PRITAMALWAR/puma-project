let PRODUCT_DATA = [
    {
        brand: "puma",
        name: "RUN PUMA Women's Training T-shirt",
        price: "234",
        size: "M,XL,XX,XXS",
        productID: "Woman_101",
        catagory: "Casual",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/524209/51/mod01/fnd/IND/fmt/png/RUN-PUMA-Women's-Training-T-shirt",
    },
    {
        brand: "puma",
        name: "RUN PUMA Women's Training T-shirt",
        price: "234",
        size: "M,XL,XX,XXS",
        productID: "Woman_101",
        catagory: "Casual",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/524209/51/mod01/fnd/IND/fmt/png/RUN-PUMA-Women's-Training-T-shirt",
    },
    {
        brand: "puma",
        name: "RUN PUMA Women's Training T-shirt",
        price: "234",
        size: "M,XL,XX,XXS",
        productID: "Woman_101",
        catagory: "Casual",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/524209/51/mod01/fnd/IND/fmt/png/RUN-PUMA-Women's-Training-T-shirt",
    },
    {
        brand: "puma",
        name: "RUN PUMA Women's Training T-shirt",
        price: "234",
        size: "M,XL,XX,XXS",
        productID: "Woman_101",
        catagory: "Casual",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/524209/51/mod01/fnd/IND/fmt/png/RUN-PUMA-Women's-Training-T-shirt",
    },
    {
        brand: "puma",
        name: "RUN PUMA Women's Training T-shirt",
        price: "734",
        size: "M,XL,XX,XXS",
        productID: "Woman_101",
        catagory: "Casual",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/524209/51/mod01/fnd/IND/fmt/png/RUN-PUMA-Women's-Training-T-shirt",
    },
    {
        brand: "nike",
        name: "RUN PUMA Women's Training T-shirt",
        price: "134",
        size: "M,XL,XX,XXS",
        productID: "Woman_101",
        catagory: "Casual",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/524209/51/mod01/fnd/IND/fmt/png/RUN-PUMA-Women's-Training-T-shirt",
    },
    {
        brand: "puma",
        name: "RUN PUMA Women's Training T-shirt",
        price: "234",
        size: "M,XL,XX,XXS",
        productID: "Woman_101",
        catagory: "Casual",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/524209/51/mod01/fnd/IND/fmt/png/RUN-PUMA-Women's-Training-T-shirt",
    },
    {
        brand: "puma",
        name: "RUN PUMA Women's Training T-shirt",
        price: "334",
        size: "M,XL,XX,XXS",
        productID: "Woman_101",
        catagory: "Casual",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/524209/51/mod01/fnd/IND/fmt/png/RUN-PUMA-Women's-Training-T-shirt",
    },
    {
        brand: "puma",
        name: "RUN PUMA Women's Training T-shirt",
        price: "434",
        size: "M,XL,XX,XXS",
        productID: "Woman_101",
        catagory: "Casual",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/524209/51/mod01/fnd/IND/fmt/png/RUN-PUMA-Women's-Training-T-shirt",
    },
    {
        brand: "nike",
        name: "RUN PUMA Women's Training T-shirt",
        price: "534",
        size: "M,XL,XX,XXS",
        productID: "Woman_101",
        catagory: "Casual",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/524209/51/mod01/fnd/IND/fmt/png/RUN-PUMA-Women's-Training-T-shirt",
    },
    {
        brand: "puma",
        name: "RUN PUMA Women's Training T-shirt",
        price: "234",
        size: "M,XL,XX,XXS",
        productID: "Woman_101",
        catagory: "Casual",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/524209/51/mod01/fnd/IND/fmt/png/RUN-PUMA-Women's-Training-T-shirt",
    },
    {
        brand: "nike",
        name: "RUN PUMA Women's Training T-shirt",
        price: "834",
        size: "M,XL,XX,XXS",
        productID: "Woman_101",
        catagory: "Casual",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/524209/51/mod01/fnd/IND/fmt/png/RUN-PUMA-Women's-Training-T-shirt",
    },
]

let filter = document.querySelector("#filter");

filter.addEventListener("change", function () {
    if (filter.value === "") {

        display(PRODUCT_DATA);

    }
    else{
        let filtered = PRODUCT_DATA.filter((a) => {
            if(a.brand === filter.value){
                return a;
            }
        });

        display(filtered)
    }
})


let container = document.querySelector("#container");

let LS = localStorage.getItem("cart");

if (LS == null) {
    LS = [];
}
else {
    LS = JSON.parse(LS)
}

function display(data) {

    container.innerHTML = "";


    for (let i = 0; i < data.length; i++) {

        console.log(data[i]);
        let product = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", data[i].img);

        let name = document.createElement("p");
        name.innerText = data[i].name;

        let price = document.createElement("p");
        price.innerText = data[i].price;

        if (data[i].price >= 500) {
            price.style.color = "red"
        }

        let brand = document.createElement("p");
        brand.innerText ="Brand: " + data[i].brand;

        let catagory = document.createElement("p");
        catagory.innerText = data[i].catagory;

        let addCart = document.createElement("button");
        addCart.innerText = "Cart";

        addCart.addEventListener("click", function () {

            LS.push(data[i]);
            localStorage.setItem("cart", JSON.stringify(LS))

        })


        product.append(image, name, price, brand, catagory, addCart);

        container.append(product);
    }

}

display(PRODUCT_DATA)


