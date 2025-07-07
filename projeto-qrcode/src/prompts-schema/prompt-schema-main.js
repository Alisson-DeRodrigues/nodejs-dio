import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta \n1) - QRCODE \n2) - PASSWORD \n3) - BASE64 \nOpção"),
        pattern: /^[1-3]+$/,
        message: chalk.red.italic("Escolha entre 1 e 3"),
        require: true
    }
]

export default promptSchemaMain;