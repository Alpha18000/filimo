async function world(){

    let worldData= await fetch("https://alpha18000.github.io/filmj/db.json");
    let worldRes = await worldData.json();
    let world = await worldRes.world.map((elem)=>{
        return `<div class="mainWorld">
        <div class="rightWorld">
          <img src="${elem.img}" alt="">
        </div>
        <div class="leftWorld">
          <h4>${elem.title}</h4>
          <p>${elem.description}</p>
          <div class="worldBtns">
          </div>
        </div> 
      </div>`
    });
    document.querySelector(".world").insertAdjacentHTML("afterbegin",world.join(""))

    let worldBtnData= await fetch("https://alpha18000.github.io/filmj/db.json");
    let worldBtnRes = await worldBtnData.json();
    let worldBtn = await worldBtnRes.worldBtns.map((elem)=>{
        return `<div class="kidsBtn">${elem.title}</div>`
    });
    document.querySelector(".worldBtns").insertAdjacentHTML("afterbegin",worldBtn.join(""))

}
export default world;


