// Semua isi portofolio ada di sini — cukup edit file ini untuk mengganti data.

export const profile = {
  name: "Muhammad Daniel Azmi",
  role: "Mahasiswa Teknik Informatika",
  tagline: "Tertarik pada web development, frontend, UI/UX, dan AI agents. Senang membangun hal yang berguna.",
  location: "Indonesia",
  email: "danielarma321@gmail.com",
  cvUrl: "/cv.pdf", // taruh file cv.pdf di folder public/
  avatar: "", // contoh: "/avatar.jpg" (taruh di public/). Kosongkan untuk inisial.
  status: "Terbuka untuk magang", // tampil di stiker hero; kosongkan untuk menyembunyikan
  socials: [
    { label: "GitHub", url: "https://github.com/NielB22" },
    { label: "LinkedIn", url: "https://linkedin.com/in/username" },
    { label: "Instagram", url: "https://instagram.com/d.azmii" },
  ],
};

export const about = {
  paragraphs: [
    "Halo! Saya mahasiswa Teknik Informatika semester 5 yang suka belajar teknologi baru dan mengerjakan proyek nyata.",
    "Saat ini saya fokus mendalami pengembangan web full-stack dan sedang mencari kesempatan magang untuk mengembangkan kemampuan di lingkungan profesional.",
  ],
  education: [
    {
      school: "Universitas Contoh",
      degree: "S1 Teknik Informatika",
      period: "2023 — Sekarang",
    },
  ],
  // Kata di dalam *bintang* tampil dengan huruf serif hijau neon
  statement: "*Belajar* tanpa batas, *membangun* untuk berdampak.",
  stats: [
    { value: "3.80", unit: "/4.00", label: "IPK" },
    { value: "5", unit: "", label: "Semester" },
    { value: "12", unit: "+", label: "Repositori GitHub" },
    { value: "98", unit: "SKS", label: "SKS Lulus" },
  ],
};

// Teks berjalan di bawah hero; bergantian serif dan sans
export const marquee = ["Web Development", "UI/UX", "AI Agents", "Frontend", "Open Source"];

export const skills = [
  { category: "Bahasa Pemrograman", items: ["JavaScript", "TypeScript", "Python", "Java", "C++"] },
  { category: "Frontend", items: ["HTML", "CSS", "Tailwind CSS", "React", "Astro"] },
  { category: "Backend & Database", items: ["Node.js", "Express", "Laravel", "MySQL", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Docker"] },
];

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
    title: "Asisten Praktikum Algoritma & Pemrograman",
    org: "Laboratorium Informatika",
    period: "Feb 2025 — Jun 2025",
    description: "Membimbing 40+ mahasiswa dalam praktikum dasar pemrograman C++ dan menilai tugas mingguan.",
  },
  {
    title: "Staf Divisi Teknologi",
    org: "Himpunan Mahasiswa Informatika",
    period: "2024 — 2025",
    description: "Mengembangkan dan memelihara website himpunan serta membantu acara workshop internal.",
  },
];

export const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Skill", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Kontak", href: "#contact" },
];
