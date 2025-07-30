# 🍔 Zomo Food Delivery App (MERN Stack)

Zomo is a fully functional **Restaurant Food Delivery Web Application** built using the **MERN stack** with **React Vite**, **Node.js**, **Express**, and **MongoDB**. It features secure **JWT authentication**, **Stripe** payment integration, and a dedicated **Admin Panel** for order and food management. This is a complete modern food ordering platform deployed via **Render**.

---

## 🚀 Live Demo

- **Frontend (User):** [Zomo Food App](https://zomo-food-delivery-app-mern-frontend.onrender.com)  
- **Backend (API):** [Zomo API](https://zomo-food-delivery-app-mern-backend.onrender.com)  
- **Admin Panel:** [Zomo Admin](https://zomo-food-delivery-app-mern-admin.onrender.com)  
> *(Replace these URLs with your actual Render deployment links)*

---

## ✨ Features

- ✅ User Registration & Login (JWT Auth)
- 🍱 Browse & Select Favorite Foods
- 🛒 Add to Cart & Checkout
- 💳 Secure Payments via Stripe
- 🧾 Order History & Confirmation
- 🧑‍💼 Admin Panel for Food & Order Management
- ⚙️ Input Validations using `validator.js`
- 🌐 Responsive UI with React & Vite
- 📦 Deployed using [Render](https://render.com)

---

## 🧰 Tech Stack

| Frontend       | Backend           | Database   | Tools & Others       |
| -------------- | ----------------- | ---------- | -------------------- |
| React + Vite   | Node.js + Express | MongoDB    | JSON Web Token (JWT) |
| JavaScript     | REST APIs         | Mongoose   | Stripe API           |
| TailwindCSS    | Validator.js      |            | Render Deployment    |
| Axios          |                   |            | npm Package Manager  |

---

## 📂 Project Structure

Zomo-Food-Delivery-App-MERN/
│
├── client/ # React Vite Frontend
├── admin/ # Admin Panel (React)
├── server/ # Node.js + Express Backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── utils/
├── .env # Environment variables
└── README.md # This file

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js & npm installed
- MongoDB Atlas cluster or local MongoDB
- Stripe account for API keys

---

2. Install Dependencies
bash
Copy
Edit
# Backend
cd server
npm install

# Frontend (Client)
cd ../client
npm install

# Admin Panel
cd ../admin
npm install


3. Configure Environment Variables
Create a .env file in the /server directory:

env
Copy
Edit
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key


4. Start the App
bash
Copy
Edit
# Start Backend
cd server
npm run dev

# Start Client (in another terminal)
cd client
npm run dev

# Start Admin Panel (in another terminal)
cd admin
npm run dev
🧪 Testing
You can now test:

Sign up & login
Select food items
Place an order via Stripe
Use Admin Panel to manage menu and orders

📦 Deployment
All services (Client, Server, Admin) are deployed using Render:
Backend: Web Service
Client & Admin: Static Site

🛡️ Security & Best Practices
Passwords are hashed before storage.
Protected routes via JWT.
Input validation with validator.js.
Environment variables for all secrets.

👨‍💻 Author
Ayush Verma
MERN Stack Developer | India
🔗 LinkedIn
📫 Feel free to reach out for collaborations or suggestions!

📃 License
This project is licensed under the MIT License.

📌 Future Improvements
User profile editing
Admin analytics dashboard
Email confirmations & receipts
Mobile app version

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Zomo-Food-Delivery-App-MERN.git
cd Zomo-Food-Delivery-App-MERN
