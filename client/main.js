const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
let getPokemonBtn = document.querySelector("#getPokemon")
let pokeDiv = document.querySelector("#pokedisp")
let addPokeBtn = document.querySelector("#addPokeBtn")
let pokeInput = document.querySelector("#newPoke")
let releaseBtn = document.querySelector("#releaseBtn")
let releaseInput = document.querySelector("#pokeId")

//by the way I spent like 40 minutes trying to figure out why my I would get a return null when i added a new pokemon
//it worked on postman so i knew it was my front end. looked and looked. couldn't find it so i figured i'd run through
//the delete and check my post as I do that. I tabbed while typing querySelector and it autofilled to querySelecotrAll.
//I guess stepping away from a problem can be the best way to solve it.

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data)
        })
}

const getPokemon = () => {
    pokeDiv.innerHTML = ""
    axios.get("http://localhost:4000/api/pokemon/")
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                pokeDiv.appendChild(newSpan)
             }
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
}

const addPokemon = () => {
    pokeDiv.innerHTML = ""
    let bodyObj = {
        name: pokeInput.value
    }
    
    axios.post("http://localhost:4000/api/pokemon/", bodyObj)
    .then((res) => {
        console.log(res.data)

        for(let i = 0; i < res.data.length; i++) {
            let newSpan = document.createElement('p')
            newSpan.textContent = `${i + 1}. ${res.data[i]}`
            pokeDiv.appendChild(newSpan)
        }
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}

const deletePokemon = () => {
    pokeDiv.innerHTML = ''
    let idToDelete = releaseInput.value

    axios.delete(`http://localhost:4000/api/pokemon/${idToDelete}`)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                pokeDiv.appendChild(newSpan)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}


complimentBtn.addEventListener('click', getCompliment)
getPokemonBtn.addEventListener('click', getPokemon)
addPokeBtn.addEventListener('click', addPokemon)
releaseBtn.addEventListener('click', deletePokemon)
fortuneBtn.addEventListener("click", getFortune)

getPokemon()