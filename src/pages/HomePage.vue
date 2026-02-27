<script setup>
import { ref } from 'vue'

import { useTheme } from '../composables/useTheme'
import resumeFile from '../assets/files/sample resume.pdf'
import profilePhoto from '../assets/images/profile.jpg'

const stats = [
  { value: '2+ Years', label: 'JavaScript Developer' },
  { value: '1 Year', label: 'PHP Developer' },
  { value: '1+ Years', label: 'Fullstack Developer' },
]

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'City Government of Calamba',
    period: 'Jan 2024 - Present',
    summary:
      'Built and maintained Information System, improving HR operations and data management.',
    stack: ['Javascript', 'Pug.js', 'Sails.js', 'Node.js', 'Fomantic UI', 'REST API'],
  },
  {
    role: 'Backend Developer',
    company: 'City Government of Calamba',
    period: 'Apr 2023 - Dec 2024',
    summary:
      'Contributed to backend API development and database management for development of Human Resource Information System.',
    stack: ['Sails.js', 'MySQL', 'REST API'],
  },
  {
    role: 'Web Developer Intern',
    company: 'City Government of Calamba',
    period: 'Jan 2023 - Apr 2023',
    summary: 'Built Position Description Form generator, improving HR PDF workflow efficiency.',
    stack: ['Javascript', 'Sails.js', 'Bootstrap', 'REST API'],
  },
]

const projects = [
  {
    id: 'hris',
    type: 'Information System',
    title: 'Human Resource Information System',
    summary:
      'A comprehensive HRIS for city government, featuring employee management, leave tracking, and attendance monitoring.',
    tags: ['Sails.js', 'Pug.js', 'MySQL', 'Fomantic UI', 'REST API'],
  },
  {
    id: 'cookies-nest',
    type: 'Animal Welfare Portal',
    title: 'Cookies Nest Animal Shelter Website',
    summary:
      'A public-facing website for an animal shelter, requesting rescue, showcasing adoptable pets, donation options, and volunteer information.',
    tags: ['PHP', 'HTML', 'Bootstrap', 'MySQL'],
  },
  {
    id: 'chat-app',
    type: 'Real-Time Chat Application',
    title: 'Chat-App',
    summary: 'A real-time chat application built with Vue.js, laravel and MySQL.',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Real-Time Communication'],
  },
]

const skills = [
  {
    name: 'Full-Stack JavaScript Development',
    description: 'Build scalable web applications using JavaScript across frontend and backend.',
    tools: 'JavaScript (ES6+), Node.js',
  },
  {
    name: 'Sails.js Backend Development',
    description:
      'Develop MVC-based REST APIs, authentication systems, and business logic using Sails.js framework.',
    tools: 'Sails.js, Waterline ORM, Passport.js',
  },
  {
    name: 'PHP Development',
    description: 'Build and maintain backend systems and integrate APIs using PHP.',
    tools: 'Laravel, Core PHP',
  },
  {
    name: 'Database Management',
    description:
      'Design relational databases, optimize queries, and manage structured data efficiently.',
    tools: 'MySQL, Workbench, phpMyAdmin  ',
  },
  {
    name: 'Server-Side Rendering & Templating',
    description: 'Create dynamic and maintainable UI using server-rendered templates.',
    tools: 'Pug.js, HTML5',
  },
  {
    name: 'Responsive UI Development',
    description: 'Develop clean, mobile-friendly interfaces with modern CSS frameworks.',
    tools: 'Fomantic UI, Bootstrap, CSS3',
  },

  {
    name: 'Version Control & Collaboration',
    description: 'Manage codebases, collaborate with teams, and maintain structured workflows.',
    tools: 'Git, GitHub',
  },
  {
    name: 'Web Fundamentals',
    description: 'Strong foundation in semantic HTML, structured CSS, and clean coding practices.',
    tools: 'HTML, CSS',
  },
]

