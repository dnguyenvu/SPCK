document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
  
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });
  
    document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
    });
  
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
  
      var myData
    });
  });
  
  // Signup function
  function signup(e) {
    event.preventDefault();
    console.log('working');
  
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    var user = {
      email: email,
      username: username,
      password: password,
    };
  
    // storing input from register-form
    var json =  JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log("USER ADDED");
  }

  