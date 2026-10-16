<!--
NOTE: I could not open this repository, so this README is a TEMPLATE.
Everything marked [CONFIRM] or [FILL IN] must be checked against your actual code
(package.json, folder names, .env variables, routes) before you commit it.
Rename this file to README.md when you add it to your repo.
-->

# 🍔 Zomo – Food Delivery App (MERN Stack)

A full-stack food delivery web application built with **MongoDB, Express.js, React and Node.js**, inspired by apps like Zomato.

> [FILL IN] One or two sentences on what makes your app specific: who it is for, what you built it to learn.

---

## 📑 Table of Contents

1. [Live Demo](#-live-demo)
2. [Screenshots](#-screenshots)
3. [Features](#-features)
4. [Tech Stack](#-tech-stack)
5. [Project Structure](#-project-structure)
6. [Getting Started](#-getting-started)
7. [Environment Variables](#-environment-variables)
8. [API Endpoints](#-api-endpoints)
9. [Database Models](#-database-models)
10. [How It Works](#-how-it-works)
11. [Future Improvements](#-future-improvements)
12. [Contributing](#-contributing)
13. [License](#-license)
14. [Author](#-author)

---

## 🌐 Live Demo

- Frontend: [FILL IN or remove]
- Backend API: [FILL IN or remove]

## 📸 Screenshots

<!-- Create a /screenshots folder in the repo and add images -->
| Home | Restaurant / Menu | Cart | Checkout |
|------|-------------------|------|----------|
| ![Home](screenshots/home.png) | ![Menu](screenshots/menu.png) | ![Cart](screenshots/cart.png) | ![Checkout](screenshots/checkout.png) |

---

## ✨ Features

**Customer**
- [CONFIRM] User registration and login with JWT authentication
- [CONFIRM] Browse restaurants and food items
- [CONFIRM] Search and filter by category / cuisine
- [CONFIRM] Add to cart, update quantity, remove items
- [CONFIRM] Place orders and view order history
- [CONFIRM] Payment integration (Stripe / Razorpay / Cash on Delivery)

**Admin** *(delete this block if your app has no admin panel)*
- [CONFIRM] Add, edit and delete food items
- [CONFIRM] View and update order status

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, [CONFIRM: Redux / Context API], [CONFIRM: React Router], [CONFIRM: Tailwind / Bootstrap / CSS] |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose |
| Authentication | [CONFIRM] JWT, bcrypt |
| Other | [CONFIRM] Axios, Multer, dotenv, CORS |

---

## 📁 Project Structure

<!-- Replace with the real tree. Run `tree -I node_modules -L 3` in the repo root. -->
```
Zomo-Food-Delivery-App-MERN/
├── backend/            # [CONFIRM] Express server
│   ├── config/         # DB connection
│   ├── controllers/    # Request handlers
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── middleware/     # Auth, error handling
│   ├── server.js       # Entry point
│   └── package.json
├── frontend/           # [CONFIRM] React app
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/ or store/
│   │   └── App.js
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or later
- [MongoDB](https://www.mongodb.com/) (local or a MongoDB Atlas connection string)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/Ayush-verma25/Zomo-Food-Delivery-App-MERN.git
cd Zomo-Food-Delivery-App-MERN
```

### 2. Set up the backend
```bash
cd backend            # [CONFIRM folder name]
npm install
cp .env.example .env  # then fill in your values
npm start             # [CONFIRM: or npm run dev]
```

### 3. Set up the frontend
```bash
cd ../frontend        # [CONFIRM folder name]
npm install
npm start
```

The app should now be running at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000 *(or whichever port you set)*

---

## 🔐 Environment Variables

Create a `.env` file in the backend folder. **Never commit this file.**

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
# [CONFIRM / add what your code actually reads]
# STRIPE_SECRET_KEY=
# RAZORPAY_KEY_ID=
# RAZORPAY_KEY_SECRET=
```

If the frontend uses variables too, create `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:5000
```

---

## 🔌 API Endpoints

<!-- Replace with the routes defined in your routes/ folder -->

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive a JWT |

### Food / Restaurants
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/food` | Get all food items |
| GET | `/api/food/:id` | Get one item |
| POST | `/api/food` | Add item (admin) |

### Cart & Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/cart` | Add item to cart |
| POST | `/api/orders` | Place an order |
| GET | `/api/orders` | Get the logged-in user's orders |

---

## 🗄 Database Models

<!-- Mirror the schemas in your models/ folder -->

- **User** – `name`, `email`, `password (hashed)`, `role`, `cart`
- **Food** – `name`, `description`, `price`, `category`, `image`
- **Order** – `user`, `items[]`, `amount`, `address`, `status`, `payment`, `createdAt`

---

## ⚙️ How It Works

1. A user signs up or logs in. The server returns a **JWT**, which the frontend sends with protected requests.
2. The React app fetches food items from the Express API, which reads from MongoDB through Mongoose.
3. Cart changes are kept in app state and/or the database.
4. At checkout, the order is saved with a status such as `Processing → Out for delivery → Delivered`.
5. [CONFIRM] Payment is handled by [provider], then the order is marked as paid.

---

## 🔮 Future Improvements

- [ ] Real-time order tracking
- [ ] Ratings and reviews
- [ ] Coupons and discounts
- [ ] Email / SMS notifications
- [ ] Deployment with CI/CD

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

[FILL IN] e.g. MIT. Add a `LICENSE` file to the repo root.

---

## 👤 Author

**Ayush Verma**
GitHub: [@Ayush-verma25](https://github.com/Ayush-verma25)

⭐ If you found this project useful, consider giving it a star!
