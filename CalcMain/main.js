var numInstances = prompt("How many instances do you want to create?");

var calcList = [];

for(var i=1; i<=numInstances; i++)
{
    calcList.push(new CalculatorController(i));
}