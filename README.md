# 🛒 E-Commerce Platform

A modern, responsive, and scalable **E-Commerce Web Application** built with **React 19, Redux Toolkit, and Vite**.  
This project demonstrates best practices in frontend development, state management, API handling, and UI/UX design.

## Features

- **Product Management** – Browse, search, and view products.
- **Wishlist & Cart** – Persisted with `redux-persist` for seamless user experience.
- **Checkout Flow** – Smooth cart-to-checkout process.
- **Responsive UI** – Optimized for all screen sizes using **TailwindCSS**.
- **Modern Slider & Animations** – Product carousels with `keen-slider` and animations with `framer-motion`.
- **Form Handling** – User-friendly forms powered by `react-hook-form` and `zod` validation.
- **API Integration** – Efficient requests using `axios`.
- **State Management** – Centralized and predictable with **Redux Toolkit**.

---

## 🛠️ Tech Stack

### **Core Frameworks & Libraries**

- **React 19** – Component-based UI.
- **Vite** – Lightning-fast build tool for modern frontend development.
- **Redux Toolkit + React Redux** – Global state management.
- **Redux Persist** – Persists cart & wishlist between sessions.

### **Styling & UI**

- **TailwindCSS** – Utility-first CSS framework.
- **Lucide React** – Modern, customizable icons.
- **Framer Motion** – Smooth, production-ready animations.
- **Shadcn** - ready to use components.
- **Radix UI** – Accessible UI primitives for dialogs, dropdowns, and more.
- **Styled Components** – Dynamic styling where needed.

### **Data Handling & Forms**

- **Axios** – Simplified HTTP requests.
- **React Hook Form** – Lightweight form management.
- **Zod** – Type-safe form validation.
- **@hookform/resolvers** – Seamless integration of `react-hook-form` with Zod.

### **UI Components & Carousels**

- **Keen Slider** – Advanced touch slider for carousels.
- **Class Variance Authority (CVA) + clsx + tailwind-merge** – Consistent and maintainable component styling.

### **Development Tools**

- **Vite Plugin SVGR** – Import SVGs as React components.
- **ESLint + Plugins** – Enforced code quality and React best practices.
- **PostCSS + Autoprefixer** – CSS processing & browser compatibility.
- **tw-animate-css** – Extended Tailwind animations.

---

## 📂 Project Structure

```bash
e-commerce/
├── public/                 # Static files
├── src/                    # Main source code
│   ├── assets/             # Images, fonts, icons
│   ├── components/         # Reusable UI components
│   ├── features/           # Feature-based modules
│   │   └── auth/           # Authentication feature
│   │       ├── authHandlers.jsx
│   │       └── authSchema.js
│   ├── lib/                # Utility functions and helpers
│   │   └── utils.js
│   ├── pages/              # Application pages (Home, Login, etc.)
│   ├── store/              # Redux store and slices
│   ├── App.jsx             # Root component
│   ├── main.css            # Global styles
│   ├── main.jsx            # Entry point
│   └── routes.jsx          # Centralized app routes
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html              # HTML template
├── jsconfig.json
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 👨‍💻 Tasneem Ahmed

Developed with ❤️ using modern web technologies.
Feel free to fork, contribute and ⭐ the repo!
