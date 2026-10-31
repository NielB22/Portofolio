// Semua isi portofolio ada di sini — cukup edit file ini untuk mengganti data.

// Foto hero (PNG berlatar transparan, rasio 4:5). Urutan = urutan tampil saat berganti otomatis.
import photo1 from "../assets/photos/foto-2.png";
import photo2 from "../assets/photos/foto-1.png";

export const profile = {
  name: "Muhammad Daniel Azmi",
  role: "Mahasiswa Teknik Informatika",
  tagline: "Tertarik pada web development, fullstack, UI/UX, dan AI agents. Senang membangun hal yang berguna.",
  location: "Indonesia",
  email: "danielarma321@gmail.com",
  cvUrl: "/cv.pdf", // taruh file cv.pdf di folder public/
  // Foto disimpan di src/assets/photos/ agar otomatis dikompres Astro.
  // Lebih dari satu foto → berganti otomatis. Kosongkan ([]) untuk bingkai placeholder.
  photos: [photo1, photo2] as ImageMetadata[],
  photoInterval: 5, // detik per foto
  status: "Terbuka untuk magang", // tampil di stiker foto hero; kosongkan untuk menyembunyikan
  focus: "Web · UI/UX · AI Agents",
  socials: [
    { label: "GitHub", url: "https://github.com/NielB22" },
    { label: "LinkedIn", url: "https://linkedin.com/in/username" },
    { label: "Instagram", url: "https://instagram.com/d.azmii" },
  ],
};

export const about = {
  paragraphs: [
    "Halo! Saya mahasiswa Teknik Informatika semester 5 yang suka belajar teknologi baru dan mengerjakan proyek nyata.",
    "Saat ini saya fokus mendalami pengembangan web full-stack dan ai agent pipeline dan sedang mencari kesempatan magang untuk mengembangkan kemampuan di lingkungan profesional.",
  ],
  education: [
    {
      school: "Universitas Multimedia Nusantara",
      degree: "S1 Teknik Informatika",
      period: "2024 — Sekarang",
    },
  ],
  // Kata di dalam *bintang* tampil dengan huruf serif hijau neon
  statement: "*Learning* as a rookie, *build* like production ready.",
  stats: [
    { value: "3.63", unit: "/4.00", label: "IPK" },
    { value: "5", unit: "", label: "Semester" },
    { value: "12", unit: "+", label: "Repositori GitHub" },
    { value: "98", unit: "SKS", label: "SKS Lulus" },
  ],
};

// Teks berjalan di bawah hero; bergantian serif dan sans
export const marquee = ["Web Development", "UI/UX", "AI Agents", "Fullstack"];

export const skills = [
  { category: "Bahasa Pemrograman", items: ["JavaScript", "TypeScript", "Python", "Kotlin", "C"] },
  { category: "Frontend", items: ["HTML", "CSS", "Tailwind CSS", "React", "Astro"] },
  { category: "Backend & Database", items: ["Node.js", "Express", "Laravel", "MySQL"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "N8N", "Claude", "Gemini"] },
];

// Logo untuk tampilan marquee di section Skill. Taruh file SVG/PNG di public/logos/ lalu
// petakan nama skill ke path-nya, misal: "React": "/logos/react.svg".
// Skill yang belum punya logo tampil sebagai placeholder (kotak inisial + nama).
export const skillLogos: Record<string, string> = {};

export const projects = [
  {
    title: "Sistem Informasi Perpustakaan",
    year: "2025",
    description: "Aplikasi web untuk mengelola peminjaman buku, data anggota, dan laporan denda.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    repo: "https://github.com/username/perpustakaan",
    demo: "",
  },
  {
    title: "Aplikasi To-Do List",
    year: "2024",
    description: "Aplikasi pencatat tugas dengan fitur kategori, deadline, dan penyimpanan lokal.",
    tech: ["React", "TypeScript"],
    repo: "https://github.com/username/todo-app",
    demo: "https://todo-app.vercel.app",
  },
  {
    title: "Analisis Sentimen Ulasan",
    year: "2024",
    description: "Klasifikasi sentimen ulasan produk berbahasa Indonesia menggunakan Naive Bayes.",
    tech: ["Python", "scikit-learn", "Pandas"],
    repo: "https://github.com/username/sentimen",
    demo: "",
  },
];

export const experiences = [
  {
    title: "Garuda Hacks 7.0 Participants",
    org: "Garuda Hacks 7.0",
    period: "July 16-18 2026",
    description: "Participated in Garuda Hacks 7.0, an AI-themed hackathon with over 200 participants from across Indonesia, focusing on making AI Automation pipeline with N8N.",
  },
  {
    title: "Member of Website Division in PPIF 2026",
    org: "Program Kerja Himpunan Mahasiswa Informatika UMN - PPIF 2026",
    period: "March - August 2026",
    description: "Member dari divisi website, acara untuk mahasiswa baru dalam perkenalan prodi informatika UMN, fokus di bagian UI/UX dan Frontend.",
  },
  {
    title: "Code the Future — GenDigital Academy AI Hackathon Winner",
    org: "GenDigital Academy x Skystar Capital x Hacktiv8",
    period: "May 2026",
    description: "A national AI hackathon organized by GenDigital Academy in collaboration with Skystar Capital and Hacktiv8, with the theme 'AI for better Indonesia'. My team developed an innovative AI-powered solution that earned us the 1st place winner title.",
  },
  {
    title: "Member of UMN Festival 2026 Committee",
    org: "UMN Festival 2026 - Program Kerja BEM UMN",
    period: "March - December 2026",
    description: "UMN Festival 2026 adalah festival perayaan HUT Universitas Multimedia Nusantara di bawah naungan BEM UMN. Acara ini bertujuan mendorong partisipasi dan memperkuat solidaritas mahasiswa",
  },
  {
    title: "Freelance Website Developer",
    org: "SobatWeb",
    period: "Jan - ... 2026",
    description: "...",
  },
  
];

// Footer: judul besar di kartu gelap (kata di *bintang* = serif hijau neon) dan tombol CTA
export const footer = {
  headline: "Always *learning*, keep *building*.",
  cta: "Kirim Email",
};

export const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Skill", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Kontak", href: "#contact" },
];
