// Vanilla Javascript
const elements = {
  firstName: document.querySelector(".f-name"),
  lastName: document.querySelector(".l-name"),
  email : document.querySelector(".email"),
  phone: document.querySelector(".phone-num"),
  reason: document.querySelector(".reason"),
  message: document.querySelector(".message"),
  url: document.querySelector(".input-url"),
  reqEmail:document.getElementById("req-email"),
  reqReason:document.getElementById("req-reason"),
  reqMessage:document.getElementById("req-message"),
};

function formValidation(){
  const data = {
    fName: elements.firstName.value,
    lName : elements.lastName.value,
    email : elements.email.value,
    phone : elements.phone.value,
    url : elements.url.value,
    reason : elements.reason.innerText,
    message : elements.message.value
  }

  if(data.email == "" || data.reason == "Please Select a Reason.." || data.message == ""){
    elements.reqEmail.classList.add("req-active");
    elements.reqReason.classList.add("req-active");
    elements.reqMessage.classList.add("req-active");
    return false;
  }else if(data.email == ""){
    console.log("no email");
    elements.reqEmail.classList.add("req-active");

    return false;
  }else if(data.reason == "Please Select a Reason.."){
    elements.reqReason.classList.add("req-active");
    return false;
  }else if(data.message == ""){
    elements.reqMessage.classList.add("req-active");
    return false;
  } else if(data.email !== "" || data.reason !== "Please Select a Reason.." || data.message !== ""){

    const dataConvert = JSON.stringify(data);
    localStorage.setItem("data", dataConvert);
    console.log(dataConvert);
    console.log(localStorage.data);
    const actualData= JSON.parse(dataConvert);
    console.log(actualData);

    return true;
  }
}
