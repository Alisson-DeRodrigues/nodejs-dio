import handler from './handle.js'
import prompt from "prompt";
import promptSchemaBase64 from "../../prompts-schema/prompt-schema-base64.js";

async function createBase64(){
    prompt.get(promptSchemaBase64, handler)
}

export default createBase64;