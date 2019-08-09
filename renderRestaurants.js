function renderRestaurants(restaurants) {
    function renderRestaurantsHtml (restaurants) {
        let sign = '$';
        let cost = restaurants.priceRating;
        let dollarSign = sign.repeat(cost);
        return `
            <div class="card" style="width: 18rem; background-color: #f1f1f1;">
                <div class="card-body">
                    <div><h2>${restaurants.name}</h2></div>
                    <span class="badge badge-secondary">${restaurants.type}</span>
                    <div id="dollarSign">${dollarSign}</div>
                </div>
            </div>
        `
        };
        let finalArr = restaurants.map(renderRestaurantsHtml).join('');
        return finalArr;
        }

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}