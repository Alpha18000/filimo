async function learn(){
    let learnData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let learnRes = await learnData.json();
    let learn =  await learnRes.learn.map((elem)=>{
        return `<div class="learnRight">

        <h3>${elem.title}</h3>
        <p>${elem.description}</p>

        <div class="learnDevice">
        </div>

        <div class="learnBtn">${elem.btn}</div>

      </div>

      <div class="learnLeft">
        <img src="${elem.src}" alt="">
      </div>`
    });
    document.querySelector(".learn").insertAdjacentHTML("afterbegin",learn.join(""))

 

    let learnDevicesData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let learnDevicesRes = await learnDevicesData.json();
    let learnDevices =  await learnDevicesRes.learnDevices.map((elem)=>{
        return `<div>
        <div class="iconLearn">
          <img src="${elem.icon}" alt="">
          <span>${elem.title}</span>
        </div>
        <div class="detailLearn">
          <p>${elem.description}</p>
        </div>
      </div>`
    });
    document.querySelector(".learnDevice").insertAdjacentHTML("afterbegin",learnDevices.join(""))
}

export default learn;