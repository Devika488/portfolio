



function checkEmail() {

    var email = document.getElementById('email');
    var filter =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!filter.test(email.value)) {
    // alert('Please provide a valid email address');
    document.querySelector('#result').innerText="Please provide a valid email address !";
    // document.querySelector('#email').style.border=".1rem purple solid";

    email.focus;
    return false;
    }
   else{
    document.querySelector('#result').innerText=" ";
    return true;
   }
    
    }
       

    // function textarea
    function checkMessage(){
        // alert("kooi");
        let msg = document.querySelector('#Message').value.trim();
        if(msg.match(/^.*[a-zA-Z].*$/)){
            document.querySelector('#resultmsg').style.visibility="hidden";

            return true;}
            else{
            // document.querySelector('#resultmsg').innerText="Please provide a valid Message !";
            
            document.querySelector('#resultmsg').style.visibility="visible";
            // document.querySelector('#Message').style.border=".1rem purple solid";
                msg.focus;
                    return false;
      
        }
        // document.querySelector('#resultmsg').innerText=" ";
       
        }
        //
        function savefile(){
            alert(document.getElementById('formFile').value);
        }