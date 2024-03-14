const image = (img) => {

    let div = document.createElement("div")
    div.innerHTML = `<img src="./img/${img}" class="pfp">`

    return div
}

export{image}