const strengths = [
  'Develop end-to-end web applications from database design to user interface.',
  'Build scalable backend systems and RESTful APIs using JavaScript frameworks.',
  'Create responsive, clean, and maintainable UI for desktop and mobile.',
  'Design structured databases and write optimized queries.',
  'Quickly adapt to new frameworks, tools, and modern development practices.',
  'Collaborate effectively through Git workflows, pull requests, and code reviews.',
]

const socials = [
  {
    label: 'Facebook',
    url: 'https://facebook.com/blahbla070',
    meta: 'facebook.com/blahbla070',
  },
  { label: 'Viber', url: 'viber://chat?number=%2B639383682337', meta: '+63 938 368 2337' },
  { label: 'Gmail', url: 'mailto:segonzales070@gmail.com', meta: 'segonzales070@gmail.com' },
  // { label: 'LinkedIn', url: 'https://linkedin.com/in/your-profile', meta: '/in/your-profile' },
  // { label: 'Indeed', url: 'https://www.indeed.com/cv/your-name', meta: 'indeed.com/cv/your-name' },
  { label: 'GitHub', url: 'https://github.com/Chovvvy00', meta: 'github.com/Chovvvy00' },
]

const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const profileImage = ref(profilePhoto)
const profilePlaceholder = withBase('profile-placeholder.svg')
const usingPlaceholder = ref(false)
const { theme, toggleTheme } = useTheme()

