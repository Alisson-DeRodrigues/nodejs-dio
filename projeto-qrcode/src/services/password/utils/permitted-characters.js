
async function permittedCharacters(){
    let character = []

    if (process.env.UPPERCASE_LETTERS === "true"){
        character.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (process.env.LOWERCASE_LETTERS === "true"){
        character.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if (process.env.NUMBERS === "true"){
        character.push(..."0123456789");
    }

    if (process.env.SPECIAL_CHARACTERS === "true"){
        character.push(..."-()*&#$%Ç@!");
    }

    return character;
}

export default permittedCharacters;