
let isExplorer = false
function changeCard(event){
    const card = event.currentTarget
    const backgroundImage = isExplorer 
        ? "url(./img/bg-ignite.svg)" 
        : "url(./img/bg-explorer.svg)" 
    isExplorer = !isExplorer
    
    card.style.backgroundImage = backgroundImage 
}