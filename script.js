
document.addEventListener("mouseover", function(e){

    let resp = document.querySelector(".div")

    resp.textContent = `Você esta em: ${e.target.tagName}`
});

document.addEventListener("click", (e)=>{
    let resp = document.querySelector(".div")

    resp.innerText = `Você Clicou na ${e.target.tagName}`
});