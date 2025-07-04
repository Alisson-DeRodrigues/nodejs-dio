function question(prompt) {
  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (resposta) => {
      rl.close();
      resolve(resposta);
    });
  });
}

const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
};

async function rollDice(){
    return Math.floor(Math.random() * 6 + 1);
}

async function getRandomBlock(){
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
    }
    return result;
}

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 rolou um dado ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function boostRollResult(characterName){
    let diceResult = await rollDice();
    if (diceResult == 0 || diceResult == 4) {
        console.log(`${characterName} ganhou um boost de turbo: +1 ponto! 🎉`);
        characterName.PONTOS++;
    }
}

async function attackRollResult(characterName){
    let diceResult = await rollDice();
    if (diceResult == 3 || diceResult == 5) {
        console.log(`${characterName} usou uma bomba! 💣`);
        return 2;
    } else {
        console.log(`${characterName} usou uma concha! 🐢`);
        return 1;
    }
}

async function playerRaceEngine(character1, character2, rounds){
    for (let round = 1; round <= rounds; round++) {
        console.log(`🏁 Rodada ${round}`);

        // gerar block
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)

        // rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block === "RETA"){
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
        }

        if(block === "CURVA"){
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        }

        if(block === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}!🥊`);

            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);

            if (powerResult1 > powerResult2 && character2.PONTOS > 0){
                console.log(`${character1.NOME} venceu o confronto!`);

                attack = await attackRollResult(character1.NOME);
                if (attack === 2) {
                    console.log(`${character2.NOME} perdeu 2 pontos! 💥`);
                    character2.PONTOS -= 2;
                } else if (character2.PONTOS > 0) {
                    console.log(`${character2.NOME} perdeu 1 ponto! `);
                    character2.PONTOS--;
                }

                await boostRollResult(character1.NOME);
            }
            if (powerResult2 > powerResult1 && character1.PONTOS > 0){
                console.log(`${character2.NOME} venceu o confronto!`);
                
                attack = await attackRollResult(character2.NOME);
                if (attack === 2 && character1.PONTOS > 0) {
                    console.log(`${character1.NOME} perdeu 2 pontos!`);
                    character1.PONTOS -= 2;
                } else if (character1.PONTOS > 0) {
                    console.log(`${character1.NOME} perdeu 1 ponto! `);
                    character1.PONTOS--;
                }

                await boostRollResult(character2.NOME);
            }
            
            console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum ponto perdido." : "");
        }

        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        } else if(totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++;
        }

        console.log("----------------------------------------");
    }
}

async function declareWinner(character1, character2){
    console.log("Resultado final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if (character1.PONTOS > character2.PONTOS) {
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    } else {
        console.log("\nA corrida terminou em empate!");
    }
}

async function setRounds(){
    while (true) {
        const rounds = parseInt(await question("Quantas rodadas deseja jogar? (padrão 5): "));
        if (isNaN(rounds) || rounds <= 0) {
            console.log("Insira um número válido de rodadas.");
        } else {
            return rounds;
        }
    }
}

async function createCustomPlayer() {
    const regex = /^[1-6]$/;

    let name = await question("Digite o nome do Jogador: ");
    let speed = await question("Digite a velocidade (1-6): ");
    let maneuverability = await question("Digite a manobrabilidade (1-6): ");
    let power = await question("Digite o poder (1-6): ");

    while (!regex.test(speed) || !regex.test(maneuverability) || !regex.test(power)) {
        console.log("Valores inválidos. Por favor, insira valores entre 1 e 6.\n");
        speed = await question("Digite a velocidade (1-6): ");
        maneuverability = await question("Digite a manobrabilidade (1-6): ");
        power = await question("Digite o poder (1-6): ");
    }

    return {
        NOME: name,
        VELOCIDADE: parseInt(speed),
        MANOBRABILIDADE: parseInt(maneuverability),
        PODER: parseInt(power),
        PONTOS: 0
    };
}

(async function main(){
    console.log("🏎️💨 Bem-vindo ao Simulador de Corridas Mario Kart! 🏎️💨\n");

    let isRunning = true;
    let rounds = 5;
    let selectedPlayer1 = player1;
    let selectedPlayer2 = player2;

    while (isRunning) {
        console.log("");
        console.log("1 - Começar Corrida");
        console.log("2 - Escolher Número de Rodadas");
        console.log("3 - Criar Jogador 1 Personalizado");
        console.log("4 - Criar Jogador 2 Personalizado");
        console.log("5 - Sair");

        switch (await question("Escolha uma opção: " && isRunning)){
            case "1":
                console.log(`🏁🚨 Corrida entre ${selectedPlayer1.NOME} e ${selectedPlayer2.NOME} começando...\n`);
                await playerRaceEngine(selectedPlayer1, selectedPlayer2, rounds);
                await declareWinner(selectedPlayer1, selectedPlayer2);
                isRunning = false;
            case "2":
                if (isRunning) rounds = await setRounds();
                continue;
            case "3":
                if (isRunning) {
                    selectedPlayer1 = await createCustomPlayer();
                    console.log(`Jogador 1 personalizado criado: ${selectedPlayer1.NOME}`);
                }
                continue;
            case "4":
                if (isRunning) {
                    selectedPlayer2 = await createCustomPlayer();
                    console.log(`Jogador 2 personalizado criado: ${selectedPlayer2.NOME}`);
                }
                continue;
            case "5":
                console.log("\nAté a próxima! 👋");
                break;
            default:
                console.log("Opção inválida. Tente novamente.\n");
        }
        break;
    }    
})();
