// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtGEHsWLZqUARxUWGW34K47Wze-ECfAlE",
  authDomain: "leadshare-e473c.firebaseapp.com",
  projectId: "leadshare-e473c",
  storageBucket: "leadshare-e473c.firebasestorage.app",
  messagingSenderId: "918335186186",
  appId: "1:918335186186:web:eaaa0b378dfdd8c6cb06f3",
  measurementId: "G-7KWTJNY7H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// 🔁 Auth state listener (optional)
auth.onAuthStateChanged(user => {
  const info = document.getElementById('user-info');
  if (user && info) {
    info.innerHTML = `<img src="${user.photoURL}" style="width:30px;border-radius:50%;"> ${user.displayName}`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ideaForm");
    const message = document.getElementById("submitMessage");
    if (form && message) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const type = document.getElementById("type").value;
        message.style.display = "block";
        message.style.color = "green";
        message.innerText = Thanks, ${name}! Your ${type} has been submitted.;
        form.reset();
      });
    }
  
    const replyButtons = document.querySelectorAll(".reply-btn");
    replyButtons.forEach(button => {
      button.addEventListener("click", function () {
        const replies = this.closest(".post").parentElement.querySelectorAll(".reply");
        replies.forEach(reply => {
          reply.style.display = reply.style.display === "none" ? "block" : "none";
        });
      });
    });
  
    const posts = document.querySelectorAll(".post");
    posts.forEach(post => {
      const likeBtn = document.createElement("button");
      likeBtn.innerText = "👍 Like";
      likeBtn.className = "like-btn";
      likeBtn.style.marginTop = "10px";
      let liked = false;
      likeBtn.addEventListener("click", () => {
        liked = !liked;
        likeBtn.innerText = liked ? "💙 Liked" : "👍 Like";
      });
      post.appendChild(likeBtn);
    });
  
    // Toggle switch for dark mode
    const toggleWrapper = document.createElement("div");
    toggleWrapper.style.position = "fixed";
    toggleWrapper.style.top = "6rem";
    toggleWrapper.style.right = "1rem";
    toggleWrapper.style.zIndex = "1001";
  
    const toggleSwitch = document.createElement("label");
    toggleSwitch.classList.add("switch");
    toggleSwitch.innerHTML = 
      <input type="checkbox" id="darkToggleInput">
      <span class="slider round"></span>
    ;
    toggleWrapper.appendChild(toggleSwitch);
    document.body.appendChild(toggleWrapper);
  
    const savedTheme = localStorage.getItem("leadshare-theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      toggleSwitch.querySelector("input").checked = true;
    }
  
    toggleSwitch.querySelector("input").addEventListener("change", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("leadshare-theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });
  
    // Theme picker
    const colorPicker = document.createElement("div");
    colorPicker.className = "theme-picker";
    colorPicker.style.position = "fixed";
    colorPicker.style.top = "9.5rem";
    colorPicker.style.right = "1rem";
    colorPicker.style.display = "flex";
    colorPicker.style.flexDirection = "column";
    colorPicker.style.gap = "0.5rem";
    colorPicker.style.zIndex = "1001";
    colorPicker.innerHTML = 
      <button class="blue" title="Blue" style="background-color: #0077ff; width: 28px; height: 28px; border-radius: 50%; border: none; cursor: pointer;"></button>
      <button class="green" title="Green" style="background-color: #00c853; width: 28px; height: 28px; border-radius: 50%; border: none; cursor: pointer;"></button>
      <button class="purple" title="Purple" style="background-color: #8e24aa; width: 28px; height: 28px; border-radius: 50%; border: none; cursor: pointer;"></button>
    ;
    document.body.appendChild(colorPicker);
  
    colorPicker.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
          let color = btn.className;
          document.body.classList.remove("blue", "green", "purple");
          document.body.classList.add(color);
      
          switch (color) {
            case "green":
              document.documentElement.style.setProperty("--accent-color", "#00c853");
              break;
            case "purple":
              document.documentElement.style.setProperty("--accent-color", "#8e24aa");
              break;
            default:
              document.documentElement.style.setProperty("--accent-color", "#0077ff");
          }
      
          localStorage.setItem("leadshare-accent", color);
        });
      });
      
      const savedAccent = localStorage.getItem("leadshare-accent");
      if (savedAccent) {
        document.body.classList.add(savedAccent);
        const event = new Event("click");
        document.querySelector(.theme-picker .${savedAccent})?.dispatchEvent(event);
      }
        // 🔓 Google login
      const loginBtn = document.getElementById("login-btn");
      const logoutBtn = document.getElementById("logout-btn");

      if (loginBtn) {
        loginBtn.addEventListener("click", () => {
          const provider = new firebase.auth.GoogleAuthProvider();
          auth.signInWithPopup(provider).catch(console.error);
        });
      }

      if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
          auth.signOut();
        });
      }
    });
