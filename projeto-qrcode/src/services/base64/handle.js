import encodeBase64 from "./utils/encode-base64.js";
import decodeBase64 from "./utils/decode-base64.js";
import chalk from "chalk";

async function handler(err, result){
    let string;
    if (result.select === "1"){
        string = await encodeBase64(result.string);
    }

    if (result.select === "2"){
        string = await decodeBase64(result.string);
    }

    console.log(chalk.green(string));
}

export default handler;