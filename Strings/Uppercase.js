var p = require('prompt-sync')();
var string= p('Enter a sentence:  ');
var array=[]
var newar=[]

array = string.split(" ")

for (i=0; i<array.length; i++)
{
var num = array[i].charAt(0).toUpperCase()+array[i].slice(1)
newar.push(num)
}
string=newar.join(' ')


console.log(string)
