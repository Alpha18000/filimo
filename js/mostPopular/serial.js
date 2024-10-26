async function serial(){




    let bgBox = document.querySelector(".serialDetail")
    let serialData = await fetch("https://alpha18000.github.io/filmj/db.json")
    let serialRes = await serialData.json()
    let serial = await serialRes.serials.map((elem)=>{
   
        return`<div class="upDetail">

        <div class="right">
        <h4>${elem.title}</h4>
        <span>کارگردان : ${elem.director}</span>
        <div class="type">
          <span>${elem.type1}</span>
          <span>${elem.type2}</span>
        </div>
        <p>${elem.description}</p>
        </div>

        <div class="left"><img src="${elem.icon}" alt="${elem.alt}">
        </div>

      </div>`
    })
    document.querySelector(".detail").insertAdjacentHTML("afterbegin",serial.join(""))



    let serialSwiperData = await fetch("https://alpha18000.github.io/filmj/db.json")
    let serialSwiperRes = await serialSwiperData.json()
    let serialSwiper = await serialSwiperRes.swiperserial1.map((elem)=>{
        if(elem.id===1){
            return`<div class="swiper-slide"><img src="${elem.src}" alt="">
            <span>${elem.title}</span></div>`
        }else{
            return`<div class="swiper-slide"><img class="private" src="${elem.src}" alt="">
            <span>${elem.title}</span></div>`
        }
    })
  document.querySelector(".serialSwiper .swiper-wrapper").insertAdjacentHTML("beforeend",serialSwiper.join(""))


}
export default serial;