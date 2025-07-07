import chalk from "chalk";

const promptSchemaBase64 = [
    {
        name: "select",
        description: chalk.yellow("Escolha uma opção: \n1) - Converter string para base64 \n2) - Converter base64 para string\nOpção"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Insira uma opção válida!\n"),
        require: true
    },
    {
        name: "string",
        description: chalk.yellow("Insira o texto"),
        require: true
    }
]

export default promptSchemaBase64;