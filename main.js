const product = [
    {
        id: 0,
        image: 'IMG/T1.jpg',
        title: 'Elon Musk',
        price: 399,
    },
    {
        id: 1,
        image: 'IMG/T2.jpg',
        title: 'Buffet',
        price: 299,  
    },
    {
        id: 2,
        image: 'IMG/T3.jpg',
        title: 'Bill Gates & Steve Jobs',
        price: 399,
    },
    {
        id: 3,
        image: 'IMG/T4.jpg',
        title: 'Steve Jobs',
        price: 299,
    }
];
const checkoutButton = document.getElementById("checkoutButton");
checkoutButton.addEventListener("click", function () {
    location.reload();
});
const categories = [...new Set(product.map((item) => 
    {return item}))];
    let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => 
{
    var { image, title, price } = item;
    return (    
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p> ${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    );
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
    let j = 0, total = 0, originalTotal = 0, discountAmount = 0;

    document.getElementById("count").innerHTML = cart.length;

    if(cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$" + 0 + ".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            originalTotal = total;

            total += price;
            
            if (total > 1000) {
                total = total - (total * 0.1);
                discountAmount = originalTotal - total;
            } else {
                discountAmount = 0;
            }
            document.getElementById("total").innerHTML = "$" + total.toFixed(0);
            document.getElementById("discountAmount").innerHTML = "$" + discountAmount.toFixed(0);
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>                     
                </div>
                <p style='font-size: 12px;'>${title}</p>
                <h2 style='font-size: 15px;'>${price}.00</h2>`+
                "<i class='fas fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}
