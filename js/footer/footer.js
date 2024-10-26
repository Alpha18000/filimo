async function footer(){
    let footerData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let footerRes = await footerData.json();
    let footer = footerRes.footer.map((elem)=>{
        return `<li><a href="#">${elem.text}</a></li>`
    });
    document.querySelector("footer nav ul").insertAdjacentHTML("afterbegin",footer.join(""));

  
    let li = document.querySelectorAll("footer nav ul li");
    let div = document.createElement("div");
    div.classList.add("subFooter");
    li[4].insertAdjacentElement("beforeend",div)

    let subFooterData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let subFooterRes = await subFooterData.json();
    let subFooter = subFooterRes.subFooter.map((elem)=>{
        return `<div><a href="#">${elem.text}</a></div>`
    });
    document.querySelector(".subFooter").insertAdjacentHTML("afterbegin",subFooter.join(""));


}
export default footer;