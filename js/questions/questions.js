async function questions(){


    
    
    let questionsTitleData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let questionsTitleRes = await questionsTitleData.json();
    let questionsTitle = await questionsTitleRes.questionsTitle.map((elem)=>{
        return`<h3>${elem.title}</h3>
        <h5>${elem.description}</h5>`
    });
    document.querySelector(".questionsTop").insertAdjacentHTML("afterbegin",questionsTitle.join(""))
    
    
    let questionsBoxData = await fetch("https://alpha18000.github.io/filmj/db.json");
    let questionsBoxRes = await questionsBoxData.json();
    let questionsBox = await questionsBoxRes.questions.map((elem)=>{
        return`<div class="questionBox">
        
        <div class="questionsTit">
        <h2>${elem.title}</h2>
        <span>+</span>
        </div>
        
        <div class="questionsDescription">
        <p>${elem.answer}</p>
        </div>
        </div>`
    });
    document.querySelector(".questionsBottom").insertAdjacentHTML("afterbegin",questionsBox.join(""))
    
    // addEventListener
    
    let boxs = document.querySelectorAll(".questionBox");
    
    boxs.forEach((elem)=>{
        elem.addEventListener("click",function(){
            let questionsDescription = [...elem.children]
            let spanTag = questionsDescription[0].children
            if(questionsDescription[1].classList.contains("activeBox")){
                questionsDescription[1].classList.remove("activeBox")
                spanTag[1].innerHTML="+"
                spanTag[0].classList.remove("orange")
            }else{
                questionsDescription[1].classList.add("activeBox")
                spanTag[1].innerHTML="&times;"
                spanTag[0].classList.add("orange")
            }
            
            
        })
    });
}
export default questions;