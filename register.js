function register() {
  let email = document.getElementById("regEmail").value.trim();
  let pass = document.getElementById("regPassword").value;
  let confirm = document.getElementById("regConfirm").value;

  if (!email || !pass || !confirm) {
    alert("All fields are required!");
    return;
  }
  if (pass !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let exists = users.find(u => u.email === email);

  if (exists) {
    alert("Email already registered!");
    return;
  }

  users.push({ email: email, password: pass });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful! Please login.");
  window.location.href = "login.html";
}
