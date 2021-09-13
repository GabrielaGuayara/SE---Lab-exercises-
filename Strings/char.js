var p = require('prompt-sync')();
var string= p('Enter an adress street:  ');

var char=0;
var num=0;
var special=0;

for (i=0; i<string.length; i++)
{
    str=string.charAt(i)
    if (str=="0" || str=="1" || str=="2" || str== "3" || str=="4" || str=="5"|| str=="6" || str=="7" || str=="8" || str=="9")
    {
        num++
    }
    else if (string.charAt(i)=="-"|| string.charAt(i)==" " || string.charAt(i)==",")
    {
        special++
    }
    else
    {
        char++
    }
}

console.log('In ' + string+ ' we cand found ' +num+ ' numbers '+char+ ' characters and ' +special+ ' special characters.')
