const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const address = document.getElementById("address");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const term = document.getElementById("termservice");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let valid = true;

  if (firstName.value.trim() === "") {
    firstName.classList.add("invalid");
    valid = false;
  } else {
    firstName.classList.remove("invalid");
  }

  if (lastName.value.trim() === "") {
    lastName.classList.add("invalid");
    valid = false;
  } else {
    lastName.classList.remove("invalid");
  }

  if (address.value.trim() === "") {
    address.classList.add("invalid");
    valid = false;
  } else {
    address.classList.remove("invalid");
  }

  if (email.value.trim() === "" || !email.value.includes("@")) {
    email.classList.add("invalid");
    valid = false;
  } else {
    email.classList.remove("invalid");
  }

  if (phone.value.trim() === "" || isNaN(phone.value)) {
    phone.classList.add("invalid");
    valid = false;
  } else {
    phone.classList.remove("invalid");
  }

  if (!term.checked) {
    term.parentElement.classList.add("invalid");
    valid = false;
  } else {
    term.parentElement.classList.remove("invalid");
  }
});

submit.addEventListener("click", (e) => {
  let valid = true;

  if (firstName.value.trim() === "") {
    firstName.classList.add("invalid");
    valid = false;
  } else {
    firstName.classList.remove("invalid");

    if (lastName.value.trim() === "") {
      lastName.classList.add("invalid");
      valid = false;
    } else {
      lastName.classList.remove("invalid");

      if (address.value.trim() === "") {
        address.classList.add("invalid");
        valid = false;
      } else {
        address.classList.remove("invalid");

        if (email.value.trim() === "" || !email.value.includes("@")) {
          email.classList.add("invalid");
          valid = false;
        } else {
          email.classList.remove("invalid");

          if (phone.value.trim() === "" || isNaN(phone.value)) {
            phone.classList.add("invalid");
            valid = false;
          } else {
            phone.classList.remove("invalid");

            if (!term.checked) {
              term.parentElement.classList.add("invalid");
              valid = false;
            } else {
              term.parentElement.classList.remove("invalid");

              if (valid) {
                document.getElementById("checkout").style.display = "none";
              }
            }
          }
        }
      }
    }
  }
});

const questions = document.querySelectorAll(".question");
questions.forEach((questions) => {
  questions.addEventListener("input", (e) => {
    if (e.target.value.trim() !== "") {
      e.target.classList.remove("invalid");
    } else {
      e.target.classList.add("invalid");
    }
  });
});
