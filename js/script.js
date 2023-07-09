const menu=document.querySelector(".menu");
const action=document.querySelector(".action");
menu.addEventListener("click",function(){
    hundelMenu();

});
function hundelMenu(){
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");

    console.log(menu);
};