function calculate_feet(number)
{
    let a=document.getElementById("box2");
    let result=(number/30).toFixed(5);
    a.value=result;
}
function calculate_meter(number)
{
    let a=document.getElementById("box3");
    let result=(number/100).toFixed(7);
    a.value=result;
}
function calculate()
{
    let a=document.getElementById("box1");
    let val=a.value;
    calculate_meter(val);
    calculate_feet(val);   
}