import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Github, Mail, ExternalLink, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaJs, FaReact, FaPython, FaCss3Alt, FaMicrosoft } from "react-icons/fa";
import Login from "./Login";
import axios from "axios";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "./AdminDashboard";
import Typewriter from "typewriter-effect";

// -------------------- Navbar --------------------
function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-lg overflow-x-hidden">
      <div className="w-full px-3 sm:px-6 flex justify-between items-center h-16 overflow-x-hidden">
        <a
          href="#home"
          className="text-2xl font-extrabold text-white hover:text-gray-300 tracking-wide transition"
        >
          DTECH
        </a>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900/95 shadow-md overflow-hidden z-40">
          <div className="px-3 py-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}


// -------------------- Hero --------------------
function Hero() {
  const images = [
    "/images/donald1.webp",
    "/images/donald2.webp",
    "/images/donald3.webp",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background slideshow */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Donald ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.9, scale: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 2 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Hero text */}
      <motion.div
        className="relative text-center z-10 px-6 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
            Hi, My Name is Akor Donald Ayibapreye 👋
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Full-Stack Developer",
                  "Problem Solver",
                  "Builder of Digital Experiences",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
              }}
            />
          </div>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 text-white/90 leading-relaxed">
            A passionate <span className="font-bold">Software Engineer</span>{" "}
            crafting modern web apps, solving problems, and building impactful
            digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* View My Work */}
            <a
              href="#projects"
              className="bg-white text-gray-900 px-6 sm:px-8 py-2.5 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              View My Work
            </a>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download="Akor-Donald-Resume.pdf"
              className="bg-transparent border border-white px-6 sm:px-8 py-2.5 rounded-full font-semibold text-white hover:bg-white hover:text-gray-900 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// -------------------- About --------------------
function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-gray-100 text-gray-900">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/donald1.webp"
            alt="Donald"
            className="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-none object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            I am a <span className="font-semibold">Software Engineer </span>
            from Nigeria, focused on designing and developing modern, scalable, and user-centered digital solutions. I specialize in JavaScript, React, Node.js, C#, Python, and building clean, responsive interfaces with Tailwind CSS.
            With a strong foundation in software engineering principles and hands-on experience across both frontend and backend technologies, I enjoy turning complex problems into practical, intuitive applications.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Currently a <span className="font-semibold">first-class student</span> with a CGPA of 4.7 🎓. My academic journey has strengthened my analytical thinking, engineering discipline, and approach to building reliable systems. I have worked on diverse projects from full restaurant management platforms to engineering tools like oil production calculators — all driven by a commitment to efficiency, clarity, and real-world impact.
          </p>

          <a
            href="#projects"
            className="inline-block mt-2 bg-gray-900 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-700 transition"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

// -------------------- Skills --------------------
function Skills() {
  const skills = [
    {
      name: "JavaScript",
      icon: (
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.6 }}
        >
          <FaJs className="text-yellow-400 text-5xl" />
        </motion.div>
      ),
    },
    {
      name: "React",
      icon: (
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <FaReact className="text-cyan-400 text-5xl" />
        </motion.div>
      ),
    },
    {
      name: "C#",
      icon: (
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.4 }}>
          <FaMicrosoft className="text-purple-500 text-5xl" />
        </motion.div>
      ),
    },
    {
      name: "Python",
      icon: (
        <motion.div
          whileHover={{ y: [-5, 5, -5] }}
          transition={{ duration: 0.6, repeat: 1 }}
        >
          <FaPython className="text-green-500 text-5xl" />
        </motion.div>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.4 }}>
          <FaCss3Alt className="text-sky-500 text-5xl" />
        </motion.div>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white text-gray-900">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-gray-100 shadow hover:shadow-2xl transition flex flex-col items-center justify-center"
              whileHover={{ scale: 1.06 }}
            >
              {s.icon}
              <p className="font-semibold mt-3">{s.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// -------------------- Projects ------------------

function Projects() {
  const fallbackProjects = [
    {
      title: "Restaurant Web App",
      desc: "A modern restaurant ordering system with responsive UI and smooth UX.",
      img: "/images/restaurant.jpg",
      github: "https://github.com/akordonald15-hue/Dchops",
      demo: "https://restaurant-demo.com",
    },
    {
      title: "Oil Company Production Tool",
      desc: "An engineering desktop app for production calculations and reporting.",
      img: "/images/OilApp.webp",
      github: "https://github.com/yourusername/oil-calculator",
      demo: "#",
    },
    {
      title: "DovaTech",
      desc: "A sleek Website Crafted For DovaTech Company",
      img: "/images/portfolio.jpg",
      github: "https://github.com/yourusername/portfolio",
      demo: "#",
    },
  ];

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchProjects() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
        if (!res.ok) throw new Error(`Server responded ${res.status}`);

        const data = await res.json();
        // Handle different possible shapes: array, { projects: [...] }, { data: [...] }
        const arr = Array.isArray(data)
          ? data
          : Array.isArray(data.projects)
          ? data.projects
          : Array.isArray(data.data)
          ? data.data
          : [];

        if (!cancelled) {
          if (arr.length > 0) setProjects(arr);
          else {
            setProjects(fallbackProjects);
          }
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        if (!cancelled) {
          setProjects(fallbackProjects);
          setError(err.message || "Failed to load projects");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchProjects();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-gray-100">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Projects</h2>

        {/* Loading */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-pulse px-6 py-3 bg-gray-800 rounded-lg">Loading projects...</div>
          </div>
        )}

        {/* Projects grid */}
        {!loading && projects.length === 0 && (
          <p className="text-center text-gray-400 py-8">No projects to show.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={p.img || "/images/placeholder.jpg"}
                  alt={p.title}
                  className="w-full h-40 sm:h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover icons overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {p.demo && p.demo !== "#" && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Text + visible buttons */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {p.demo && p.demo !== "#" && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-gray-900 font-semibold hover:bg-gray-200 transition text-sm"
                    >
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-700 text-gray-200 hover:bg-gray-800 transition text-sm"
                    >
                      View Code <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// -------------------- Contact --------------------
const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post(`${API}/contacts`, form);

      if (res.status === 200) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <motion.div
        className="max-w-xl sm:max-w-2xl mx-auto text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-6 text-lg text-gray-200">
          Have a project in mind or want to collaborate? Let’s connect.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none h-32"
          />

          <button
            type="submit"
            className="w-full bg-white text-gray-900 px-6 py-3 rounded font-semibold shadow hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-lg">{status}</p>}
      </motion.div>
    </section>
  );
}

// -------------------- Footer --------------------
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} DONALD</p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/akor-donald-724b3037a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin />
          </a>

          <a
            href="https://github.com/akordonald15-hue"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github />
          </a>

          <a
            href="mailto:akordonald15@gmail.com"
            className="hover:text-white transition"
          >
            <Mail />
          </a>

          <a
            href="https://www.instagram.com/preye_002/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Instagram />
          </a>

          <a
            href="https://web.facebook.com/profile.php?id=61578056309232"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Facebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

// -------------------- App --------------------
function HomePage() {
  return (
    <div className="font-sans scroll-smooth bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginWrapper />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

function LoginWrapper() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    localStorage.setItem("isLoggedIn", "true"); // optional helper flag
    navigate("/admin");
  };

  return <Login onSuccess={handleSuccess} />;
}
