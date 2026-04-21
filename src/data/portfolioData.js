export const personalInfo = {
  name: "Amir",
  fullName: "Amir Fadillah",
  roles: ["Full Stack Developer", "Web Developer", "UI/UX Enthusiast"],
  tagline: "Crafting digital experiences with clean code & creative designs",
  bio: `Saya adalah seorang Full Stack Developer yang passionate dalam membangun
        aplikasi web modern dan user-friendly. Dengan pengalaman dalam berbagai
        teknologi, saya selalu berusaha menciptakan solusi digital yang
        inovatif dan berdampak.`,
  email: "amir@example.com",
  phone: "+62 812-3456-7890",
  location: "Indonesia",
  social: {
    github: "https://github.com/amir",
    linkedin: "https://linkedin.com/in/amir",
    instagram: "https://instagram.com/amir",
  },
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel", level: 88 },
      { name: "Node.js", level: 80 },
      { name: "PHP", level: 85 },
      { name: "Express.js", level: 75 },
      { name: "REST API", level: 85 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Redis", level: 65 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Linux", level: 72 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Perpustakaan Digital",
    description:
      "Sistem manajemen perpustakaan digital lengkap dengan fitur peminjaman, pengembalian, denda, dan laporan. Dibangun dengan Laravel dan MySQL.",
    tags: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    category: "Web",
    image: null,
    gradient: "from-violet-600 to-indigo-600",
    github: "https://github.com/amir/perpus-digital",
    demo: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce modern dengan fitur keranjang belanja, payment gateway, dan dashboard admin. Menggunakan React untuk pengalaman pengguna yang smooth.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web",
    image: null,
    gradient: "from-cyan-600 to-blue-600",
    github: "https://github.com/amir/ecommerce",
    demo: "#",
  },
  {
    id: 3,
    title: "Task Manager App",
    description:
      "Aplikasi manajemen tugas dengan fitur drag & drop, real-time collaboration, dan notifikasi. Built with modern tech stack.",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
    category: "Web",
    image: null,
    gradient: "from-pink-600 to-rose-600",
    github: "https://github.com/amir/task-manager",
    demo: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Dashboard cuaca interaktif dengan visualisasi data, prakiraan cuaca 7 hari, dan lokasi GPS otomatis. Terintegrasi dengan OpenWeather API.",
    tags: ["JavaScript", "API", "Chart.js", "CSS"],
    category: "Web",
    image: null,
    gradient: "from-amber-500 to-orange-600",
    github: "https://github.com/amir/weather-app",
    demo: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Website portfolio personal dengan glassmorphism design, animasi smooth, dan dark theme premium. Dibangun menggunakan React dan Framer Motion.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    category: "Web",
    image: null,
    gradient: "from-emerald-500 to-teal-600",
    github: "https://github.com/amir/portfolio",
    demo: "#",
  },
  {
    id: 6,
    title: "Chat Real-time",
    description:
      "Aplikasi chat real-time dengan fitur group chat, emoji, file sharing, dan notifikasi push. Menggunakan WebSocket untuk komunikasi real-time.",
    tags: ["React", "Socket.io", "Node.js", "Express"],
    category: "Web",
    image: null,
    gradient: "from-fuchsia-600 to-purple-700",
    github: "https://github.com/amir/realtime-chat",
    demo: "#",
  },
];

export const experiences = [
  {
    year: "2024 - Sekarang",
    title: "Full Stack Developer",
    company: "Freelance",
    description: "Mengerjakan berbagai proyek web development untuk klien lokal dan internasional.",
  },
  {
    year: "2023 - 2024",
    title: "Web Developer",
    company: "Project Based",
    description: "Membangun aplikasi web menggunakan Laravel dan React untuk berbagai kebutuhan klien.",
  },
  {
    year: "2022 - 2023",
    title: "Junior Developer",
    company: "Internship",
    description: "Belajar dan berkontribusi dalam pengembangan aplikasi internal perusahaan.",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
