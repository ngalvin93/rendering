
function renderStudents(students) {
    function renderStudentsHtml (obj) {
    if (obj.isPresent === true) {
        console.log('this is true')
    } else {
        console.log('this is false')
    }
    return `<div class="text-center mt-5  col-lg-4 student">
                <div>
                    <h1>${obj.name}</h1>
                </div>
                <div>
                    <h2>${obj.isPresent}</h2>
                </div>
            </div>
    `
    }
    let newArr = students.map(renderStudentsHtml).join('')
    return newArr
    console.log(newArr)
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}