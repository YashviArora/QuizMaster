# QuizMaster Pro 🚀 (Evaluation-II Production Architecture)

An advanced, interactive single-page web quiz engine built with **HTML5, CSS3, ES6+ JavaScript, DOM Manipulation, and REST API Integration**, adhering strictly to the **Front End Engineering-II Course Plan (25CSE0203)**.

---

## 🌟 CHO Evaluation-II Concepts Implemented

| Syllabus Concept | Implementation in QuizMaster Pro |
| :--- | :--- |
| **REST API & Async/Await** | Consumes external trivia questions via `fetch()` from Open Trivia API with `try/catch` error handling and loading spinners. |
| **UI Components & Patterns** | Custom interactive Modal dialog, category & difficulty filters/dropdowns, toast alerts, and history records. |
| **Form Handling & Validation**| Add Custom Question form with input length checks, required options validation, and state insertion. |
| **Browser Storage & JSON** | Persists high score, past 5 attempts log, custom questions, and dark mode state across reloads via `localStorage`. |
| **DOM & ES6+ Architecture** | Modular Class-based structure (`QuizApp`), destructuring, template literals, arrow functions, and spread operators. |
| **Responsive Web Design** | Dynamic CSS Grid, Flexbox, CSS Custom Variables (Design Tokens), and glassmorphism. |

---

## 🎯 Viva Q&A Guide for Evaluation

1. **How does the REST API call work in this project?**
   - Hum `fetch('https://opentdb.com/api.php?...')` use karte hain `async/await` syntax ke saath. Network response ko check karne ke liye `try/catch` block aur `.json()` parsing use ki gayi hai, aur user ko loading state dikhane ke liye spinner toggle hota hai.

2. **How is state maintained between screens?**
   - Application state ko `QuizApp` instance aur browser `localStorage` mein JSON format (`JSON.stringify()` / `JSON.parse()`) ke zariye synchronize rakha gaya hai.

3. **How does Form Validation prevent invalid data?**
   - Question form mein character length check (`length >= 8`) aur har option ka presence verify hota hai before appending to the local questions array.