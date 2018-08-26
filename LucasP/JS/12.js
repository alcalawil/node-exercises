var array=[1,2,3,4,5,6,7,8,9,10]
var newArrat=[]

function eventNumber(number)
{
    for (let index = 0; index < number.length; index++)
    {
        if(number[index] % 2 === 0)
            newArrat.push(number[index])
    }
    return newArrat;
}

console.log(eventNumber(array))