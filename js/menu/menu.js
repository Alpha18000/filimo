
async function menu(){

 

    let data = await fetch("https://alpha18000.github.io/filmj/db.json");
    let res = await data.json();
    let menu = res.menu.map((elem)=>{
        return`<li><a href="${elem.link}">${elem.name}</a></li>`
    });
    document.querySelector(".menu-right").insertAdjacentHTML("beforeend",menu.join(""))

    

    let subData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let subRes = await subData.json();
    let Subscription = subRes.sub.map((elem)=>{
        return `<a href="../../login.html" class="white">${elem.name}</a>`
    });
    document.querySelector(".Subscription").insertAdjacentHTML("afterbegin",Subscription.join(""))

    
    let logData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let logRes = await logData.json();
    let login = logRes.login.map((elem)=>{
        return `<a href="../../login.html" class="white">${elem.name}</a>`
    });
    document.querySelector(".login").insertAdjacentHTML("afterbegin",login.join(""))
}


export default menu;