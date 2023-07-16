document.getElementById("main_action_button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
};


let links = document.querySelectorAll(".menu_item a")
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}


let buttons = document.getElementsByClassName("product_button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

let burger = document.getElementById('burger');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
document.getElementById('order_action').onclick = function (){
    let hasError = false;

    [burger, name, phone].forEach(item => {
        if(!item.value){
            item.parentElement.style.background = 'red';
            hasError = true;
        }else{
            item.parentElement.style.background = '';
        }
    });
    if(!hasError){
        [burger, name, phone].forEach(item => {
            item.value = '';
            item.parentElement.style.background = '';
        })
        alert('Thank you for your order');

    }
};


