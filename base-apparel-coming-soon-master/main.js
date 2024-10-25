const field = document.getElementById("myInput");
const button = document.getElementById("myButton");
const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const errorIcon = document.getElementById("error-icon");
const errorMsg = document.getElementById("error-msg");
const validIcon = document.getElementById("valid-icon");
const validMsg = document.getElementById("valid-msg");

button.addEventListener("click", (submission) => {
  submission.preventDefault();
  const email = field.value;

  if (email.match(validEmail)) {
    field.style.border = "2px solid green";
    errorIcon.classList.add("hidden");
    errorMsg.classList.add("hidden");
    validIcon.classList.remove("hidden");
    validMsg.classList.remove("hidden");

    button.classList.remove("active");
    button.classList.add("valid");
    
  } else {
    field.style.border = "2px solid red";
    errorIcon.classList.remove("hidden");
    errorMsg.classList.remove("hidden");
    validIcon.classList.add("hidden");
    validMsg.classList.add("hidden");
  }
  });

field.addEventListener("input", function() {
  const email = field.value;
  if (!email.match(validEmail)) {
    button.classList.add("active");
  } else {
    button.classList.remove("active"); 
  }
});
