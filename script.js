// animação das correntes -----------------------------

const letter = document.querySelector(".imgSelamento");
let chain = document.getElementsByClassName("chain");
let chain1 = document.getElementsByClassName("chain1");
let chain2 = document.getElementsByClassName("chain2");
let chain3 = document.getElementsByClassName("chain3");
let chain4 = document.getElementsByClassName("chain4");
let chain5 = document.getElementsByClassName("chain5");
let chain6 = document.getElementsByClassName("chain6");

letter.addEventListener("click", function() {
    for (let i = 0; i < chain.length; i++) {
        chain[i].classList.add("chainA");
    }
    for (let i = 0; i < chain1.length; i++) {
        chain1[i].classList.add("chain1A");
    }
    for (let i = 0; i < chain2.length; i++) {
        chain2[i].classList.add("chain2A");
    }
    for (let i = 0; i < chain3.length; i++) {
        chain3[i].classList.add("chain3A");
    }
    for (let i = 0; i < chain4.length; i++) {
        chain4[i].classList.add("chain4A");
    }
    for (let i = 0; i < chain5.length; i++) {
        chain5[i].classList.add("chain5A");
    }
    for (let i = 0; i < chain6.length; i++) {
        chain6[i].classList.add("chain6A");
    }
});

// -------------------------------------------------