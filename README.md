# 🏡 Home Mortgage Consultation (Better.com Replica)

This project is a **multi-page React + Next.js application** built as part of the React Intern assignment.  
It replicates the design and basic functionality of selected pages from [Better.com](https://better.com).

---

## 🚀 Live Demo

🔗 **Deployed on Vercel:** [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)  
🔗 **GitHub Repo:** [Home-Mortage-Consultation](https://github.com/Niladri-Peace/Home-Mortage-Consultation)

---

## 📌 Assignment Requirements Covered

- ✅ **React + Next.js Application** (scaffolded with `create-next-app`)  
- ✅ **Replica Pages Implemented:**
  - Home → [`/`](https://better.com)  
  - About Us → [`/about-us`](https://better.com/about-us/)  
  - Mortgage Calculator → [`/mortgage-calculator`](https://better.com/mortgage-calculator?taxes=265&zip=421005)  
  - Start Page → [`/start`](https://better.com/start)  
- ✅ **Routing**: Configured with Next.js `pages/`  
- ✅ **Interactive Mortgage Calculator**
  - Calculates **principal & interest**
  - Adds **taxes & insurance**
  - Supports **query params** (`/mortgage-calculator?taxes=265&zip=421005`)  
- ✅ **Responsive Design** (mobile, tablet, desktop)  
- ✅ **Styling**: CSS Modules + global styles  
- ✅ **Deployment**: Deployed on **Vercel**  
- ✅ **GitHub Source Code** available  

---

## 🖥️ Tech Stack

- [Next.js](https://nextjs.org/) — React Framework  
- [React](https://react.dev/) — UI Components  
- [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) — Styling  
- [Vercel](https://vercel.com/) — Deployment & Hosting  

---

## 📂 Project Structure

```

/Home-Mortage-Consultation
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── MortgageCalculator.jsx
├── pages/
│   ├── index.js               # Home page
│   ├── about-us.js            # About Us page
│   ├── mortgage-calculator.js # Mortgage Calculator
│   └── start.js               # Start page (form)
├── styles/
│   ├── globals.css
│   └── MortgageCalculator.module.css
└── README.md

````

---

## ⚡ Mortgage Calculator Features

- Formula:  
  \[
  M = \frac{P \times r \times (1+r)^n}{(1+r)^n - 1}
  \]  
  Where:  
  - `P` = Loan principal (Home price − Down payment)  
  - `r` = Monthly interest rate (APR ÷ 12)  
  - `n` = Loan term in months  

- **Interactive Inputs**: Home price, down payment, rate, term, taxes, ZIP  
- **Dynamic Results**: Monthly payment breakdown (P&I, Taxes, Insurance)  
- **Prefill via Query String** (`/mortgage-calculator?taxes=265&zip=421005`)  

---

## 🔧 Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/Niladri-Peace/Home-Mortage-Consultation.git
   cd Home-Mortage-Consultation
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run locally:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in browser.

4. Build production:

   ```bash
   npm run build
   npm start
   ```

---

## 📱 Responsiveness

* Uses CSS Grid & Flexbox for layout.
* Media queries included in `MortgageCalculator.module.css`.
* Tested on **desktop, tablet, and mobile** viewports.

---

## 📧 Submission

* **GitHub Repo:** [Home-Mortage-Consultation](https://github.com/Niladri-Peace/Home-Mortage-Consultation)
* **Deployed App:** [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)
* Submitted to: `tech@themedius.ai` & `hr@themedius.ai`

---

## 👨‍💻 Author

* **Name:** Niladri Bhandari
* **LinkedIn:** [linkedin.com/in/niladri-bhandari](https://www.linkedin.com/in/niladri-bhandari/)
* **GitHub:** [Niladri-Peace](https://github.com/Niladri-Peace)

---
