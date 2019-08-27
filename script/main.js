console.log("yo yo OBJECTS ROCKS")

const sweetArr = [
    {
        name: "Apple Delights",
        event: "Back to School",
        count: 8,
    },
    {
        name: "Pumpkin Delights",
        event: "Halloween",
        count: 8,
    },
    {
        name: "Happy Campers",
        event: "Summer Time",
        count: 4,
    }
]

const createSweetComponent = (item) => {
    return `
    <div>
        <h1>${item.name}</h1>
        <p>${item.event}</p>
        <p>${item.count}</p>
    </div>`
}

let domInj = document.querySelector("#container")
// for(let i = 0; i < sweetArr.length; i++){
//     domInj.innerHTML += createSweetComponent(sweetArr[i])
// }

sweetArr.forEach(i => {
    domInj.innerHTML += createSweetComponent(i)
});

