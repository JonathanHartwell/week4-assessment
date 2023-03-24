let pokeArr = ["bulbasaur", "weedle", "mew (somehow)", "missingno"]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
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