const handleProfileImageError = () => {
  if (!usingPlaceholder.value) {
    profileImage.value = profilePlaceholder
    usingPlaceholder.value = true
  }
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="site-bg" aria-hidden="true">
    <div class="beam beam-one"></div>
    <div class="beam beam-two"></div>
    <div class="beam beam-three"></div>
    <div class="noise"></div>
  </div>

  <div class="app-shell">
    <header class="topbar reveal" style="--delay: 0.05s">
      <a class="brand" href="#home">Awin.dev</a>
      <div class="topbar-actions">
        <nav>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <!-- <RouterLink to="/demo">Watch Demo</RouterLink> -->
        </nav>
        <button
          class="theme-toggle"
          type="button"
          @click="toggleTheme"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg
            v-if="theme === 'dark'"
            class="theme-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.8" />
            <path
              d="M12 2.8V5.2M12 18.8V21.2M21.2 12H18.8M5.2 12H2.8M18.5 5.5L16.8 7.2M7.2 16.8L5.5 18.5M18.5 18.5L16.8 16.8M7.2 7.2L5.5 5.5"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
          <svg
            v-else
            class="theme-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M20 14.2C19.1 14.6 18.1 14.8 17 14.8C12.9 14.8 9.5 11.4 9.5 7.3C9.5 6.2 9.7 5.2 10.1 4.3C6.5 5.2 4 8.4 4 12.1C4 16.6 7.6 20.2 12.1 20.2C15.8 20.2 19 17.7 20 14.2Z"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linejoin="round"
            />
          </svg>
          <span class="theme-text">{{ theme === 'dark' ? 'Light mode' : 'Dark mode' }}</span>
        </button>
      </div>
    </header>

    <main>
      <section id="home" class="section hero reveal" style="--delay: 0.1s">
        <div class="hero-content">
          <p class="kicker">Sherwin E. Gonzales</p>
          <h1>Web Developer</h1>
          <p class="hero-copy">
            I build scalable, end-to-end web applications using JavaScript across both frontend and
            backend. My focus is clean architecture, responsive interfaces, and reliable systems
            that support real business needs. I continuously adapt to modern frameworks and evolving
            technologies to deliver maintainable and production-ready solutions.
          </p>

          <div class="hero-actions">
            <a class="btn btn-primary" href="#projects">See My Work</a>
            <a class="btn btn-ghost" :href="resumeFile" target="_blank" rel="noreferrer"
              >See My Resume</a
            >
            <!-- <RouterLink class="btn btn-ghost-alt" to="/demo">Watch Demo</RouterLink> -->
          </div>
        </div>

        <div class="hero-side">
          <article class="profile-card">
            <!-- <p class="panel-label">Profile Photo</p> -->
            <div class="profile-frame">
              <img
                :src="profileImage"
                alt="Sherwin E. Gonzales profile photo"
                @error="handleProfileImageError"
              />
            </div>
            <!-- <p class="photo-slot-hint">
              Replace <code>public/profile-photo.jpg</code> with your image.
            </p> -->
          </article>
        </div>

        <div class="hero-panel">
          <p class="panel-label">Live Profile</p>
          <ul class="hero-stats">
            <li v-for="item in stats" :key="item.label">
              <p class="stat-value">{{ item.value }}</p>
              <p class="stat-label">{{ item.label }}</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="experience" class="section reveal" style="--delay: 0.14s">
        <p class="section-eyebrow">Experience</p>
        <h2>Real-world Professional Experience</h2>
        <div class="experience-grid">
          <article
            class="experience-card"
            v-for="item in experiences"
            :key="item.role + item.company"
          >
            <div class="experience-head">
              <h3>{{ item.role }}</h3>
              <p>{{ item.company }}</p>
            </div>
            <p class="experience-period">{{ item.period }}</p>
            <p class="experience-summary">{{ item.summary }}</p>
            <ul class="chip-list">
              <li v-for="tool in item.stack" :key="tool">{{ tool }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="projects" class="section reveal" style="--delay: 0.18s">
        <p class="section-eyebrow">Projects</p>
        <h2>Featured Projects</h2>
        <div class="project-grid">
          <article class="project-card" v-for="project in projects" :key="project.title">
            <p class="project-type">{{ project.type }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.summary }}</p>
            <ul class="tag-list">
              <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
            </ul>
            <div class="project-links">
              <RouterLink :to="`/demo?project=${project.id}`">Check Demo</RouterLink>
              <!-- <RouterLink :to="`/demo?project=${project.id}#screenshots`">See Images</RouterLink> -->
            </div>
          </article>
        </div>
      </section>

      <section id="skills" class="section reveal" style="--delay: 0.22s">
        <p class="section-eyebrow">Skills</p>
        <h2>Core strengths</h2>
        <div class="skill-grid">
          <article class="skill-card" v-for="skill in skills" :key="skill.name">
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
            <span>{{ skill.tools }}</span>
          </article>
        </div>
      </section>

      <section id="about" class="section reveal" style="--delay: 0.25s">
        <p class="section-eyebrow">About</p>
        <div class="about-grid">
          <article>
            <h2>I'm a JavaScript Developer Building Scalable and Reliable Web Applications</h2>
            <p>
              I specialize in developing structured backend systems, RESTful APIs, and responsive
              front-end interfaces that work seamlessly together. My approach combines strong
              technical fundamentals with a growth mindset, allowing me to quickly learn new
              frameworks and tools when projects demand it. I aim to deliver clean, efficient, and
              production-ready solutions that create measurable value for teams and businesses.
            </p>
          </article>
          <article class="about-card">
            <h3>What I bring</h3>
            <ul>
              <li v-for="item in strengths" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="contact" class="section contact reveal" style="--delay: 0.3s">
        <p class="section-eyebrow">Contact</p>
        <h2>Let's Connect</h2>
        <p>
          I am open to full-stack and backend opportunities. Feel free to message me through email
          or any platform below.
        </p>
        <a class="btn btn-primary" href="mailto:segonzales070@gmail.com">Send Message</a>
        <ul class="social-list">
          <li v-for="social in socials" :key="social.label">
            <a :href="social.url" target="_blank" rel="noreferrer">{{ social.label }}</a>
          </li>
        </ul>
      </section>
    </main>

    <footer>
      <p>Copyright {{ currentYear }} Awin.dev</p>
    </footer>
  </div>
</template>
