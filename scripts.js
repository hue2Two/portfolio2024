let hamburgerMenu = document.querySelector("#hamburgerMenu");
let header = document.querySelector("header");
// let btnVisitPokeApi = document.querySelector("#btnVisitPokeApi");
// let btnVistGithub = document.querySelectorAll(".btnVisitGithub");
let visitFullstack = document.querySelector("#visitFullstack")
let visitPokeApi = document.querySelector("#visitPokeApi");
let visitAI = document.querySelector("#visitAI");
let visitFirstWebsite = document.querySelector("#visitFirstWebsite");
let visitCart = document.querySelector("#visitCart");
let visitMultithreading = document.querySelector("#visitMultithreading");
let visitTortoiseHare = document.querySelector("#visitTortoiseHare");
let visitTodoApp = document.querySelector("#visitTodoApp");
let visitQRCode = document.querySelector("#visitQRCode");

console.log(`targetting hamburgerMenu: ${hamburgerMenu}`);
console.log(`targetting header: ${header}`);

hamburgerMenu.addEventListener("click", () => {
    console.log(`hamburgerMenu was clicked`);

    // if(header.style.display == "none") {
    //     header.style.display = "block";
    // } else {
    //     header.style.display = "none";
    // }

    // header.style.display = "block";

    // Check if the header is either not displayed or set to none, and toggle accordingly
    if(header.style.display === "none" || header.style.display === "") {
        header.style.display = "block";
    } else {
        header.style.display = "none";
    }
})

function visitingSite(site) {
    console.log(`function visitingSite used`);

    if (site === "visitPokeApi") {
        window.open("https://huzaifa-pokeapi.netlify.app/", "_blank")
    } else if (site === "visitFullstack") {
        window.open("http://3.144.181.5:80/", "_blank")
    } else if (site === "visitAI") {
        window.open("https://github.com/hue2Two/TicTacToe_AI_Project", "_blank")
    } else if (site === "visitFirstWebsite") {
        window.open("https://huzaifa-zeldabotw.netlify.app/home", "_blank")
    } else if (site === "visitCart") {
        window.open("https://github.com/hue2Two/HospitalSimulation-c-", "_blank")
    } else if (site === "visitMultithreading") {
        window.open("https://github.com/hue2Two/java-multithreading", "_blank")
    } else if (site === "visitTortoiseHare") {
        window.open("https://github.com/hue2Two/tortoise-hare-c-", "_blank")
    } else if (site === "visitTodoApp") {
        window.open("https://huzaifa-todolist.netlify.app/", "_blank")
    } else if (site === "visitQRCode") {
        window.open("https://huzaifa-qrcode.netlify.app/", "_blank")
    }

}

visitFullstack.addEventListener("click", () => {
    console.log(`clicked visit full stack`);

    visitingSite("visitFullstack");
})

visitPokeApi.addEventListener("click", () => {
    console.log(`clicked visit poke api`);

    visitingSite("visitPokeApi")
})

visitAI.addEventListener("click", () => {
    console.log(`clicked visit ai`);

    visitingSite("visitAI");
})

visitFirstWebsite.addEventListener("click", () => {
    console.log(`clicked visit first website`);

    visitingSite("visitFirstWebsite");
})

visitCart.addEventListener("click", () => {
    console.log(`clicked visit shopping cart`)

    visitingSite("visitCart");
})

visitMultithreading.addEventListener("click", () => {
    console.log(`clicked visit multithreading`);

    visitingSite("visitMultithreading");
})

visitTortoiseHare.addEventListener("click", () => {
    console.log(`clicked visit tortoise hare`);

    visitingSite("visitTortoiseHare");
})

visitTodoApp.addEventListener("click", () => {
    
    visitingSite("visitTodoApp");
})

visitQRCode.addEventListener("click", () => {
    console.log(`visit qr code clicked`);

    visitingSite("visitQRCode");
})

