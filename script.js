const product = [
    {
        id: 0,
        image: 'image/aa-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'image/aa-2.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'image/aa-3.jpg',
        title: '1200D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'image/aa-4.jpg',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 4,
        image: 'image/aa-5.jpg',
        title: 'iPhone',
        price: 1200,
    },
    {
        id: 5,
        image: 'image/aa-6.jpg',
        title: 'Laptop',
        price: 800,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j=0, total=0;
    document.getElementById("count").innerHTML = cart.length;
    if(cart.length == 0 ){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }else{
        document.getElementById('cartItem').innerHTML = cart.map((items) => 
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}

let popup = document.getElementById("popup");

function openPopup() {
    if(cart.length <= 0){
        alert("Purchase Atleast one Item.")
    }else if(cart.length >= 1){
    popup.classList.add("open-popup")
    }
}

function closePopup() {
    popup.classList.remove("open-popup")
}