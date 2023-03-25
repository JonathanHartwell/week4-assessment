let pokeArr = ["bulbasaur", "weedle", "mew (somehow)", "missingno"]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes =["Believe in yourself!", "have you considered not being sad?", "sorry you're not a winner.", "Help I'm stuck in a fortune string writing factory", "do better next time", "why are all the fortunes mean?"]
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
        
    getPokemon: (req, res) => {
        res.status(200).send(pokeArr)
    },

    // addPokemon: (req, res) => {
    //     let {name} = req.body
    //     console.log(name)
    //     pokeArr.push(name)
    //     res.status(200).send(pokeArr)
    // }

    addPokemon: (req, res) => {
        let {name} = req.body

        console.log(name)

        pokeArr.push(name)

        res.status(200).send(pokeArr)
    },

    deletePokemon: (req, res) => {
        let index = req.params.id - 1

        pokeArr.splice(index, 1)

        res.status(200).send(pokeArr)
    }

    // swapPokemon: (req, res) => {
    //     let index = req.params.id -1

    //     pokeArr.splice(index, 1, )

    //     res.status(200).send(pokeArr)

    // }

}