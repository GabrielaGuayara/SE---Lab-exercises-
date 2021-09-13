var p = require('prompt-sync')();
var string= p('Input a word:  ');
var palidrome=" ";

for (let i=string.length-1; i>=0; i++)
{
    palidrome+=string.charAt(i);
}
console.log (palidrome);
if (string == palidrome)
{
    console.log ('This is a palidrome')
}
else 
{
    console.log ('This is not a palidrome')
}