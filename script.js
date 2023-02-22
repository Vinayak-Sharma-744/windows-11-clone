let tb = document.getElementsByClassName("startCall")[0]
let start = document.getElementById("startMenu")
let settings = document.getElementsByClassName("settings")[0]
let vid = document.getElementsByClassName("vid")[0]
let icons = document.querySelectorAll(".icons")
// let bg = document.body.style.backgroundImage
var flip = 0
tb.addEventListener("click", () => {

    if (start.style.bottom == "60px") {
        console.log("check")
        start.style.bottom = "-575px"
    }
    else {
        console.log("check1")
        start.style.bottom = "60px"
    }
})

settings.addEventListener("click", () => {
    flip++;
    if (flip % 2 != 0) {
        console.log("check")
        document.body.style.backgroundImage = "url('bg.jpeg')";
        vid.remove()
        for (let index = 0; index < icons.length; index++) {
            console.log("hi")
            icons[index].style.color = "#fff"
        }
    }
    else {
        window.location.reload()
    }


})


// function on() {
//     console.log("check")
//     bg = "url('bg.jpeg')";
//     vid.remove()
//     for (let index = 0; index < icons.length; index++) {
//         console.log("hi")
//         icons[index].style.color = "#fff"
//     }
// }

// function off() {
//     console.log("check2")
//     document.body.append(vid)
//     document.body.style.backgroundImage = "none"
//     for (let index = 0; index < icons.length; index++) {
//         console.log("hi2")
//         icons[index].style.color = "#000"
//     }
// }