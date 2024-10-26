async function sliderContent(){


    let offerData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let offerRes = await offerData.json();
    let offer = await offerRes.offer.map((elem)=>{
        return `<span>${elem.text}</span>`
    });
    document.querySelector(".offer").insertAdjacentHTML("afterbegin",offer.join(""))


    let sliderContentData2 = await fetch("https://alpha18000.github.io/filmj/db.json");
    let sliderContentRes2 = await sliderContentData2.json();
    let sliderContent2 = await sliderContentRes2.sliderContent2.map((elem)=>{
        return `<h1>${elem.text}</h1>`
    });
    document.querySelector(".sliderContent").insertAdjacentHTML("afterbegin",sliderContent2.join(""))


    let sliderContentData1 = await fetch("https://alpha18000.github.io/filmj/db.json");
    let sliderContentRes1 = await sliderContentData1.json();
    let sliderContent1 = await sliderContentRes1.sliderContent1.map((elem)=>{
        return `<h1 class="orange">${elem.text}</h1>`
    });
    document.querySelector(".sliderContent").insertAdjacentHTML("afterbegin",sliderContent1.join(""))


    let buySubscriptionData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let buySubscriptionRes = await buySubscriptionData.json();
    let buySubscription = await buySubscriptionRes.buySubscription.map((elem)=>{
        return elem.text
    });
    document.querySelector(".buySubscription").insertAdjacentHTML("afterbegin",buySubscription.join(""))


    let discountData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let discountRes = await discountData.json();
    let discount = await discountRes.discount.map((elem)=>{
        return `<h5>${elem.text}</h5>`
    });
    document.querySelector(".sliderContent").insertAdjacentHTML("beforeend",discount.join(""))

}
export default sliderContent;