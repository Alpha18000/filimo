async function online(){

    let onlineData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let onlineRes = await onlineData.json();
    let online = await onlineRes.online.map((elem)=>{
        return`<div class="onlineMain">
        <h3>${elem.title}</h3>

        <div class="onlineDescription">

        </div>

        <div class="onlineScroll">


        </div>
      </div>`
    });
    document.querySelector(".online").insertAdjacentHTML("afterbegin",online.join(""))


    let onlineDesData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let onlineDesRes = await onlineDesData.json();
    let onlineDes = await onlineDesRes.onlineDescription.map((elem)=>{
        return`<span>${elem.text}</span>`
    });
    document.querySelector(".onlineDescription").insertAdjacentHTML("afterbegin",onlineDes.join(""))


    let onlineFimsData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let onlineFimsRes = await onlineFimsData.json();
    let onlineFims = await onlineFimsRes.onlineFilms.map((elem)=>{
        return`<div class="onlineItem">
        <div class="onlineRight">
          <img src="${elem.src}" alt="online">
        </div>
        <div class="onlineLeft">
          <div class="onlinetit">
            <h3>${elem.title}</h3>
            <span>${elem.type}</span>
          </div>
          <p>کارگردان: ${elem.director}</p>
          <div class="onlineCategory">
            <span>${elem.cat1}</span>
            <span>${elem.cat2}</span>
          </div>
          <div class="ticket">${elem.btn}</div>
        </div>
      </div>`
    });
    document.querySelector(".onlineScroll").insertAdjacentHTML("afterbegin",onlineFims.join(""))

}
export default online;