let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'T-shirt1',
        tag: 'Tshirt1',
        price: 2000,
        inCart: 0
    },
    {
        name: 'T-shirt2',
        tag: 'Tshirt2',
        price: 2500,
        inCart: 0
    },
    {
        name: 'T-shirt3',
        tag: 'Tshirt3',
        price: 3000,
        inCart: 0
    },
    {
        name: 'T-shirt4',
        tag: 'Tshirt4',
        price: 3500,
        inCart: 0
    }
]

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if( productNumbers ) {
        document.querySelector('.cart p').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart p').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart p').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)
    console.log('My cartItems are', cartItems)

    product.inCart = 1;
    
    cartItems = {
        [product.tag]: product
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();