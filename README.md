<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Myint Store</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <img src="logo.png" alt="Myint Store Logo" class="logo" />
    <h1>Myint Store</h1>
    <p>Classic Fashion & Accessories</p>
  </header>

  <section class="info">
    <h2>💳 ငွေပေးချေမှု</h2>
    <p>💰 စုစုပေါင်း: <strong>MMK 3000</strong></p>
    <p>✅ အတည်ပြုပြီး</p>
    <p>📱 KBZ Pay ဖုန်း: <a href="tel:09695271946">09695271946</a></p>
    <p><strong>Account Name:</strong> Myint Store</p>
    <p>📩 Screenshot ကို Messenger သို့မဟုတ် <a href="https://t.me/Muyaung" target="_blank">Telegram</a> ပေးပို့ပါ။</p>
  </section>

  <section class="form">
    <h2>📝 အချက်အလက် ဖြည့်ပါ</h2>
    <form id="orderForm">
      <input type="text" id="name" placeholder="အမည် / Name" required />
      <input type="tel" id="phone" placeholder="ဖုန်းနံပါတ် / Phone" required />
      <textarea id="address" placeholder="နေရပ်လိပ်စာ / Address" required></textarea>
      <button type="submit">ပေးပို့ရန်</button>
    </form>
    <p id="confirmation"></p>
  </section>

  <footer>
    <p>🌐 <a href="https://www.facebook.com/share/1JTUAf4awe/?mibextid=wwXIfr" target="_blank">Facebook</a> | 
       <a href="https://t.me/Muyaung" target="_blank">Telegram</a></p>
    <p>&copy; 2025 Myint Store</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background: #f7f6f3;
  color: #333;
}

header {
  background-color: #fff;
  text-align: center;
  padding: 20px;
  border-bottom: 2px solid #ccc;
}

.logo {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

h1 {
  margin: 10px 0 5px;
}

.info, .form {
  padding: 20px;
  margin: 10px auto;
  max-width: 600px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

a {
  color: #007bff;
  text-decoration: none;
}

form input, form textarea {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

footer {
  text-align: center;
  padding: 10px;
  font-size: 14px;
}
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  const confirmation = `
    ✔ Thank you, ${name}!
    📱 We’ll contact you at ${phone}
    🏠 Address: ${address}
    🛒 အမှာစာလက်ခံရရှိပါသည်။ မကြာမီ ဆက်သွယ်ပေးပါမည်။
  `;
  
  document.getElementById("confirmation").innerText = confirmation;
  document.getElementById("orderForm").reset();
});

