<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Course Registration</title>
    <style>
      .form-group {
        margin-bottom: 10px;
      }
      .error {
        color: red;
        font-size: 0.8em;
      }
      .success-message {
        color: green;
        font-weight: bold;
        margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <div class="registration-form">
      <form id="registration-form">
        <div class="form-group">
          <label for="studentID">Student ID</label>
          <input type="text" id="studentID" name="studentID" class="form-control"/>
          <div id="studentID-error" class="form-group error"></div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" class="form-control"/>
          <div id="email-error" class="form-group error"></div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" class="form-control"/>
          <div id="password-error" class="form-group error"></div>
        </div>
        <button type="submit" class="submit-button">Submit</button>
        <div id="success-message" class="success-message" style="display: none">
          Registration successful!
        </div>
      </form>
    </div>

    <script>
      const registrationForm = document.getElementById("registration-form");
      const studentID = document.getElementById("studentID");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const studentIDError = document.getElementById("studentID-error");
      const emailError = document.getElementById("email-error");
      const passwordError = document.getElementById("password-error");
      const successMessage = document.getElementById("success-message");

      registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let errorForm = false;

        // Reset error messages
        studentIDError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        successMessage.style.display = "none";

        // Validate Student ID
        const studentIDValue = studentID.value.trim();
        const studentIDRegex = /^[a-zA-Z0-9]+$/;
        if (!studentIDValue) {
          studentIDError.textContent = "Student ID is required.";
          errorForm = true;
        } else if (!studentIDRegex.test(studentIDValue)) {
          studentIDError.textContent = "Student ID can only contain letters and numbers.";
          errorForm = true;
        }

        // Validate Email
        const emailValue = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValue) {
          emailError.textContent = "Email is required.";
          errorForm = true;
        } else if (!emailRegex.test(emailValue)) {
          emailError.textContent = "Please enter a valid email address.";
          errorForm = true;
        }

        // Validate Password
        const passwordValue = password.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordValue) {
          passwordError.textContent = "Password is required.";
          errorForm = true;
        } else if (!passwordRegex.test(passwordValue)) {
          passwordError.textContent =
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
          errorForm = true;
        }

        // Show success message if all fields are valid
        if (!errorForm) {
          successMessage.style.display = "block";
          registrationForm.reset();
        }
      });
    </script>
  </body>
</html>
