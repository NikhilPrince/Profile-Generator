var Manager = require("Manager");
var Engineer = require("Engineer");
var Intern = require("Int");
var inquirer = require("inquirer");
var path = require("path");
var fs = require("fs");
var teamMates = require("template")

teamArray = [];

function startApplication () {

  function make () {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like on your team?",
      name: "Prompt",
      choices: ["Manager", "Engineer", "Intern", "Don't need anyone."]
    }]).then(function (Input) {
      switch(Input.Prompt) {
        case "Manager":
          includeManager();
          break;
        case "Engineer":
          includeEng();
          break;
        case "Intern":
          includeInt();
          break;

        default:
          random();
      }
    })
  }

function includeManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "Manager's name?"
    },

    {
      type: "input",
      name: "managerId",
      message: "Manager's ID number?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "Manager's email?"
    },

    {
      type: "input",
      name: "OfficeNumber",
      message: "Manager's office number?"
    }

  ]).then(answers => {
    var manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.OfficeNumber);
    teamArray.push(manager);
    make();
  });

}


function includeEng() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "Engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "Engineer's employee ID?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "Email address?"
      },

      {
        type: "input",
        name: "engineerOffice",
        message: " engineer's office?"
      }

    ]).then(answers => {
      var engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerOffice);
      teamArray.push(engineer);
      make();
    });

  }

  function includeInt() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "Intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "Employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "Intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What is the school that the intern attend?"
      }

    ]).then(answers => {
      var intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      make();
    });

  }

function random () {
    console.log("Team Assembled!")

    fs.writeFileSync(outputPath, teamMates(teamArray), "UTF-8")

}

make();

}

startApplication();