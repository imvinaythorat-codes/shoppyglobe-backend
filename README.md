# ShoppyGlobe Backend API

This project is a backend RESTful API built using **Node.js**, **Express.js**, and **MongoDB** for an e-commerce–style application called **ShoppyGlobe**.

The API supports:
- Product management
- Cart management
- User authentication (JWT)
- Authorization using middleware

This project is developed as part of the course assignment **“Build APIs with Node.js”**.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs

---

## 📂 Project Structure
SHOPPYGLOBE-BACKEND-V2/
│
├── src/
│ ├── config/
│ │ └── db.js
│ ├── models/
│ │ ├── Product.js
│ │ ├── Cart.js
│ │ └── User.js
│ ├── routes/
│ │ ├── productRoutes.js
│ │ ├── cartRoutes.js
│ │ └── authRoutes.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ └── server.js
│
├── screenshots/
│ ├── 03-get-products.png
│ ├── 04-get-product-by-id.png
│ ├── 05-post-cart.png
│ ├── 06-put-cart.png
│ ├── 07-delete-cart.png
│ ├── 08-register-user.png
│ ├── 09-login-user.png
│ └── 10-protected-cart.png
│
├── .gitignore
├── package.json
└── README.md

## 🔐 Authentication & Authorization

- User authentication is implemented using **JWT**
- Passwords are hashed using **bcrypt**
- Cart routes are protected using **JWT middleware**
- Unauthorized users cannot access protected routes

---

## 📌 API Endpoints

### 🧑 Authentication
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | Login user & get JWT |

---

### 📦 Products
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |

---

### 🛒 Cart (Protected Routes)
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/cart` | Add product to cart |
| PUT | `/cart/:id` | Update cart item |
| DELETE | `/cart/:id` | Remove cart item |

> ⚠️ Cart routes require `Authorization: Bearer <JWT_TOKEN>` header.

---

## 🧪 Testing

All APIs were tested using **Postman / Thunder Client**.

Screenshots of successful API responses are available in the `screenshots/` folder as proof of implementation.

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shoppyglobe
JWT_SECRET=supersecretkey
> `.env` file is intentionally excluded from GitHub for security reasons.

---

## ▶️ How to Run the Project

1. Install dependencies:
```bash
npm install

2. Start the server:
node src/server.js

3. Server will run on:
http://localhost:5000

> APIs were tested using Postman (equivalent to Thunder Client).
