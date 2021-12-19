let input = document.getElementById('input');
let brooklyn = document.getElementById('brooklyn');
let manhattan = document.getElementById('manhattan');
let queens = document.getElementById('queens');
let bronx = document.getElementById('bronx');
let state = document.getElementById('state');
let output = document.getElementById('output');


brooklyn.addEventListener('click', () => {
    let numOfComp = input.value
    let url = `https://data.cityofnewyork.us/resource/${numOfComp}/erm2-nwe9.json`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let outP = data.borough
        output.innerHTML = `<p>${outP}</p>`
    })
})
manhattan.addEventListener('click', () => {
    let numOfComp = input.value
    let url = `https://data.cityofnewyork.us/resource/${numOfComp}/erm2-nwe9.json`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let outP = data.borough
        output.innerHTML = `<p>${outP}</p>`
    })
})
queens.addEventListener('click', () => {
    let numOfComp = input.value
    let url = `https://data.cityofnewyork.us/resource/${numOfComp}/erm2-nwe9.json`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let outP = data.borough
        output.innerHTML = `<p>${outP}</p>`
    })
})
bronx.addEventListener('click', () => {
    let numOfComp = input.value
    let url = `https://data.cityofnewyork.us/resource/${numOfComp}/erm2-nwe9.json`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let outP = data.borough
        output.innerHTML = `<p>${outP}</p>`
    })
})
state.addEventListener('click', () => {
    let numOfComp = input.value
    let url = `https://data.cityofnewyork.us/resource/${numOfComp}/erm2-nwe9.json`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let outP = data.borough
        output.innerHTML = `<p>${outP}</p>`
    })
})



