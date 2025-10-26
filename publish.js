import { execSync } from 'child_process';

execSync('git checkout -f main');
execSync('git merge "draft"');
execSync('git push');
execSync('git checkout -f draft');