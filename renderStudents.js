
function renderStudents(students) {
    function renderStudentsHtml (obj) {
    if (obj.isPresent === true) {
        return `<div class="text-center mx-auto mt-5 col-lg-4 student shadow present">
        <div>
            <h1>${obj.name}</h1>
        </div>
        <div>
            <h2>Present</h2>
        </div>
        </div>
        `
    } else {
        return `<div class="text-center mx-auto mt-5 col-lg-4 student shadow absent">
        <div>
            <h1>${obj.name}</h1>
        </div>
        <div>
            <h2>Absent</h2>
        </div>
    </div>
`
    }
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