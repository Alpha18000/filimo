async function slider(){
    let sliderData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let sliderRes = await sliderData.json();
    let slider = await sliderRes.slider.map((elem)=>{
        return `<div class="swiper-slide"><img src="${elem.src}" alt="${elem.alt}"></div>`
    })
    document.querySelector(".swiper-wrapper").insertAdjacentHTML("afterbegin",slider.join(""))
}

export default slider;