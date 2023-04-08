const mainMessage = document.querySelector(".main-message")
const messageText = document.querySelector("#message-text")

mainMessage.addEventListener("click", event => {
    messageText.textContent = "Have a Good Time!"
})
// const body = document.querySelector("body")

// body.addEventListener("click", () => {
//     console.log("Work!")
// })

const barContainer = document.querySelector(".bar-container")
const navItems = document.querySelector(".nav-items")

const toggleMenu = function() {
    this.classList.toggle("change")
    navItems.classList.toggle("nav-items-fixed")
}
barContainer.addEventListener("click", toggleMenu)

const secondaryContent = document.querySelector(".secondary-content")
const cta = document.querySelector(".cta")
cta.addEventListener("click", function(){
    secondaryContent.classList.toggle("more")
})



