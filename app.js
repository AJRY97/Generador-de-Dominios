let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dominio = ['.com', '.net', '.cl', '.es','.us','.io']

const gDominios = () => {
    for (let i = 0; i < pronoun.length; i++) {

        for (let a = 0; a < adj.length; a++) {

            for (let n = 0; n < noun.length; n++) {

                for (let d = 0; d < dominio.length; d++) {
                    let dominios = pronoun[i] + adj[a] + noun[n] + dominio[d];
                    console.log(dominios);

                }
            }
        }
    }
}

gDominios();