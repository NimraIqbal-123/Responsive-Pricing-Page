// Responsive Pricing Page

console.log("Responsive Pricing Page Loaded Successfully");

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.cursor="pointer";

});

card.addEventListener("mouseleave",()=>{

card.style.cursor="default";

});

});