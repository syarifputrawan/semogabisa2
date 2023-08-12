function sendData() {
  let name = document.querySelector("input[name='name']").value;
  let email = document.querySelector("input[name='email']").value;
  let phone = document.querySelector("input[name='phoneNumber']").value;
  let subject = document.getElementById("subject").value;
  let message = document.querySelector("textarea[name='message']").value;

  if (name === "") {
    return alert("Name is required");
  } else if (email === "") {
    return alert("Please fill in your email");
  } else if (phone === "") {
    return alert("Phone number is required");
  } else if (subject === "") {
    return alert("Your school must be selected");
  } else if (message === "") {
    return alert("Please provide your message");
  }

  console.log(email);

  let emailReceiver = "syarifputrawan@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}`;
  a.click();
}


