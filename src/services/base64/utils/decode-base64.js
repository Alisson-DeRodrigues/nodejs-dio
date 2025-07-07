import * as Base64 from 'js-base64';

async function decodeBase64(string){
    let textBase64 = Base64.decode(string);
    return textBase64;
}

export default decodeBase64;