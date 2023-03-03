let btnmenu=document.getElementById("menu")
let btnmenu2=document.getElementById("menu2")
let menu=document.getElementById("fs-menu")
menu.style.display="none"
btnmenu2.style.display="none"
btnmenu.addEventListener("click",(e)=>{
    btnmenu.style.display="none"
    btnmenu2.style.display="block"
    menu.style.display="block"
})
btnmenu2.addEventListener("click",(e)=>{
        btnmenu.style.display="block"
        btnmenu2.style.display="none"
        menu.style.display="none"
})

function article(img) {
    return `<div class="article" id="article">
    <div class="img" style="background: url('img/`+img+`');background-position: center;background-size: cover;"></div>
    <div class="detail">
        <div>
            <strong>Chiken</strong>
            <strong>$ 12</strong>
        </div>
        <button><a href="article.html" style="text-decoration: none;color: black;">Buy</a></button>
    </div>
    </div> `
}
let articles=document.getElementById("marticles")
console.log(article);
let art=document.createAttribute("div.article")
art.innerHTML=article.innerHTML
let img=["poulet.jpg","img (1).jpg","img (2).jpg","img (3).jpg","img (4).jpg"]
img.forEach(elt => {
    articles.innerHTML+=article(elt) 
});


// articles.append(article)
