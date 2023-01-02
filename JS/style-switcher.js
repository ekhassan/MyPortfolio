const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})



window.addEventListener("scroll" , () =>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})


const alternatesStyle = document.querySelectorAll(".alternate-style");

function setActivestyle(color)
{
    alternatesStyle.forEach((style) =>
    {
        if(color === styleSwitcherToggle.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.removeAttribute("disabled", "true");
        }
    })
}


const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click",() =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})


window.addEventListener("load" , () =>
{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})