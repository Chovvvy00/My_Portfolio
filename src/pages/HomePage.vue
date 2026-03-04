<script setup>
import { ref } from 'vue'

import { useTheme } from '../composables/useTheme'
import resumeFile from '../assets/files/resume.pdf'
import profilePhoto from '../assets/images/profile.png'

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'City Government of Calamba',
    period: 'Jan 2026 - Present',
    summary:
      'Built and maintained Information System, improving HR operations and data management.',
    stack: ['Javascript', 'Pug.js', 'Sails.js', 'Node.js', 'Fomantic UI', 'REST API'],
  },
  {
    role: 'Backend Developer',
    company: 'City Government of Calamba',
    period: 'May 2023 - Dec 2025',
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
    tech: ['Node.js', 'MySQL', 'Socket.io', 'REST APIs'],
    whatIBuilt: [
      'Leave management system',
      'Attendance computation logic',
      'Automated DTR PDF generation',
      'Business validation rules',
    ],
    impact: ['Improved report performance by 30-40%', 'Reduced manual HR processes'],
    architecture: [
      {
        layer: 'Backend API Layer',
        detail:
          'Node.js (Sails.js) REST endpoints for employee profiles, leave requests, attendance, and reporting workflows.',
      },
      {
        layer: 'Database Layer',
        detail:
          'MySQL schema for employee records, leave ledgers, attendance logs, and report indexes.',
      },
      {
        layer: 'Frontend Interface',
        detail: 'Server-rendered HR modules using Pug.js, Fomantic UI, Bootstrap, and JavaScript.',
      },
      {
        layer: 'Real-time Communication',
        detail:
          'Socket.io events for instant attendance and approval status updates across active sessions.',
      },
      {
        layer: 'Document Generation Layer',
        detail: 'Backend service for automated DTR PDF creation tied to validated attendance data.',
      },
      {
        layer: 'Business Rules Layer',
        detail:
          'Centralized validation for leave balances, schedule constraints, and HR policy checks.',
      },
    ],
  },
  {
    id: 'cookies-nest',
    type: 'Animal Welfare Portal',
    title: 'Cookies Nest Animal Shelter Website',
    tech: ['Core PHP (Hardcoded)', 'Bootstrap', 'HTML', 'JavaScript'],
    whatIBuilt: [
      'Public-facing pet browsing interface',
      'Rescue and adoption request forms with server-side validation',
      'Contact form with email notifications',
      'Basic admin dashboard for managing requests',
    ],
    architecture: [
      {
        layer: 'Backend API Layer',
        detail:
          'Core PHP request handlers for rescue, adoption, and contact form workflows with server-side validation.',
      },
      {
        layer: 'Database Layer',
        detail:
          'Simple hardcoded and direct-query data flow designed for lightweight operations without complex abstractions.',
      },
      {
        layer: 'Frontend Interface',
        detail:
          'Responsive Bootstrap pages with HTML and JavaScript for public pet browsing and request forms.',
      },
      {
        layer: 'Real-time Communication',
        detail:
          'Request-response model only; no persistent socket layer required for this platform.',
      },
    ],
  },
  {
    id: 'chat-app',
    type: 'Real-Time Chat Application',
    title: 'Chat-App',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Real-Time Communication'],
    summary: 'A real-time chat application built with Vue.js, laravel and MySQL.',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Real-Time Communication'],
    architecture: [
      {
        layer: 'Backend API Layer',
        detail: 'Laravel APIs for authentication, conversation management, and message retrieval.',
      },
      {
        layer: 'Database Layer',
        detail: 'MySQL relational tables for users, conversations, message history, and metadata.',
      },
      {
        layer: 'Frontend Interface',
        detail:
          'Vue.js single-page chat interface with responsive message threads and user presence UI.',
      },
      {
        layer: 'Real-time Communication',
        detail:
          'Event-driven message broadcasting for instant delivery and live conversation updates.',
      },
    ],
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'JavaScript', logo: 'skills/javascript.svg' },
      { name: 'HTML', logo: 'skills/html5.svg' },
      { name: 'CSS', logo: 'skills/css3.svg' },
      { name: 'Vue', logo: 'skills/vuejs.svg' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js (Sails.js)', logo: 'skills/nodejs.svg' },
      { name: 'REST APIs', badge: 'API' },
      { name: 'MVC', badge: 'MVC' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', logo: 'skills/mysql.svg' },
      { name: 'Query Optimization', badge: 'QRY' },
    ],
  },
  {
    title: 'Currently Learning',
    items: [
      { name: 'React', logo: 'skills/react.svg' },
      { name: 'Next.js', logo: 'skills/nextjs.svg' },
      { name: 'NestJS', logo: 'skills/nestjs.svg' },
      { name: 'Express.js', logo: 'skills/express.svg' },
      { name: 'FastAPI', logo: 'skills/fastapi.svg' },
      { name: 'Python', logo: 'skills/python.svg' },
      { name: 'Docker', logo: 'skills/docker.svg' },
      { name: 'TypeScript', logo: 'skills/typescript.svg' },
    ],
  },
]

