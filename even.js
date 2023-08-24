function fun()
{
var x=parseInt(document.getElementById("a").value);
if (x%2==0)
{
res="even"
}
else
{
res="odd"
}
document.getElementById("b").innerHTML=res;

}