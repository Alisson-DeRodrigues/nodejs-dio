import permittedCharacters from "./utils/permitted-characters.js";

async function handler() {
    let character = []
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH;
    character = await permittedCharacters();

    for (let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * character.length);
        password += character[index];
    }

    return password;
}

export default handler;