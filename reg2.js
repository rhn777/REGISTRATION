function fun1()
{
    var ex=/^[A-Z a-z]+$/;
    var x=document.getElementById("a").value;
    var ex1=/^[A-Z a-z]$/;
    var x1=document.getElementById("b").value;
    var ex2=/^[A-Z a-z]+$/;
    var x2=document.getElementById("c").value;
    var ex3=/^[0-9]{10}$/;
    var x3=document.getElementById("f").value;
    var ex4=/^[A-Za-z0-9.]+@[A-Za-z0-9.]+$/
    var x4=document.getElementById("i").value;
    var password1=document.getElementById("j").value;
    var password2=document.getElementById("k").value;

    if(x=="")
    {
     document.getElementById("a1").innerHTML="please fill this field";               
    }
    else if(!ex.test(x))
    {
     document.getElementById("a1").innerHTML="Please enter valid name";
    }
    else
    {
        document.getElementById("a1").innerHTML="";
    }
    if(x1=="")
    {
     document.getElementById("a2").innerHTML="please fill this field";               
    }
    else if(!ex1.test(x1))
    {
     document.getElementById("a2").innerHTML="Please enter only single character";
    }
     else{
        document.getElementById("a2").innerHTML="";
    }
    if(x2=="")
        {
         document.getElementById("a3").innerHTML="please fill this field";               
        }
        else if(!ex2.test(x2))
        {
         document.getElementById("a3").innerHTML="Please enter valid name";
        }
        else{
            document.getElementById("a3").innerHTML="";
        }
     if(x3=="")
        {
         document.getElementById("a4").innerHTML="please fill this field";               
        }
        else if(!ex3.test(x3))
        {
         document.getElementById("a4").innerHTML="Please enter 10 digit number";
        }
        else{
            document.getElementById("a4").innerHTML="";
        }
        if(x4=="")
        {
         document.getElementById("a5").innerHTML="please fill this field";               
        }
        else if(!ex4.test(x4))
        {
         document.getElementById("a5").innerHTML="Please enter valid email";
        }
        else{
            document.getElementById("a5").innerHTML="";
        }
        
         if(password1!=password2) {

            document.getElementById("a7").innerText = "Passwords do not match!";
        }
            else if(password1.length==0||password2.length==0){
                document.getElementById("a7").innerText = "fill!";
            }
            else{
                window.location.href = "website.html";
            }
            
               
               
        }
