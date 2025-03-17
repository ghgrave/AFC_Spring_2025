const pokemon = require("pokemon")

console.log(pokemon.random())

//create an array (pokeDex) of five random Pokemon
// const pokeDex = [pokemon.random(), pokemon.random(), pokemon.random(), pokemon.random(), pokemon.random()]

// for each pokemon, create a random attack number between 10-100
// need a container to hold pokemon
const pokeDex=[]
// for each pokemon  - name and attack
for( let i = 0; i < 5; i++) {
    // we need to update each pokemon with new attack
    // attack needs to be random - research Math methods
    let character = { name: pokemon.random(),
                                                                    attack: Math.floor(Math.random() * 100) + 10 }

    // Math.random() gives a number bewteen 0 and 1 NOT including 1.
    // example = .789 * 100 = 78.9
    //  Math.floor() = rounds down to next integer, Math.ceil() = reounds up
    // add 1
    //  result = 79


    pokeDex[i]= character
}
console.log(pokeDex)






