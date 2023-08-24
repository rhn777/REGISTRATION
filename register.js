function fun1()
{
    var ex=/^[A-Z a-z]+$/;
    var x=document.getElementById("a").value;
    if(x=="")
    {
     document.getElementById("a1").innerHTML="please fill this field";               
    }
    else if(!ex.test(x))
    {
     document.getElementById("a1").innerHTML="Please enter valid name";
    }
    else{
        document.getElementById("a1").innerHTML="";
    }
    }
    
function fun2()
{
    var ex=/^[A-Z a-z]$/;
    var x=document.getElementById("b").value;
    if(x=="")
    {
     document.getElementById("a2").innerHTML="please fill this field";               
    }
    else if(!ex.test(x))
    {
     document.getElementById("a2").innerHTML="Please enter only single character";
    }
    else{
        document.getElementById("a2").innerHTML="";
    }
    }
    function fun3()
    {
        var ex=/^[A-Z a-z]+$/;
        var z=document.getElementById("c").value;
        if(z=="")
        {
         document.getElementById("a3").innerHTML="please fill this field";               
        }
        else if(!ex.test(z))
        {
         document.getElementById("a3").innerHTML="Please enter valid name";
        }
        else{
            document.getElementById("a3").innerHTML="";
        }
        }
function fun4()
{
    var ex=/^[0-9]{10}$/;
    var z=document.getElementById("f").value;
    if(z=="")
        {
         document.getElementById("a4").innerHTML="please fill this field";               
        }
        else if(!ex.test(z))
        {
         document.getElementById("a4").innerHTML="Please enter 10 digit number";
        }
        else{
            document.getElementById("a4").innerHTML="";
        }
        }
function fun5()
{
    var ex=/^[A-Za-z0-9.]+@[A-Za-z0-9.]+$/
    var z=document.getElementById("i").value;
    if(z=="")
        {
         document.getElementById("a5").innerHTML="please fill this field";               
        }
        else if(!ex.test(z))
        {
         document.getElementById("a5").innerHTML="Please enter valid email";
        }
        else{
            document.getElementById("a5").innerHTML="";
        }
}
function fun6() {
    var password1=document.getElementById("j").value;
    var password2=document.getElementById("k").value;
    if(password1==password2) {
    document.getElementById("a7").innerText = "";
    } else {
    document.getElementById("a7").innerText = "Passwords do not match!";
    }
    }
    function fun8()
    {
        confirm("registered sucssesfully");
    }

