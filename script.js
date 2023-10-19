const buttons = document.getElementsByClassName("buy");
for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = buyClick;
}

document.querySelector(".title").addEventListener("mouseover", titleMouseOver);

const price = document.getElementById("price");
price.onkeydown = priceKeyDown;

document.getElementsByTagName("body")[0].addEventListener("dblclick", bodydblclick)

function buyClick(e) {
    alert("The item was added to the cart list");
}    

function titleMouseOver(e) {
    e.target.style.color = "red";

    setTimeout(() => {
        e.target.style.color = "";
    }, 1000);
}

function priceKeyDown(e) {
    e.target.style.color = "blue";
}    

function bodydblclick(e) {
    console.log("Body is doble clicked");
}