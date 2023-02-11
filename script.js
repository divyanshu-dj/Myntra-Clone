let sidebar_close = document.getElementsByClassName("sidebar-close")[0]
let sidebar_open = document.getElementsByClassName("sidebar-open")[0]

// [0] is added because getElementsByClassName gives all the occurance of the given class so if we want only first occurance then we add [0]

sidebar_close.addEventListener("click", ()=>{
    sidebar_open.style.right = "0"
})
sidebar_open.addEventListener("click", ()=>{
    sidebar_open.style.right = "-609px"
})