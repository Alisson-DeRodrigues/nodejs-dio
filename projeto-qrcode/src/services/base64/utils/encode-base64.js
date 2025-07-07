import * as Base64 from "js-base64";

async function encodeBase64(string){
    let textBase64 = Base64.encode(string);
    return textBase64;
}

export default encodeBase64;