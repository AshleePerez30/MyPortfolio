const cards = (a,b,c,d,e,f,g,h,i,j) => {
    let div = document.createElement("div")
    div.innerHTML = `<h1>${a}</h1>
                    <div class="container">
                        <div class="p1">
                            <img src="./img/${b}">
                            <p>${c}</p>
                            <button>${d}</button>
                        </div>
                        <div class="p1">
                            <img src="./img/${e}">
                            <p>${f}</p>
                            <button>${g}</button>
                        </div>
                        <div class="p1">
                            <img src="./img/${h}">
                            <p>${i}</p>
                            <button>${j}</button>
                        </div>
                    </div>
    
    `
    return div
}
export{cards}