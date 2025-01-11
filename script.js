document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;

    if (firstname === "") {
      document.getElementById("firstname-error").textContent =
        "First name cannot be empty";
      document.getElementById("firstname").classList.add("input-error");
      isValid = false;
    } else {
      document.getElementById("firstname-error").textContent = "";
      document.getElementById("firstname").classList.remove("input-error");
    }

    if (lastname === "") {
      document.getElementById("lastname-error").textContent =
        "Last name cannot be empty";
      document.getElementById("lastname").classList.add("input-error");
      isValid = false;
    } else {
      document.getElementById("lastname-error").textContent = "";
      document.getElementById("lastname").classList.remove("input-error");
    }

    if (email === "") {
      document.getElementById("email-error").textContent =
        "Email cannot be empty";
      document.getElementById("email").classList.add("input-error");
      isValid = false;
    } else if (!validateEmail(email)) {
      document.getElementById("email-error").textContent =
        "Please enter a valid email address";
      document.getElementById("email").classList.add("input-error");
      isValid = false;
    } else {
      document.getElementById("email-error").textContent = "";
      document.getElementById("email").classList.remove("input-error");
    }

    if (password === "") {
      document.getElementById("password-error").textContent =
        "Password cannot be empty";
      document.getElementById("password").classList.add("input-error");
      isValid = false;
    } else {
      document.getElementById("password-error").textContent = "";
      document.getElementById("password").classList.remove("input-error");
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
