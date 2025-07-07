import prompt from 'prompt';
import promptSchemaMain from './prompts-schema/prompt-schema-main.js';
import createQRCode from './services/qrcode/create.js';
import createPassword from './services/password/create.js';
import createBase64 from './services/base64/create.js'

async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await createPassword();
        if (choose.select == 3) await createBase64();
    })
    prompt.start();
}
main();