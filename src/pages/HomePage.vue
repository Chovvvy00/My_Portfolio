<script setup>
import { ref } from 'vue'

import { useTheme } from '../composables/useTheme'
import resumeFile from '../assets/files/resume.pdf'
import profilePhoto from '../assets/images/profile.png'
import sailsLogo from '../assets/images/sails-logo.png'
import laravelLogo from '../assets/images/laravel-logo.png'

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'City Government of Calamba',
    period: 'Jan 2026 - Present',
    summary:
      'Built and maintained Human Resource Information System (HRIS), improving HR operations and data management.',
    highlights: [
      'Maintained and enhanced HRIS modules used in CHRMO daily operations.',
      'Ensure system is always up and running smoothly',
    ],
    stack: ['Javascript', 'Node.js', 'Sails.js', 'Pug.js','Fomantic UI', 'REST API', 'HTML', 'CSS'],
  },
  {
    role: 'Backend Developer',
    company: 'City Government of Calamba',
    period: 'May 2023 - Dec 2025',
    summary:
      'Contributed to backend API development and database management for development of Human Resource Information System.',
    highlights: [
      'Developed API endpoints and backend logic for attendance module, leave application and other modules.',
      'Worked on MySQL query improvements for faster DTR generation.',
    ],
    stack: ['Node.js', 'Sails.js', 'MySQL', 'REST API', 'Postman', 'Workbench'],
  },
  {
    role: 'Web Developer Intern',
    company: 'City Government of Calamba',
    period: 'Jan 2023 - Apr 2023',
    summary: 'Built Position Description Form generator, improving HR PDF workflow efficiency.',
    highlights: [
      'Delivered working HR form modules and PDF generation flows during internship.',
      'Improved internal process speed through automation-focused web tools.',
    ],
    stack: ['Javascript', 'Sails.js', 'Pug.js', 'Bootstrap', 'REST API'],
  },
]

