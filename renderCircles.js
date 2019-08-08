function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map()
    // THIS IS THE LOOP METHOD
    // let finalArr = [];
    // for (let i=0; i<circles.length; i++) {
    //     let radius = circles[i].radius;
    //     let color = circles[i].color;
    //     let div = `<div style="border-radius: 50%; background-color: ${color}; height: 25px; width: 25px"></div>`;
    //     finalArr.push(div);
    // }
    // return finalArr;
    function buildCircleHtml(obj) {
        return `<div style="border-radius: ${obj.radius}%; background-color: ${obj.color}; height: ${obj.height}px; width: ${obj.width}px; margin: ${obj.margin}px auto"></div>`;
    }
    let newArr = circles.map(buildCircleHtml).join('');
    console.log(newArr)
    return newArr;
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF",
            width: 90,
            height: 90,
            margin: 10
        },
        {
            radius: 55,
            color: "#FF99AA",
            width: 50,
            height: 50,
            margin: 10
        },
        {
            radius: 50,
            color: "#0000FF",
            width: 100,
            height: 100,
            margin: 10
        },
        {
            radius: 50,
            color: "#000000",
            width: 10,
            height: 10,
            margin: 10
        }
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}