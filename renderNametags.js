
function renderNametags(nametags) {
    let finalArr = [];
    for (let i = 0; i < nametags.length; i++) {
    let div = 
        `<div id="nametag" class="text-center mt-5 col-lg-4 border border-light shadow">
            <div>
                <h2 id="greeting">Hello, my name is:</h2>
            </div>
            <div id="name">
                <h1>${nametags[i]}</h1>
            </div>
        </div>`
    finalArr.push(div);
    }
    return finalArr.join('')
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

};