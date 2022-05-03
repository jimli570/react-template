#!/bin/bash
# Executable permission on the pre-commit hook
#chmod +x .husky/pre-commit
#echo '.husky/pre-commit now set as executable'

npx husky add .husky/pre-commit "npm run lint"
echo 'npm lint added as pre-commit hook (npx husky add .husky/pre-commit "npm run lint")'

npx husky add .husky/pre-commit "npm run test"
echo 'npm test added as pre-commit hook (npx husky add .husky/pre-commit "npm run test")'

chmod +x .husky/pre-commit
echo '.husky/pre-commit now set as executable (chmod +x .husky/pre-commit)'