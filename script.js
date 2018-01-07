var Username = document.getElementById("name")
console.log(Username)

var NameError = document.getElementById("error")

var Pass = document.getElementById("pass")

function getvalues(event){
  event.preventDefault();

  if (Username.value=="Admin" && Pass.value=="1235") {
    location.replace("./admin.html");
  } else {
    NameError.innerHTML = " wrong shit dude"
  }
}

var form = document.getElementById("form")

form.addEventListener("submit",getvalues)
