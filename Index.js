const arrayOfFreelancers = [
    {
        name: "John",
        occupation: "Tutor",
        startingPrice: "$30",
    },
    {
        name: "Jackie",
        occupation: "Diver",
        startingPrice: "$50",
    },
    {
        name: "Dave",
        occupation: "Artist",
        startingPrice: "$70"
    },
];

const average = document.getElementById('averagePrice')
function getAvgPriceStart() {
    const allPrices = document.querySelectorAll('.price')
    let sum = 0
    for (let price of allPrices) {
        sum += +price.textContent
    }

    console.log(sum)
    console.log(allPrices.length)
    document.getElementById('averagePrice').textContent - sum / allPrices.length
    document.getElementById('averagePrice'), innerHTML
}







function stopInterval(timer) {
    if (arrayOfFreelancers === 0) {
        clearInterval(timer)
    }
}


function creatFreelancer(arrayOfFreelancers) {
    const table = document.querySelector('table')
    const newFreelancer = arrayOfFreelancers.pop()
    const newTr = document.createElement('tr')
    newTr.innerHTML = `<td>${newFreelancer.name}</td><td>${newFreelancer.occupation}</td><td>${newFreelancer.startingPrice}</td>`
    table.appendChild(newTr)
}

const newTimer = setInterval(() => creatFreelancer(arrayOfFreelancers), 3000)

creatFreelancer(arrayOfFreelancers)
