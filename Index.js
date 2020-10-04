const inquirer = require('inquirer');
// const fs = require('fs');

const promptUser = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email address',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter employee email address!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'moreEmployees',
            message: 'Would you like to add an engineer, an intern, or finish your team?',
            choices: [
                "engineer",
                "intern",
                "finish"
            ]
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({confirmAbout}) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

promptUser();
