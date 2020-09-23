// Shafic Hijazi
// 25762022

var form=document.getElementById("student")

function onSubmit(event) {

    event.preventDefault(); 
    validate();

}

function validate() {

    var textPattern = /^[A-Za-z., ]+$/;
    var phonePattern = /^[0-9]+$/;
    var emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


    const first= form.elements["fname"].value;
    const middle = form.elements["mname"].value;
    const last = form.elements["lname"].value;
    const gender = form.elements["gender"].value;
    const phone = form.elements["phone"].value;
    const email = form.elements["email"].value;
    const address = form.elements["address"].value;

    if (!first.match(textPattern) || !middle.match(textPattern) || !last.match(textPattern) || !phone.match(phonePattern) || !email.match(emailPattern) || address === ""){
        document.getElementById("fname").classList.remove("boxhighlight");
            document.getElementById("mname").classList.remove("boxhighlight");
            document.getElementById("lname").classList.remove("boxhighlight");
            document.getElementById("phone").classList.remove("boxhighlight");
            document.getElementById("email").classList.remove("boxhighlight");
            document.getElementById("address").classList.remove("boxhighlight");

        if(!first.match(textPattern)){
            document.getElementById("fname").classList.add("boxhighlight");
        }
        if(!middle.match(textPattern)){
            document.getElementById("mname").classList.add("boxhighlight");
        }
        if(!last.match(textPattern)){
            document.getElementById("lname").classList.add("boxhighlight");
        }
        if(!phone.match(phonePattern)){
            document.getElementById("phone").classList.add("boxhighlight");
        }
        if(!email.match(emailPattern)){
            document.getElementById("email").classList.add("boxhighlight");
        }
        if(address === ""){
            document.getElementById("address").classList.add("boxhighlight");
        }
    }
        else{
            document.getElementById("fname").classList.remove("boxhighlight");
            document.getElementById("mname").classList.remove("boxhighlight");
            document.getElementById("lname").classList.remove("boxhighlight");
            document.getElementById("phone").classList.remove("boxhighlight");
            document.getElementById("email").classList.remove("boxhighlight");
            document.getElementById("address").classList.remove("boxhighlight");

            const first= form.elements["fname"].value;
            const middle = form.elements["mname"].value;
            const last = form.elements["lname"].value;
            const gender = form.elements["gender"].value;
            const phone = form.elements["phone"].value;
            const email = form.elements["email"].value;
            const address = form.elements["address"].value;
        
            sessionStorage.setItem("first",first);
            sessionStorage.setItem("middle",middle);
            sessionStorage.setItem("last",last);
            sessionStorage.setItem("gender",gender);
            sessionStorage.setItem("phone",phone);
            sessionStorage.setItem("email",email);
            sessionStorage.setItem("address",address);
            window.location="cv.html";

        
        }
    }

form.addEventListener('submit',onSubmit);
