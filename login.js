function login() {
  let email = document.getElementById("loginEmail").value.trim();
  let pass = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let valid = users.find(u => u.email === email && u.password === pass);

  if (valid) {
    alert("Login successful!");
    localStorage.setItem("loggedInUser", JSON.stringify(valid));
    window.location.href = "sample.html"; 
  } else {
    alert("Invalid email or password!");
  }
}
