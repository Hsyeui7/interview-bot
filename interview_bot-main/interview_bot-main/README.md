# 🎤 Interview Bot

An AI-powered mock interview platform built with **Next.js** that helps users practice technical and HR interviews through voice or text interactions. The application generates personalized interview questions, evaluates responses using AI, and provides detailed feedback to help users improve their communication and problem-solving skills.

---

## 🚀 GitHub Repository

🔗 https://github.com/Keshav-pro1/interview_bot

---

## ✨ Features

- 🤖 AI-generated interview questions
- 🎙️ Voice-based interview sessions
- 📝 Real-time speech-to-text transcription
- 📊 Instant AI feedback and scoring
- 📚 Multiple interview categories (Technical, HR, Aptitude)
- 🎯 Difficulty levels (Easy, Medium, Hard)
- 🔐 User authentication
- 📈 Interview history and progress tracking
- 🌙 Modern responsive UI

---

## 🛠️ Tech Stack

### Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS

### Backend & Database
- Firebase / Supabase

### AI Integration
- Google Gemini API / OpenAI API

### Voice Processing
- Web Speech API

### Deployment
- Vercel

---

## 📂 Project Structure

```bash
interview_bot/
├── app/                    # Next.js App Router
│   ├── dashboard/
│   ├── interview/
│   ├── feedback/
│   └── page.tsx
├── components/             # Reusable components
│   ├── Navbar.tsx
│   ├── InterviewCard.tsx
│   ├── VoiceRecorder.tsx
│   └── FeedbackChart.tsx
├── lib/                    # Utility functions
│   ├── gemini.ts
│   ├── db.ts
│   └── utils.ts
├── public/                 # Static assets
├── styles/                 # Global styles
├── types/                  # TypeScript definitions
├── .env.local              # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Keshav-pro1/interview_bot.git
cd interview_bot
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXTAUTH_SECRET=your_secret_key
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Open your browser at:

```text
http://localhost:3000
```

---

## 🧠 How It Works

1. User signs in to the platform.
2. Selects interview category and difficulty level.
3. AI generates tailored interview questions.
4. User answers using voice or text.
5. Speech is converted to text.
6. AI analyzes the response.
7. Detailed feedback, score, and improvement suggestions are displayed.
8. Results are saved for future review.

---

## 📸 Screenshots

Add screenshots of:

- 🏠 Home Page
- 🎤 Interview Session
- 📊 Feedback Dashboard
- 📈 Interview History

Example:

```markdown
![Home Page](./public/screenshots/home.png)
![Interview Screen](./public/screenshots/interview.png)
![Feedback Dashboard](./public/screenshots/feedback.png)
```

---

## 📊 Feedback Metrics

The bot evaluates responses on:

- Relevance
- Technical Accuracy
- Communication Skills
- Confidence
- Problem-Solving Approach
- Overall Score

---

## 🚀 Deployment

### Deploy to Vercel

```bash
npm run build
```

Then deploy using:

```bash
vercel
```

Or connect the repository directly to Vercel.

---

## 🔮 Future Enhancements

- 🎥 Video interview support
- 📄 Resume upload and analysis
- 🏢 Company-specific interview sets
- 🧠 Personalized learning recommendations
- 📥 Export feedback as PDF
- 🏆 Leaderboard and achievements

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/your-feature-name
```

3. Commit changes

```bash
git commit -m "Add your feature"
```

4. Push to your branch

```bash
git push origin feature/your-feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Keshav Gupta**

- GitHub: https://github.com/Keshav-pro1
- LinkedIn: Add your LinkedIn profile here

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

---

## 📄 License

This project is licensed under the MIT License.
