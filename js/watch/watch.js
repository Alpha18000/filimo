async function watch(){
    let watchData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let watchRes = await watchData.json();
    let watch = await watchRes.watch.map((elem)=>{
        return `<div class="watchRight">
        <img src="${elem.src}" alt="">
      </div>
      <div class="watchLeft">
        <h3>${elem.title}</h3>
        <p>${elem.description}</p>
        <div class="devices"></div>
      </div>`
    })

    document.querySelector(".watch").insertAdjacentHTML("afterbegin",watch.join(""))


    let devicesData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let devicesRes = await devicesData.json();
    let devices = await devicesRes.devices.map((elem)=>{
        return `<div>
        <div class="iconDevice">
          <img src="${elem.icon}" alt="">
        </div>
        <div class="titleDevice">
          <h5>${elem.title}</h5>
          <span>${elem.detail}</span>
        </div>
      </div>`
    })

    document.querySelector(".devices").insertAdjacentHTML("afterbegin",devices.join(""))


    let devicesBtnData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let devicesBtnRes = await devicesBtnData.json();
    let devicesBtn = await devicesBtnRes.buySubscription.map((elem)=>{
        return `<div class="btnDevice">${elem.text}</div>`
    })

    document.querySelector(".watchLeft").insertAdjacentHTML("beforeend",devicesBtn.join(""))
}

export default watch;
