
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    function renderPokerHandHtml (card) {
    return `
            <img id="card" class="col-2" src="/cards/${card.value}${card.suit}.png">
    `
    }
    let finalArr = pokerHand.map(renderPokerHandHtml).join('')
    return finalArr
    }

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}