import { execSync } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Caso queria coloca uma mensagem complementar: ', (mensagem) => {

    execSync('git checkout -f main');
    if(mensagem != ""){
        execSync('git merge "draft"');
        execSync('npm run build');
        execSync('git add .');
        execSync(`git commit -m 'publish - ${mensagem}'`);
    }
    else{
        console.log("A mensagem é obrigatória");
        execSync('git checkout -f draft');
        process.exit(0);
    }

    execSync('git push');
    execSync('git checkout -f draft');
    process.exit(0);    
});