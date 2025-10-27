import { execSync } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Caso queria coloca uma mensagem complementar: ', (mensagem) => {

    const d = new Date();
    const data_formatada = `${(d.getDate().toString()).padStart(2, '0')}/${((d.getMonth()+1).toString()).padStart(2, '0')}/${d.getFullYear()} - ${(d.getHours().toString()).padStart(2, '0')}:${(d.getMinutes().toString()).padStart(2, '0')}:${(d.getSeconds().toString()).padStart(2, '0')}`

    execSync('git add .');
    if(mensagem != ""){
        execSync(`git commit -m 'publish - ${data_formatada} - ${mensagem.toString()}'`);
    }
    else{
        execSync(`git commit -m 'publish - ${data_formatada}'`);
    }
    
    execSync(`git push --set-upstream origin draft`);
    
    execSync('git checkout -f main');
    execSync('git merge "draft"');
    execSync('git push');
    execSync('git checkout -f draft');
    console.log("Publicação feita");
    process.exit(0);
});