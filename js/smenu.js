function Smenu(){
let btns=document.querySelector("#btnstart")
let uls=document.querySelectorAll("#uls")


btns.addEventListener("click",function(){
uls.forEach((elem)=>{
    elem.classList.toggle("uls")
})


})


}
export default Smenu