const currentlyBuilding = [
  {
    title: 'React-based Admin Dashboard',
    focus: [
      'Studying modern component architecture',
      'Learning Python backend fundamentals',
      'Implementing role-based access and protected routes',
      'Integrating REST APIs with reusable service patterns',
    ],
  },
]

const aboutMetrics = [
  { value: '2+ Years', label: 'Production system ownership' },
  { value: '30-40%', label: 'HRIS report performance improvement' },
  { value: '3 Roles', label: 'Intern to backend to full-stack progression' },
]

const aboutPrinciples = [
  {
    title: 'Backend-first decisions',
    detail:
      'I design API contracts, validation rules, and database structure before adding UI complexity.',
  },
  {
    title: 'Business logic ownership',
    detail:
      'I translate process requirements into deterministic system rules for attendance, leave, and reporting.',
  },
  {
    title: 'Production-ready delivery',
    detail:
      'I prioritize maintainability, error handling, and clear architecture to support long-term system growth.',
  },
  {
    title: 'Continuous upskilling',
    detail:
      'I am actively building React-based admin interfaces while strengthening Python backend fundamentals.',
  },
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

const contactMethods = [
  {
    id: 'email',
    label: 'Email (Preferred)',
    value: 'segonzales070@gmail.com',
    meta: 'Best for interviews and hiring discussions',
    href: 'mailto:segonzales070@gmail.com?subject=Interview%20Opportunity',
    cta: 'Send Email',
    copyValue: 'segonzales070@gmail.com',
  },
  {
    id: 'phone',
    label: 'Phone / Viber',
    value: '+63 938 368 2337',
    meta: 'Available during Manila business hours (GMT+8)',
    href: 'tel:+639383682337',
    cta: 'Call Now',
    altHref: 'viber://chat?number=%2B639383682337',
    altCta: 'Message on Viber',
    copyValue: '+639383682337',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Chovvvy00',
    meta: 'Portfolio code and project history',
    href: 'https://github.com/Chovvvy00',
    cta: 'View Profile',
  },
]

const profileLinks = socials.filter((item) => ['GitHub', 'Facebook'].includes(item.label))
const contactSignals = [
  'Open to junior full-stack and backend roles',
  'Usually replies within 24 hours',
  'Timezone: GMT+8 (Philippines)',
]

const emailContact = contactMethods.find((item) => item.id === 'email')
const phoneContact = contactMethods.find((item) => item.id === 'phone')
const copiedContact = ref('')

const isHttpLink = (url) => /^https?:\/\//i.test(url)

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

const copyContact = async (value, id) => {
  if (!value || !id) return

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(value)
    } else {
      throw new Error('clipboard-unavailable')
    }
    copiedContact.value = id
    window.setTimeout(() => {
      if (copiedContact.value === id) {
        copiedContact.value = ''
      }
    }, 1800)
  } catch {
    copiedContact.value = ''
    window.prompt('Copy this contact:', value)
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
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#building">Currently Building</a>
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
          <h1>
            Junior Full Stack Developer
            <span class="hero-title-sub">Backend-Strong | Node.js | JavaScript</span>
          </h1>
          <p class="hero-copy">
            I build reliable backend systems and scalable web applications.<br />
            Currently expanding into React, Vue and modern frontend technologies.
          </p>

          <div class="hero-actions">
            <a class="btn btn-primary" href="#projects">View Projects</a>
            <a class="btn btn-ghost" :href="resumeFile" target="_blank" rel="noreferrer"
              >Download Resume</a
            >
            <a class="btn btn-ghost-alt" href="#contact">Contact Me</a>
            <!-- <RouterLink class="btn btn-ghost-alt" to="/demo">Watch Demo</RouterLink> -->
          </div>
        </div>

        <div class="hero-side">
          <article class="profile-card">
            <div class="profile-frame">
              <img
                :src="profileImage"
                alt="Sherwin E. Gonzales profile photo"
                @error="handleProfileImageError"
              />
            </div>
          </article>
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

            <p v-if="project.tech?.length" class="project-tech">
              <strong>Tech:</strong> {{ project.tech.join(' | ') }}
            </p>
            <p v-if="project.summary" class="project-summary">{{ project.summary }}</p>

            <div v-if="project.whatIBuilt?.length" class="project-detail">
              <p class="project-detail-title">What I Built:</p>
              <ul class="project-list">
                <li v-for="item in project.whatIBuilt" :key="item">{{ item }}</li>
              </ul>
            </div>

            <div v-if="project.impact?.length" class="project-detail">
              <p class="project-detail-title">Impact:</p>
              <ul class="project-list impact-list">
                <li v-for="item in project.impact" :key="item">{{ item }}</li>
              </ul>
            </div>

            <div v-if="project.architecture?.length" class="project-detail architecture-block">
              <p class="project-detail-title">System Architecture Overview</p>
              <ul class="architecture-list">
                <li v-for="item in project.architecture" :key="item.layer">
                  <p class="architecture-layer">{{ item.layer }}</p>
                  <p class="architecture-description">{{ item.detail }}</p>
                </li>
              </ul>
            </div>

            <ul v-if="project.tags?.length" class="tag-list">
              <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
            </ul>

            <div class="project-links">
              <RouterLink :to="`/demo?project=${project.id}`">Check Demo</RouterLink>
              <!-- <RouterLink :to="`/demo?project=${project.id}#screenshots`">See Images</RouterLink> -->
            </div>
          </article>
        </div>
      </section>

      <section id="building" class="section reveal" style="--delay: 0.2s">
        <p class="section-eyebrow">Currently Building</p>
        <h2>Current Development Focus</h2>
        <div class="building-grid">
          <article class="building-card" v-for="item in currentlyBuilding" :key="item.title">
            <p class="building-status">In Progress</p>
            <h3>{{ item.title }}</h3>
            <ul class="building-list">
              <li v-for="focus in item.focus" :key="focus">{{ focus }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="skills" class="section reveal" style="--delay: 0.22s">
        <p class="section-eyebrow">Skills</p>
        <h2>Technical Skills</h2>
        <div class="skill-grid">
          <article
            class="skill-card skill-group-card"
            v-for="group in skillGroups"
            :key="group.title"
          >
            <div class="skill-group-header">
              <h3>{{ group.title }}</h3>
              <span class="skill-count">{{ group.items.length }}</span>
            </div>
            <ul class="skill-logo-list">
              <li class="skill-logo-item" v-for="item in group.items" :key="item.name">
                <span class="skill-logo-wrap" :class="{ 'is-fallback': !item.logo }">
                  <img
                    v-if="item.logo"
                    :src="withBase(item.logo)"
                    :alt="`${item.name} logo`"
                    loading="lazy"
                  />
                  <span v-else class="skill-logo-fallback">{{ item.badge }}</span>
                </span>
                <span class="skill-name">{{ item.name }}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="about" class="section reveal" style="--delay: 0.25s">
        <p class="section-eyebrow">About</p>
        <div class="about-grid">
          <article class="about-intro-card">
            <p class="about-kicker">Definitive Profile</p>
            <h2>Backend-Strong Developer Focused on Business-Critical Systems</h2>
            <p>
              I build systems that stay reliable in production: structured APIs, predictable
              business rules, and measurable outcomes tied to real operations.
            </p>
            <ul class="about-metrics">
              <li v-for="item in aboutMetrics" :key="item.label">
                <p class="about-metric-value">{{ item.value }}</p>
                <p class="about-metric-label">{{ item.label }}</p>
              </li>
            </ul>
          </article>
          <article class="about-card about-principles-card">
            <h3>How I Work</h3>
            <ul class="about-principles-list">
              <li v-for="item in aboutPrinciples" :key="item.title">
                <p class="about-principle-title">{{ item.title }}</p>
                <p class="about-principle-detail">{{ item.detail }}</p>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="contact" class="section contact reveal" style="--delay: 0.3s">
        <p class="section-eyebrow">Contact</p>
        <h2>Fastest Way To Contact Me</h2>
        <p class="contact-lead">
          For job opportunities and interviews, email is the best channel. I usually reply within 24
          hours.
        </p>
        <ul class="contact-badges">
          <li v-for="signal in contactSignals" :key="signal">{{ signal }}</li>
        </ul>

        <div class="contact-quick-actions">
          <a v-if="emailContact" class="btn btn-primary" :href="emailContact.href">Email Me</a>
          <a v-if="phoneContact" class="btn btn-ghost" :href="phoneContact.href">Call Me</a>
          <a
            v-if="phoneContact?.altHref"
            class="btn btn-ghost-alt"
            :href="phoneContact.altHref"
            >Message on Viber</a
          >
        </div>
        <p class="contact-fallback">
          If direct app links fail on your device, use
          <a href="mailto:segonzales070@gmail.com">segonzales070@gmail.com</a> or
          <a href="tel:+639383682337">+63 938 368 2337</a>.
        </p>

        <div class="contact-grid">
          <article class="contact-card" v-for="item in contactMethods" :key="item.id">
            <p class="contact-card-label">{{ item.label }}</p>
            <p class="contact-card-value">{{ item.value }}</p>
            <p v-if="item.meta" class="contact-card-meta">{{ item.meta }}</p>
            <div class="contact-card-actions">
              <a
                class="contact-card-link"
                :href="item.href"
                :target="isHttpLink(item.href) ? '_blank' : undefined"
                :rel="isHttpLink(item.href) ? 'noreferrer' : undefined"
                >{{ item.cta }}</a
              >
              <a v-if="item.altHref" class="contact-card-link alt" :href="item.altHref">{{
                item.altCta
              }}</a>
              <button
                v-if="item.copyValue"
                class="contact-card-link alt contact-copy"
                :class="{ copied: copiedContact === item.id }"
                type="button"
                @click="copyContact(item.copyValue, item.id)"
              >
                {{ copiedContact === item.id ? 'Copied' : 'Copy' }}
              </button>
            </div>
          </article>
        </div>

        <p class="contact-subtitle">Other Profiles</p>
        <ul class="social-list contact-secondary">
          <li v-for="social in profileLinks" :key="social.label">
            <a
              :href="social.url"
              :target="isHttpLink(social.url) ? '_blank' : undefined"
              :rel="isHttpLink(social.url) ? 'noreferrer' : undefined"
            >
              <span>{{ social.label }}</span>
              <small>{{ social.meta }}</small>
            </a>
          </li>
        </ul>
      </section>
    </main>

    <footer>
      <p>Copyright {{ currentYear }} Awin.dev</p>
    </footer>
  </div>
</template>
