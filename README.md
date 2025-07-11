# 🚀 Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations, interactive components, and a sleek design that showcases professional experience and projects.

## 🌟 Live Demo

🚀 **[View Live Portfolio](https://sanketvagal.vercel.app/)**

<p float="left">
  <img src="https://github.com/user-attachments/assets/87e282bf-fed8-4f1a-8134-38dc2fd24da1" width=65% />
</p>

## ✨ Features

- **🎨 Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **📱 Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **🎯 Interactive Navigation**: Smooth scrolling with active section highlighting
- **🌈 Animated Background**: Dynamic particle effects and gradient animations
- **📊 Analytics Integration**: Built-in Vercel Analytics for performance tracking
- **⚡ Performance Optimized**: Next.js 15 with Turbopack for lightning-fast development
- **🎭 Smooth Animations**: Engaging transitions and hover effects
- **📧 Contact Integration**: Easy-to-use contact section with social links

## 🛠️ Tech Stack

### Frontend

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with modern features
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful, customizable icons

### Development & Deployment

- **[Vercel](https://vercel.com/)** - Deployment and hosting platform
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance and usage analytics
- **[ESLint](https://eslint.org/)** - Code linting and quality assurance
- **[Turbopack](https://turbo.build/)** - Fast bundler for development

### Fonts

- **[Geist](https://vercel.com/font)** - Modern sans-serif font family
- **[Geist Mono](https://vercel.com/font)** - Monospace font for code

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets
│   ├── *.svg               # SVG icons and graphics
│   └── favicon.ico         # Website favicon
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── favicon.ico     # App favicon
│   │   ├── globals.css     # Global styles
│   │   ├── layout.js       # Root layout component
│   │   └── page.js         # Homepage
│   └── components/         # React components
│       ├── data/
│       │   └── portfolioData.js  # Portfolio content data
│       ├── AboutSection.jsx      # About section component
│       ├── AnimatedBackground.jsx # Background animations
│       ├── ContactSection.jsx    # Contact information
│       ├── ExperienceSection.jsx # Work experience
│       ├── HeroSection.jsx       # Hero/landing section
│       ├── Navigation.jsx        # Navigation component
│       ├── Portfolio.jsx         # Main portfolio component
│       ├── ProjectsSection.jsx   # Projects showcase
│       └── SkillsSection.jsx     # Skills and technologies
├── eslint.config.mjs       # ESLint configuration
├── jsconfig.json          # JavaScript configuration
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sanketvagal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🎯 Portfolio Sections

### 🏠 Hero Section

- Professional introduction with animated text
- Call-to-action buttons
- Smooth scrolling navigation

### 👨‍💼 About Section

- Personal background and story
- Professional summary
- Key achievements and goals

### 💼 Experience Section

- **Graduate Teaching Assistant - Artificial Intelligence** (Jan 2024 – Apr 2024)
- **Graduate Teaching Assistant - Computer & Network Security** (Sep 2023 – Dec 2023)
- Detailed highlights and achievements for each role

### 🛠️ Skills Section

- **Languages**: Python, Java, JavaScript, Kotlin, C, C++
- **Web Technologies**: HTML, CSS, React, Django, Flask, Node.js, REST API
- **ML/AI**: TensorFlow, Keras, scikit-learn, NumPy, Pandas, OpenCV
- **Tools**: Git, Docker, GitHub Actions, Jupyter, Tableau, Android SDK

### 🚀 Projects Section

Featured projects include:

- **Portfolio Website** - This responsive portfolio built with Next.js
- **React Fitbit Dashboard** - Interactive health metrics visualization
- **Toxicity Prediction Challenge II** - ML model with 82.28% F1 score
- **Farmatron - AI Pest Detection Drone** - AI-powered plant disease detection
- **Custom Android ROM Development** - AOSP-based custom ROM
- **Room Type Image Classification** - Deep learning with 84.7% accuracy
- And more...

### 📬 Contact Section

- Professional contact information
- Social media links
- GitHub profile integration

## 🎨 Customization

### Updating Portfolio Data

Edit `src/components/data/portfolioData.js` to customize:

- Projects information
- Skills and technologies
- Work experience
- Contact details

### Styling

- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components for design changes
- Customize animations in `AnimatedBackground.jsx`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `Portfolio.jsx`
3. Update navigation in `Navigation.jsx`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy with automatic CI/CD

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `out` folder to your hosting provider

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Next.js Configuration

Modify `next.config.mjs` for:

- Custom domains
- Image optimization
- Performance settings

## 📊 Analytics

The portfolio includes Vercel Analytics integration for:

- Page views tracking
- Performance monitoring
- User interaction insights

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with ❤️ using Next.js and React
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Vercel](https://vercel.com/font)
- Deployed on [Vercel](https://vercel.com/)

---

**Built by [Sanket Vagal](https://github.com/sanketvagal)** | **[Visit Live Site](https://sanketvagal.vercel.app/)**
