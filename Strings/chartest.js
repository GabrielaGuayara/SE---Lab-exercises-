var p = require('prompt-sync')();
var string= p('Enter an adress street:  ');

var char=0;
var num=0;
var spe=0;

for (i=0; i<string.length; i++)
{
    if (string.charCodeAt(i)==string.charCodeAt() || string.charAt(i)=="1" || string.charAt(i)=="2" || string.charAt(i)== "3" || string.charAt(i)=="4" || string.charAt(i)=="5"|| string.charAt(i)=="6" || string.charAt(i)=="7" || string.charAt(i)=="8" || string.charAt(i)=="9")
    {
        num++
    }
    else if (string.charAt(i)=="-"|| string.charAt(i)==" " || string.charAt(i)==",")
    {
        spe++
    }
    else
    {
        char++
    }
}
