const emaillog = document.querySelector("#email");
const passwor = document.querySelector("#password");
const emailErr = document.querySelector("#emailErr");
const passErr = document.querySelector("#passErr");
const login = document.querySelector("#login");


const displayErr = (errElem, errMsg) => {
  errElem.innerText = errMsg;
};

const checkEmail = () => {
  if (emaillog.validity.typeMismatch) {
    displayErr(emailErr, "Please enter a valid email address");
  } else if (emaillog.validity.valueMissing) {
    displayErr(emailErr, "Please enter an email address");
  } else {
    displayErr(emailErr, "");
    return true;
  }

};

const checkPw = () => {
if (passwor.validity.valueMissing) {
    displayErr(passErr, "Please enter a password");
  } else {
    displayErr(passErr, "");
    return true;
  }
};

emaillog.addEventListener("focusout", checkEmail);
passwor.addEventListener("focusout", checkPw);

login.addEventListener("submit", e => {

  if (!checkEmail() || !checkPw()) {
    event.preventDefault();
  }


});