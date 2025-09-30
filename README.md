# SafeSphere 🌐

**SafeSphere** is an anonymous reporting platform designed to help students report campus incidents such as bullying, harassment, and other safety concerns directly to campus authorities – all while keeping their identity completely anonymous.  

The platform is built with **React.js** and **Tailwind CSS**, with a modern, responsive, and user-friendly interface. It aims to create safer campus environments by empowering students to report incidents without fear.

---

## 💡 Features

### Core Features
- **Anonymous Reporting:** Students can report incidents without revealing their identity.
- **Category-Based Forms:** Reports can be categorized as Bullying, Harassment, Theft, or Other.
- **Responsive UI:** Works on mobile, tablet, and desktop screens.
- **FAQ Section:** Provides answers to common questions about reporting and anonymity.
- **Language Selector:** Multi-language support (English, Hindi, etc.).
- **Light Blue / White / Yellow Theme:** Represents trust, clarity, and caution.

### Future Features
- **Authority Dashboard:** Campus authorities can view, track, and manage reports.
- **Data Analytics:** Visual charts showing incident categories and trends.
- **Email Notifications:** Alerts sent to authorities on new reports.
- **Attachment Upload:** Students can attach screenshots or evidence.
- **AI Categorization:** NLP-based automatic incident categorization.

---

## 🏗️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Routing:** React Router
- **State Management:** React useState & Context API (optional)
- **Icons & Animations:** React Icons, Tailwind Animations
- **Backend (Future):** Node.js, Express, MongoDB/MySQL
- **Authentication (Future):** JWT for authorities

---

## 🗂️ Folder Structure

safesphere/
├── src/
│ ├── assets/ # images, icons
│ ├── components/ # reusable UI components
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── Hero.jsx
│ │ ├── IncidentForm.jsx
│ │ ├── FAQ.jsx
│ │ ├── LanguageSelector.jsx
│ │ └── Card.jsx
│ ├── pages/ # full pages
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Report.jsx
│ │ ├── FAQPage.jsx
│ │ ├── Login.jsx
│ │ └── Dashboard.jsx (future)
│ ├── App.jsx
│ ├── index.js
│ └── index.css
├── public/
└── package.json


---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Coderbarkha/SafeSphere.git
cd SafeSphere

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm start


Open http://localhost:3000
 to view the app in the browser.

🎨 Design Guidelines

Color Palette:

Light Blue → Calm & Trust

White → Clarity & Simplicity

Yellow → Caution & Warning

Typography: Clean, modern fonts (Roboto / Inter / Assistant)

UI Style: Minimalistic, responsive, card-based layout

📈 Future Roadmap

Integrate backend APIs for report submission and authority dashboard.

Add authentication for campus authorities (JWT).

Implement email notifications for new reports.

Add multi-language support and PWA features.

Build analytics dashboard with graphs and charts.

🤝 Contribution

Contributions are welcome! If you want to contribute, please:

Fork the repository

Create a new branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m "Add some feature")

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request

⚖️ License

This project is open-source and available under the MIT License.

📌 Contact

Developer: Barkha Thakkar
GitHub: https://github.com/Coderbarkha

LinkedIn: [Your LinkedIn URL]
Email: [Your Email]

SafeSphere – Empowering students, making campuses safer.