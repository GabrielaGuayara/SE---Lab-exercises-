var p=require('prompt-sync')();


console.log('MENU')
console.log('1. Add')
console.log('2. Subtract')
console.log('3. Multiply')
console.log('4. Divide')
console.log('5. Average')
console.log('6. Exit')

var num=Number (p('Enter a number: '))
var num2=Number(p('Enter a number: '))

var inp= Number(p("Please enter your choice:"))
var opt=operation(num, num2) 



function operation(num,num2)
{
    switch(inp)
    {
        case 1:
            return num+num2

        case 2:
            return num-num2
            
        case 3:
            return num*num2

        case 4:
            return num/num2

        case 5:
            return (num+num2)/2

        case 6:
            break;

        default:
            return 'Invalid numbers'
    }

}

var resul= operation(num,num2)
console.log ('The result is: '+ resul)