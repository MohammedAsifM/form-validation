document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    const fields = {
      username: {
        minLength: 5,
        message: "Username must be at least 5 characters long.",
      },
      email: {
        pattern: /^[^@]+@[^@]+\.[^@]+$/,
        message: "Please enter a valid email address.",
      },
      password: {
        pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/,
        message:
          "Password must be at least 8 characters long, include at least one uppercase letter, one special character, and one number.",
      },
      confirmPassword: {
        match: "password",
        message: "Passwords do not match.",
      },
      phoneNumber: {
        pattern: /^\d{10}$/,
        optional: true,
        message: "Phone number must be a valid 10-digit number.",
      },
    };

    Object.keys(fields).forEach((id) => {
      const field = fields[id];
      const value = document.getElementById(id).value;
      const errorElement = document.getElementById(id + "Error");
      errorElement.textContent = "";

      if (
        (field.minLength && value.length < field.minLength) ||
        (field.pattern && !field.pattern.test(value)) ||
        (field.match && value !== document.getElementById(field.match).value)
      ) {
        errorElement.textContent = field.message;
        isValid = false;
      }
    });

    if (isValid) alert("Form submitted successfully!");
  });
