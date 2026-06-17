
const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default // padrão

try {
    //              módulo-fs               diretório   arquivo   codificação
    const arquivo = fs.readFileSync(path.join(__dirname, '/festamd'), 'utf-8')
    console.log(chalk.green('Arquivo carregado com sucesso!'))
    console.log(arquivo)
} catch (error) {
    console.log(chalk.bgYellowBright.red('☢️ Atenção, erro a frente'))
    console.log(chalk.blue.bgRed.bold("🛑 Deu ruim:"))
    console.log(error.message)
}

