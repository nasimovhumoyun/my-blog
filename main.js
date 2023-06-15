// tun kun button
let btn = document.querySelector(".btn")
let crcl = document.querySelector(".crcl")
let cont = document.querySelector(".container")
function $(item) {
    return document.querySelector(item)
    
}
$(".post1").addEventListener("click",()=>{
    window.open('post.html',target = "_self")
})
$(".post2").addEventListener("click",()=>{
    window.open('post.html',target = "_self")
})
$(".post3").addEventListener("click",()=>{
    window.open('post.html',target = "_self")
})
$(".post4").addEventListener("click",()=>{
    window.open('post.html',target = "_self")
})
$(".post5").addEventListener("click",()=>{
    window.open('post.html',target = "_self")
})
$(".post6").addEventListener("click",()=>{
    window.open('post.html',target = "_self")
})
$(".post7").addEventListener("click",()=>{
    window.open('post.html',target = "_self")
})
$(".post8").addEventListener("click",()=>{
    window.open('post.html',target = "_self")
})
$(".post9").addEventListener("click",()=>{
    window.open('post.html',target = "_self")
})
let b = 1;
btn.addEventListener("click", ()=>{
    if(b%2==1){
    crcl.style.transform = "translateX(23px)"
    btn.style.background = "#4B6BFB"
    crcl.style.transition = "all 1s"
    cont.style.transition = "all 1s"
    cont.style.backgroundColor ="#181A2A"
    cont.style.color = "#FFFFFF"
    document.querySelector(".links").style.backgroundColor ="#181A2A"
    document.querySelector(".post").style.cssText = `
    background-color:#181A2A;
    filter:drop-shadow(0px 0px #242535);
    border: 1px solid #242535;
    `
    document.querySelector(".post1").style.cssText = `
    border: 1px solid #242535;
    `
    document.querySelector(".post2").style.cssText = `
    border: 1px solid #242535;
    `
    document.querySelector(".post3").style.cssText = `
    border: 1px solid #242535;
    `
    document.querySelector(".post4").style.cssText = `
    border: 1px solid #242535;
    `
    document.querySelector(".post5").style.cssText = `
    border: 1px solid #242535;
    `
    document.querySelector(".post6").style.cssText = `
    border: 1px solid #242535;
    `
    document.querySelector(".post7").style.cssText = `
    border: 1px solid #242535;
    `
    document.querySelector(".post8").style.cssText = `
    border: 1px solid #242535;
    `
    document.querySelector(".post9").style.cssText = `
    border: 1px solid #242535;
    `
    $(".adds").style.backgroundColor ="#242535"
    $(".adds1").style.backgroundColor ="#242535"
    $(".f-inp").style.backgroundColor ="#181A2A"
    $(".terms").style.backgroundColor ="#181A2A"
    $(".view").style.cssText = `
    background-color:#181A2A;
    border: 2px solid #363746;
    color:#363746;
    `
    document.querySelectorAll('a').forEach(e => e.style.color = "#FFFFFF");
    $(".hid-menu").style.backgroundColor ="#181A2A"


}
    else{
        crcl.style.transform = "translateX(0px)"
        crcl.style.transition = "all 1s"
        btn.style.background = "#E8E8EA"
        cont.style.transition = "all 1s"
        cont.style.backgroundColor ="#FFFFFF"
        cont.style.color = "#181A2A"
        document.querySelector(".links").style.backgroundColor ="#E8E8EA"
        document.querySelector(".post").style.cssText = `
        background-color:#E8E8EA;
        filter: drop-shadow(0px 10px 6px #E8E8EA);
        `
        $(".adds").style.backgroundColor ="#E8E8EA"
        $(".adds1").style.backgroundColor ="#E8E8EA"
        $(".f-inp").style.backgroundColor ="#E8E8EA"
        $(".terms").style.backgroundColor ="#E8E8EA"
        $(".view").style.cssText = `
        background-color:#E8E8EA;
        border: 1px solid #242535;
        color:#696A75;
        font-wight: 500;
        border:none
        `
        document.querySelector(".post1").style.cssText = `
             border: 1px solid #DCDDDF;
         `
         document.querySelector(".post2").style.cssText = `
             border: 1px solid #DCDDDF;
         `
         document.querySelector(".post3").style.cssText = `
             border: 1px solid #DCDDDF;
         `
         document.querySelector(".post4").style.cssText = `
             border: 1px solid #DCDDDF;
         `
         document.querySelector(".post5").style.cssText = `
             border: 1px solid #DCDDDF;
         `
         document.querySelector(".post6").style.cssText = `
             border: 1px solid #DCDDDF;
         `
         document.querySelector(".post7").style.cssText = `
             border: 1px solid #DCDDDF;
         `
         document.querySelector(".post8").style.cssText = `
             border: 1px solid #DCDDDF;
         `
         document.querySelector(".post9").style.cssText = `
             border: 1px solid #DCDDDF;
         `
         document.querySelectorAll('a').forEach(e => e.style.color = "#3B3C4A");
         $(".hid-menu").style.backgroundColor ="#d7d7dd"
    }
    b++;
})
$(".icon-men").addEventListener("click",()=>{
    $(".hid-menu").style.left = "-10px"
    $(".hid-menu").style.transition = "all 1s"
    $(".icon-men").style.display = "none"

})
$(".x-icon").addEventListener("click",()=>{
    $(".hid-menu").style.left = "-250px"
    $(".hid-menu").style.transition = "all 1s"
    $(".icon-men").style.display = "block"

})
$(".men-back").addEventListener("click",()=>{
    $(".hid-menu").style.left = "-250px"
    $(".hid-menu").style.transition = "all 1s"
    $(".icon-men").style.display = "block"
})
