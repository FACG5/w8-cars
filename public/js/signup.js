const fName = document.getElementById('fname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword=document.getElementById('confirmpassword')
const adduser =document.getElementById('signup')
const fnamerr = document.getElementById('fnamerr');
const lnamerr = document.getElementById('lnamerr');
const emailerr = document.getElementById('emailerr');
const passerr = document.getElementById('passerr');
const confirmerr = document.getElementById('confirmerr');


const displayErr=(errElem,errMsg)=>{
  errElem.textContent=errMsg;
}
const checkFNam=()=>{
  if(fName.value===""){
    displayErr(fnamerr," name is required")
  }
}

const checkEmail=()=>{
  if (email.validity.typeMismatch) {
    displayErr(emailerr,"NOT vaild email");
  }else if (email.validity.valueMissing) {
    displayErr(emailerr,"Email is required");
  }else {
    displayErr(emailerr,"");
    return true;
  }
}
const checkPass = () => {
  if (password.validity.patternMismatch) {
    displayErr(
      passerr,
      "Password must contain at least eight characters, including one letter and one number"
    );
  } else if (password.validity.valueMissing) {
    displayErr(passerr, "Please enter a password");
  } else {
    displayErr(passerr, "");
    return true;
  }
};

const checkConfirmPw = () => {
  if (password.value != confirmPassword.value) {
    displayErr(confirmerr, "Passwords do not match");
  } else if (confirmPassword.validity.valueMissing) {
    displayErr(confirmerr, "Please confirm your password");
  } else {
    displayErr(confirmerr, "");
    return true;
  }
};

fName.addEventListener('focusout', checkFNam);
email.addEventListener("focusout", checkEmail);
password.addEventListener("focusout", checkPass);
confirmPassword.addEventListener("focusout", checkConfirmPw);

adduser.addEventListener('submit',e=>{
  if(!checkFNam()||!checkEmail()||!checkPass()||!checkConfirmPw()){
    e.preventDefault();
  }
})
