const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
  
const signinUsername = document.getElementById('signin-username');
const signinEmail = document.getElementById('signin-email');
const signinPassword = document.getElementById('signin-password');
const signupUsername = document.getElementById('signup-username');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');

// const validateEmail = (email) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };

// const validatePassword = (password) => {
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   return passwordRegex.test(password);
// };

// document.querySelector('.sign-in-form').addEventListener('submit', (e) => {
//   if (signinUsername.value.trim() === '' || signinEmail.value.trim() === '' || signinPassword.value.trim() === '') {
//     e.preventDefault();
//     alert('Username, email, and password are required!');
//   } else if (!validateEmail(signinEmail.value)) {
//     e.preventDefault();
//     alert('Invalid email address!');
//   } else if (!validatePassword(signinPassword.value)) {
//     e.preventDefault();
//     alert('Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long!');
//   } else {
//     // Redirect to home page
//     window.location.href = 'home.html'; // Change 'home.html' to your actual home page URL
//   }
// });

// document.querySelector('.sign-up-form').addEventListener('submit', (e) => {
//   if (signupUsername.value.trim() === '' || signupEmail.value.trim() === '' || signupPassword.value.trim() === '') {
//     e.preventDefault();
//     alert('Username, email, and password are required!');
//   } else if (!validateEmail(signupEmail.value)) {
//     e.preventDefault();
//     alert('Invalid email address!');
//   } else if (!validatePassword(signupPassword.value)) {
//     e.preventDefault();
//     alert('Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long!');
//   } else {
//     // Redirect to home page
//     window.location.href = 'home.html'; // Change 'home.html' to your actual home page URL
//   }
// });

function fun(){
  pat=/^_|^@|^\d/;
  pat_u = /[^0-9]/;
  data_display = document.getElementById("test");
  data_display_1 = document.getElementById("test_1");
  uname = document.getElementById("t1").value;
  pass = document.getElementById("p1").value;
  if(uname.length==0)
  {
      data_display.innerHTML = "Not be blank"
  }
  if(pass.length == 0){
      data_display_1.innerHTML = "Not be blank"
  }
  if(!(pat.test(pass)) && pass.length>=5){
    data_display.innerHTML="Enter valid Password (Should not start with _, @and any number)"
  }
  if(!pat_u.test(uname)){
    data_display_1.innerHTML="Invalid Username"
  }
}

function fun1(){
  data_display = document.getElementById("test");
  data_display_1 = document.getElementById("test_1");
  data_display.textContent = '';
  data_display_1.textContent = ''; 
}