# BlogTweet

A refined, modern blogging platform built with React and Appwrite. Share your stories with elegance and simplicity.

![BlogTweet Screenshot](https://via.placeholder.com/800x400?text=BlogTweet+Preview)

## ✨ Features

- **Elegant Design** — Clean, minimalist UI with thoughtful typography and smooth animations
- **User Authentication** — Secure signup and login powered by Appwrite
- **Create & Edit Posts** — Rich text editor with image uploads
- **Responsive Layout** — Beautiful experience across all devices
- **Post Management** — View all posts, search, and manage your content
- **Secure Access** — Authentication-based access control for content

## 🛠️ Tech Stack

- **Frontend:** React 19 + Vite
- **Styling:** Tailwind CSS 3.4
- **Backend:** Appwrite (Authentication, Database, Storage)
- **State Management:** Redux Toolkit
- **Animations:** Framer Motion
- **Rich Text Editor:** TinyMCE
- **Forms:** React Hook Form

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Appwrite backend setup

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blogtweet.git
cd blogtweet
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with your Appwrite credentials:
```env
VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── appwrite/           # Appwrite configuration and services
├── components/         # Reusable UI components
│   ├── Header/         # Navigation header
│   ├── Footer/         # Site footer
│   ├── post-form/      # Post creation/editing forms
│   └── ...
├── pages/              # Route pages
│   ├── Home.jsx        # Landing page with posts grid
│   ├── Post.jsx        # Individual post view
│   ├── AddPost.jsx     # Create new post
│   ├── AllPosts.jsx    # All posts with search
│   └── ...
├── store/              # Redux store and slices
├── conf/               # Configuration files
└── index.css           # Global styles with Tailwind
```

## 🎨 Design System

### Colors
- **Primary:** Slate 900 (`#0f172a`)
- **Secondary:** Slate 600 (`#475569`)
- **Accent:** Indigo 600 (`#4f46e5`)
- **Background:** Slate 50 (`#f8fafc`)
- **Surface:** White (`#ffffff`)

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### Key UI Patterns
- Glass morphism effects with `backdrop-blur`
- Subtle shadows and borders for depth
- Smooth hover transitions
- Rounded corners (2xl) throughout

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📝 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_APPWRITE_URL` | Your Appwrite endpoint URL |
| `VITE_APPWRITE_PROJECT_ID` | Appwrite project ID |
| `VITE_APPWRITE_DATABASE_ID` | Database ID for posts |
| `VITE_APPWRITE_COLLECTION_ID` | Collection ID for posts |
| `VITE_APPWRITE_BUCKET_ID` | Storage bucket ID for images |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Appwrite](https://appwrite.io/) — Backend as a Service
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [TinyMCE](https://www.tiny.cloud/) — Rich text editor

---

Built with ❤️
