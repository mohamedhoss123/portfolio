const splashScreen = document.getElementById("splashScreen")
const mainSite = document.getElementById("mainsite")
setTimeout(() => {
    splashScreen.remove()
    mainSite.classList.remove("displayNone")
}, 3500);