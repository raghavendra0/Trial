/* to check if a name ends with the letter a */
/* use a function to pass on the name */

let name="joshna";
var i=name.length;
var count=0;
if(name[i-1]=='a')
{
    console.log("yes, the name ends with the letter a")
    count++;
}
if(count<1){
    console.log("The name doesnt end with the letter a")
}
