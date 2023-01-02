// ================== typing Animation =================== 
var typed = new typed(".typing",
{
    strings:["","Web Developer","Graphic Designer","Web Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// ======================= Aside ===========================

const nav =document.querySelector(".nav"),
    navList = nav.querySelector("li"),
    totalNavList = navList.clientHeight;
    for(let i=0; i<totalNavList ; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            this.classList.add("active")
        })
    }
