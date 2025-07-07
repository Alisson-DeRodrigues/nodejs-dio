import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCode"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo de QRCode (1 - Normal ou (2 - Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("escolha apenas entre 1 e 2"),
        require: true
    }
]


export default promptSchemaQRCode;