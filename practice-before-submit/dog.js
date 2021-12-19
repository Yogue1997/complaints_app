const input = document.getElementById('input')
const button = document.getElementById('button')
const output = document.querySelector('div')
button.addEventListener('click', () =>{
    let breed = input.value//extracting vakue from user
    const url = `https://dog.ceo/api/breed/${breed}/images/random`

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let dogPics = data.message
        output.innerHTML = `<img src=${dogPics} >`
    })
    .catch((error) => {
        console.log(error);
    })
})