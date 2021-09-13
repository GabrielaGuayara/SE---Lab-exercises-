
var array=['scissors','pencil','staple', 'papers', 'laptops',' printer']

num=array.length

for (var i=0; i<num-1; i++)
{
    for (var j=i+1; j<num; j++)
    {
        if (array[i].length>array[j].length)
        {
            console.log(array[i]+' is the longest value which has '+array[i].length+' characters')
            break;
        }
        else 
        {
            console.log(array[j]+' is the longest value which has '+array[j].length+' characters')
            break; 
        }
    }
}




// array=str.split(" ")
// console.log (array)

// for (i=0; i<array.length; i++)
// {
//         if (array[i].length > array[0].length)
//         {
//         array[i].length()
//         var longest
//         found=true
//             break;
//         }
//         else
//         {
//         array[i].length()
//         var longest
//         found=true
//         }
// }
// if (found==true)
// {
//     console.log (+longest+ 'is the longest value which has'+array[i].length()+ 'characters')
// }
// else
// {
//     console.log (+longest+ 'is the longest value which has'+array[i].length()+ 'characters')
// }

