// tun kun button
let btn = document.querySelector(".btn")
let crcl = document.querySelector(".crcl")
let cont = document.querySelector(".container")
function $(item) {
    return document.querySelector(item)
    
}
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
    $(".adds").style.backgroundColor ="#242535";
    $(".p-inp").style.backgroundColor ="#181A2A";
    $(".terms").style.backgroundColor ="#181A2A";
    document.querySelectorAll('p').forEach(e => e.style.color = "#BABABF");
    // document.querySelectorAll("p").style.color = "#BABABF"
    // document.querySelectorAll("h3").style.color = "#FFFFFF"
    document.querySelectorAll('h3').forEach(e => e.style.color = "#FFFFFF");
    $(".aphor").style.backgroundColor ="#242535";
    $(".i").style.color="#FFFFFF";
    document.querySelectorAll('a').forEach(e => e.style.color = "#FFFFFF");
    


}
else{
        crcl.style.transform = "translateX(0px)"
        crcl.style.transition = "all 1s"
        btn.style.background = "#E8E8EA"
        cont.style.transition = "all 1s"
        cont.style.backgroundColor ="#FFFFFF"
        cont.style.color = "#181A2A"
        document.querySelector(".links").style.backgroundColor ="#E8E8EA"
        $(".adds").style.backgroundColor ="#E8E8EA"
        $(".p-inp").style.backgroundColor ="#E8E8EA"
        $(".terms").style.backgroundColor ="#E8E8EA"
        document.querySelectorAll('h3').forEach(e => e.style.color = "#181A2A");
        document.querySelectorAll('p').forEach(e => e.style.color = "#3B3C4A");
        $(".aphor").style.backgroundColor ="#F6F6F7";
        $(".i").style.color="#181A2A";
        document.querySelectorAll('a').forEach(e => e.style.color = "#3B3C4A");
        // document.querySelectorAll("p").style.color = "#3B3C4A"
        // document.querySelectorAll("h3").style.color = "#181A2A"

    }
    b++;
})