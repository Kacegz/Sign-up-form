const pass=document.querySelector("#pass");
const con=document.querySelector("#confirm");
const displayerror=document.querySelector("#error")

pass.addEventListener("focusout",()=>{
    if(pass.value==con.value && pass.value!==""){
        pass.className="valid";
        con.className="valid";
        displayerror.textContent="";
    }else{
        pass.className="invalid";
        con.className="invalid";
        displayerror.textContent="* Passwords do not match";
    }
});
con.addEventListener("focusout",()=>{
    if(pass.value==con.value && pass.value!==""){
        pass.className="valid";
        con.className="valid";
        displayerror.textContent="";
    }else{
        pass.className="invalid";
        con.className="invalid";
        displayerror.textContent="* Passwords do not match";
    }
});