const projects = [
  {
    id: 'hris',
    type: 'Information System',
    title: 'Human Resource Information System',
    tech: ['Node.js', 'MySQL', 'Socket.io', 'REST APIs'],
    problem:
      'HR workflows were spread across manual processes and disconnected records, causing delays and reporting bottlenecks.',
    role: 'Designed backend logic and delivered full-stack HR modules for attendance, leave, shifting, travel orders and other modules',
    whatIBuilt: [
      'Employee Management module',
      'Leave management system',
      'Shifting management',
      'Attendance computation logic',
      'DTR generation',
      'Authentication',
      'Authorization',
      'Business validation rules',
    ],
    challenges: [
      'Complex attendance and leave policy rules needed deterministic validation.',
      'Large datasets and heavy JSON slowed report generation.',
      'Designing database relationships for shift scheduling is tricky.',
    ],
    challengeSolutions: [
      {
        challenge: 'Complex leave and attendance rules across multiple HR scenarios.',
        solution:
          'Implemented centralized validation and business-rule checks in backend service layers.',
      },
      {
        challenge: 'Slow reporting performance on larger operational datasets.',
        solution:
          'Optimized query paths and report generation flow to reduce response time and load.',
      },
      {
        challenge: 'Designing database relationships for shift scheduling is complex.',
        solution: 'Utilized AI tools like ChatGPT to explore suggestions and approaches for designing an effective shift scheduling database model.'
      },
    ],
    outcomes: [
      'Improved accuracy of attendance logs and leave tracking in employee DTR sheet.',
      'Reduced manual HR processing and operational delays.',
      'Centralized HR workflows into one maintainable system.',
    ],
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
        detail: 'Server-rendered HR modules using Pug.js, Fomantic UI, and JQuery.',
      },
      {
        layer: 'Document Generation Layer',
        detail: 'Backend service for automated DTR PDF creation tied to validated attendance data.',
      },
      {
        layer: 'Business Rules Layer',
        detail:
          'Centralized validation for leave balances, schedule constraints, and HR/CSC policy checks.',
      },
    ],
  },
  {
    id: 'cookies-nest',
    type: 'Animal Welfare Portal',
    title: 'Cookies Nest Animal Shelter Website',
    tech: ['Core PHP (Hardcoded)', 'Bootstrap', 'HTML', 'JavaScript'],
    problem:
      'The shelter needed a simple online platform to handle rescue and adoption requests instead of manual intake only.',
    role: 'Built the end-to-end web platform using core PHP and Bootstrap, including request flows and admin-facing pages.',
    whatIBuilt: [
      'Public-facing pet browsing interface',
      'Rescue and adoption request forms with server-side validation',
      'Contact form with email notifications',
      'Basic admin dashboard for managing requests',
    ],
    challenges: [
      'Implemented maintainable structure without modern framework abstractions.',
      'Kept forms clear and reliable for non-technical users.',
      'Delivered responsive pages quickly for mobile and desktop usage.',
    ],
    challengeSolutions: [
      {
        challenge: 'No framework abstractions while building complete request workflows.',
        solution:
          'Structured core PHP handlers and reusable form logic for maintainability and speed.',
      },
      {
        challenge: 'Users needed clear, low-friction forms for rescue and adoption.',
        solution:
          'Used responsive Bootstrap layouts and server-side validation for reliable submissions.',
      },
      {
        challenge: 'Needed mobile-ready UI with limited implementation complexity.',
        solution:
          'Applied component-style Bootstrap sections and simplified frontend interactions.',
      },
    ],
    outcomes: [
      'Enabled online rescue and adoption request submission.',
      'Reduced manual coordination with structured request records.',
      'Improved accessibility through responsive Bootstrap interfaces.',
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
    problem:
      'Users needed instant communication features with reliable messaging, group flow, and smooth conversation handling.',
    role: 'Implemented frontend chat flows and integrated backend APIs to support real-time message delivery and conversation management.',
    whatIBuilt: [
      'Authentication and conversation interface flows',
      'Live messaging screens with responsive conversation layout',
      'Group creation workflow and emoji picker integration',
      'Message retrieval and delivery connected to backend events',
    ],
    challenges: [
      'Maintained message state consistency during real-time updates.',
      'Coordinated auth, conversation, and message lifecycle logic.',
      'Balanced responsiveness and readability in chat-heavy screens.',
    ],
    challengeSolutions: [
      {
        challenge: 'Real-time message state could desync across active conversations.',
        solution:
          'Used event-driven updates and consistent message retrieval patterns between frontend and backend.',
      },
      {
        challenge: 'Authentication and conversation flow needed predictable API behavior.',
        solution:
          'Structured Laravel endpoint integration with clear request/response handling in Vue.',
      },
      {
        challenge: 'Chat UI needed responsiveness without losing conversation readability.',
        solution:
          'Designed responsive message layout and focused interaction patterns for core chat actions.',
      },
    ],
    outcomes: [
      'Delivered real-time messaging with group chat support.',
      'Improved UX with instant message updates and interaction feedback.',
      'Strengthened event-driven architecture and API integration skills.',
    ],
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
      { name: 'Node.js', logo: 'skills/nodejs.svg' },
      { name: 'Sails.js', logo: sailsLogo },
      { name: 'PHP Laravel', logo: laravelLogo },
      { name: 'REST APIs', badge: 'API' },
    ],
  },
  {
    title: 'Database',
    items: [{ name: 'MySQL', logo: 'skills/mysql.svg' }],
  },
  {
    title: 'Learning',
    items: [
      { name: 'React', logo: 'skills/react.svg' },
      { name: 'Python', logo: 'skills/python.svg' },
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

const developmentProcess = [
  {
    step: '1. Discover',
    detail: 'Clarify business requirements, user flow, and success criteria before implementation.',
  },
  {
    step: '2. Design System Logic',
    detail: 'Define API contracts, validation rules, and database structure for reliable behavior.',
  },
  {
    step: '3. Build and Integrate',
    detail: 'Implement modules incrementally and connect frontend interfaces to backend services.',
  },
  {
    step: '4. Test and Optimize',
    detail:
      'Validate core scenarios, refine edge cases, and improve performance for production use.',
  },
]

const aboutSummary = {
  caption:
    'I build reliable backend systems that support daily operations and measurable outcomes.',
  who: 'Backend-strong developer with 2+ years of hands-on experience building and maintaining production web systems.',
  target: 'Target Role: Junior Full Stack Developer (Node.js | JavaScript).',
  growth: 'Next Focus: React frontend architecture and Python backend fundamentals.',
}

const aboutHighlights = [
  'Design APIs and business rules first before introducing UI complexity.',
  'Ensure proper validation, data flow, and maintainable backend logic.',
  'Build RESTful APIs and structured backend systems using Node.js.',
  'Develop responsive and functional interfaces that integrate with backend services.',
  'Continuously build projects to improve full-stack development skills.',
  'Write clean, organized code focused on long-term maintainability.',
];

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

const profileLinks = socials.filter((item) => ['Facebook'].includes(item.label))

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
          <a href="#process">Process</a>
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
            <span class="hero-title-sub">Node.js | JavaScript | PHP</span>
          </h1>
          <p class="hero-copy">
            Aspiring Junior Full-Stack Developer with a strong interest in backend systems and API development.
            Currently strengthening my frontend skills, particularly in React, to grow into a well-rounded full-stack developer.
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
            <ul v-if="item.highlights?.length" class="experience-points">
              <li v-for="point in item.highlights" :key="point">{{ point }}</li>
            </ul>
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

            <div class="project-case-grid">
              <article v-if="project.problem" class="project-case-card">
                <p class="project-detail-title">Problem</p>
                <p class="project-case-copy">{{ project.problem }}</p>
              </article>
              <article v-if="project.role" class="project-case-card">
                <p class="project-detail-title">My Role</p>
                <p class="project-case-copy">{{ project.role }}</p>
              </article>
              <article v-if="project.tech?.length" class="project-case-card">
                <p class="project-detail-title">Tech Used</p>
                <p class="project-case-copy">{{ project.tech.join(' | ') }}</p>
              </article>
            </div>

            <div v-if="project.whatIBuilt?.length" class="project-detail">
              <p class="project-detail-title">What I Built:</p>
              <ul class="project-list">
                <li v-for="item in project.whatIBuilt" :key="item">{{ item }}</li>
              </ul>
            </div>

            <div v-if="project.challengeSolutions?.length" class="project-detail">
              <p class="project-detail-title">Challenges &amp; Solutions:</p>
              <ul class="challenge-solution-list">
                <li v-for="entry in project.challengeSolutions" :key="entry.challenge">
                  <p class="challenge-title">{{ entry.challenge }}</p>
                  <p class="solution-copy">{{ entry.solution }}</p>
                </li>
              </ul>
            </div>

            <div v-if="project.outcomes?.length" class="project-detail">
              <p class="project-detail-title">Key Outcomes:</p>
              <ul class="project-list impact-list">
                <li v-for="item in project.outcomes" :key="item">{{ item }}</li>
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

      <section id="process" class="section reveal" style="--delay: 0.19s">
        <p class="section-eyebrow">Process</p>
        <h2>How I Build Projects</h2>
        <div class="process-grid">
          <article class="process-card" v-for="item in developmentProcess" :key="item.step">
            <p class="process-step">{{ item.step }}</p>
            <p class="process-detail">{{ item.detail }}</p>
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
        <h2>Tech Stack</h2>
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
                    :src="item.logo.endsWith('.svg') ? withBase(item.logo) : item.logo"
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
            <p class="about-kicker">Professional Summary</p>
            <h2>Aspiring Junior Full-Stack Developer with a Strong Backend Foundation</h2>
            <p class="about-caption">{{ aboutSummary.caption }}</p>
            <ul class="about-caption-list">
              <li>
                <p class="about-caption-title">Who I Am</p>
                <p class="about-caption-copy">{{ aboutSummary.who }}</p>
              </li>
              <li>
                <p class="about-caption-title">Target Job</p>
                <p class="about-caption-copy">{{ aboutSummary.target }}</p>
              </li>
              <li>
                <p class="about-caption-title">What I am Learning Next</p>
                <p class="about-caption-copy">{{ aboutSummary.growth }}</p>
              </li>
            </ul>
          </article>
          <article class="about-card about-principles-card">
            <h3>What I Bring</h3>
            <ul class="about-principles-list">
              <li v-for="item in aboutHighlights" :key="item">
                <p class="about-principle-detail">{{ item }}</p>
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

        <div class="contact-quick-actions">
          <a v-if="emailContact" class="btn btn-primary" :href="emailContact.href">Email Me</a>
          <a v-if="phoneContact" class="btn btn-ghost" :href="phoneContact.href">Call Me</a>
          <a v-if="phoneContact?.altHref" class="btn btn-ghost-alt" :href="phoneContact.altHref"
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
