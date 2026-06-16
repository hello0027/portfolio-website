export default function App() {
  const skills = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "Deep Learning",
    "React",
    "FastAPI",
    "Git",
    "Data Visualization",
    "Power BI",
    "Artificial Intelligence",
  ];

  const projects = [
    {
      title: "Data Analytics Dashboard",
      desc: "Interactive dashboard for data analysis, insights and visualizations.",
    },
    {
      title: "Resume Analyzer",
      desc: "AI-powered resume analysis and ATS score prediction system.",
    },
    {
      title: "AI PDF Summarizer",
      desc: "Upload PDFs and generate intelligent summaries using AI.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-zinc-800 sticky top-0 bg-black">
        <h1 className="text-2xl font-bold">Bhumi.dev</h1>

        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-zinc-400">
            About
          </a>
          <a href="#skills" className="hover:text-zinc-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-zinc-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-zinc-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-28">
        <p className="text-zinc-500 text-lg mb-4">
          Hello, I'm Bhumi 👋
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          Data Scientist
          <br />
          & AI Developer
        </h1>

        <p className="text-zinc-400 text-xl mt-8 max-w-3xl leading-relaxed">
          I build machine learning models, analytics dashboards,
          AI-powered applications and modern web experiences.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            View Projects
          </button>

          <button className="border border-zinc-700 px-6 py-3 rounded-xl hover:bg-zinc-900 transition">
            Download Resume
          </button>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-8 py-20"
      >
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-zinc-400 text-lg leading-8 max-w-4xl">
          I am a Data Science student passionate about Artificial
          Intelligence, Machine Learning, Data Analytics and
          Full Stack Development. I enjoy building data-driven
          products that solve real-world problems and create
          meaningful user experiences.
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-8 py-20"
      >
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-white transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-8 py-20"
      >
        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-white transition"
            >
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="text-zinc-400 mt-4">
                {project.desc}
              </p>

              <button className="mt-6 text-white underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-8 py-20"
      >
        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <div className="space-y-4 text-lg text-zinc-400">
          <p>📧 kotwanibhumi27@gmail.com</p>
          <p>💼 https://www.linkedin.com/in/bhumi-kotwani-638227308?utm_source=share_via&utm_content=profile&utm_medium=member_ios</p>
          <p>💻 github.com/bhumi</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 text-center py-8 text-zinc-500">
        © 2026 Bhumi.dev • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}