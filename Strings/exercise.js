var p = require('prompt-sync')();
var string= p('Input a sentence:  ');
var char = p('Input a character: ');
var positions = [];

var occurs=0;
var vol=0;
var con=0;

for(var i=0; i<string.length; i++)
{
    if (string.charCodeAt(i)==char.charCodeAt(char))
    {
        found=true
        positions.push(i+1)
        occurs++
    }
    if (string.charAt(i)=="a" || string.charAt(i)=="e" ||  string.charAt(i)=="i" || string.charAt(i)=="o" || string.charAt(i)=="u")
    {
        vol++
    }
    else 
    {
        con++
    }

}

if (found==true)
{
    console.log ('Character '+char+ ' was found in '+positions)
    console.log('Character ocurrs '+occurs+ ' times')
    console.log('Vowels: '+vol)
    console.log('Consonants: '+con)
}
else
{
    console.log ('Character'+char+ 'was not found')
}
