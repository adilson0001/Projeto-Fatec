const showpop = document.querySelector(".show-pop")

const containerpop = document.querySelector(".pop-container")
const closebtn = document.querySelector(".close-btn")

showpop.onclick = () =>{
    containerpop.classList.add('active');
}
closebtn.onclick = () =>{
    containerpop.classList.remove('active');
}

