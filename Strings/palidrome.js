var prompt=require('prompt-sync')()
var str = prompt('Enter a word: ')
var message = palidrom(str)

function palidrom() {
        var lowstr = str.toLowerCase();
        var reverse= str.split('').reverse().join('')

        if ( lowstr==reverse)
        {
            return str+' is a palidrome'
        }
        else
        {
            return str+' is not a palidrome'
        } 
        }
console.log (message)