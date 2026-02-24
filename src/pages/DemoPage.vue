<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { useTheme } from '../composables/useTheme'

const route = useRoute()
const { theme, toggleTheme } = useTheme()

const projectNames = {
  hris: 'Human Resource Information System',
  'cookies-nest': 'Cookies Nest Animal Shelter Website',
  'chat-app': 'Chat-App',
}

const screenshots = [
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: 'src/assets/screenshot/hris/Dashboard.png',
    detail: 'Main dashboard with metrics overview.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: '/demo/images/hris-dashboard.svg',
    detail: 'Main dashboard overview with employee and attendance metrics.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Employee Management',
    image: '/demo/images/employee-management.svg',
    detail: 'Sample listing and management layout for app records.',
  },
  {
    projectId: 'chat-app',
    title: 'Chat App Interface',
    image: '/demo/images/chat-interface.svg',
    detail: 'Real-time chat rooms with responsive conversation layout.',
  },
]

const videos = [
  {
    projectId: 'hris',
    title: 'HRIS Walkthrough',
    src: '/demo/videos/hris-walkthrough.mp4',
    poster: '/demo/posters/hris-video-poster.svg',
  },
  {
    projectId: 'chat-app',
    title: 'Chat App Demo',
    src: '/demo/videos/chat-app-demo.mp4',
    poster: '/demo/posters/chat-video-poster.svg',
  },
]

const selectedProject = computed(() => {
  const project = route.query.project
  if (typeof project !== 'string') return ''
  return projectNames[project] ? project : ''
})

const filteredScreenshots = computed(() => {
  if (!selectedProject.value) return screenshots
  return screenshots.filter((item) => item.projectId === selectedProject.value)
})

const filteredVideos = computed(() => {
  if (!selectedProject.value) return videos
  return videos.filter((item) => item.projectId === selectedProject.value)
})

const selectedProjectLabel = computed(() => {
  return selectedProject.value ? projectNames[selectedProject.value] : 'All Projects'
})

const isLightboxOpen = ref(false)
const activeImageIndex = ref(0)

const lightboxImage = computed(() => {
  return filteredScreenshots.value[activeImageIndex.value] || null
})

const openLightbox = (index) => {
  if (!filteredScreenshots.value.length) return
  activeImageIndex.value = index
  isLightboxOpen.value = true
}

const closeLightbox = () => {
  isLightboxOpen.value = false
}

const showNextImage = () => {
  if (!filteredScreenshots.value.length) return
  activeImageIndex.value = (activeImageIndex.value + 1) % filteredScreenshots.value.length
}

const showPreviousImage = () => {
  if (!filteredScreenshots.value.length) return
  activeImageIndex.value =
    (activeImageIndex.value - 1 + filteredScreenshots.value.length) %
    filteredScreenshots.value.length
}

const onLightboxKeydown = (event) => {
  if (!isLightboxOpen.value) return
  if (event.key === 'Escape') closeLightbox()
  if (event.key === 'ArrowRight') showNextImage()
  if (event.key === 'ArrowLeft') showPreviousImage()
}

watch(isLightboxOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onLightboxKeydown)
    return
  }

  document.body.style.overflow = ''
  window.removeEventListener('keydown', onLightboxKeydown)
})

watch(filteredScreenshots, (list) => {
  if (!list.length) {
    closeLightbox()
    activeImageIndex.value = 0
    return
  }

  if (activeImageIndex.value >= list.length) activeImageIndex.value = 0
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onLightboxKeydown)
})

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
    <header class="topbar reveal" style="--delay: 0.03s">
      <RouterLink class="brand" to="/">Awin.dev</RouterLink>
      <div class="topbar-actions">
        <nav>
          <a href="#screenshots">Screenshots</a>
          <a href="#videos">Videos</a>
          <RouterLink to="/">Back Home</RouterLink>
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
      <section class="section demo-hero reveal" style="--delay: 0.08s">
        <p class="section-eyebrow">Demo Gallery</p>
        <h1>Watch Demo</h1>
        <p class="demo-filter">
          Showing:
          <strong>{{ selectedProjectLabel }}</strong>
        </p>
        <p class="hero-copy">
          This page stores your project screenshots and demo videos in one place. Replace the
          placeholder files inside <code>public/demo</code> with your actual media.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#videos">Go To Videos</a>
          <RouterLink class="btn btn-ghost" to="/">Back To Portfolio</RouterLink>
          <RouterLink class="btn btn-ghost-alt" to="/demo">Show All</RouterLink>
        </div>
      </section>

      <section id="screenshots" class="section reveal" style="--delay: 0.12s">
        <p class="section-eyebrow">Screenshots</p>
        <h2>Application Screens</h2>
        <div class="demo-image-scroll">
          <div class="demo-grid demo-image-grid">
            <article
              class="demo-card"
              v-for="(item, index) in filteredScreenshots"
              :key="item.title"
            >
              <button
                class="demo-image-btn"
                type="button"
                @click="openLightbox(index)"
                :aria-label="`Open ${item.title} in fullscreen`"
              >
                <img :src="item.image" :alt="item.title" />
              </button>
              <h3>{{ item.title }}</h3>
              <p>{{ item.detail }}</p>
              <p class="demo-image-hint">Click image to view fullscreen</p>
            </article>
            <p v-if="filteredScreenshots.length === 0" class="demo-empty">
              No screenshots added yet for this project.
            </p>
          </div>
        </div>
      </section>

      <section id="videos" class="section reveal" style="--delay: 0.16s">
        <p class="section-eyebrow">Videos</p>
        <h2>Recorded Walkthroughs</h2>
        <div class="demo-grid demo-video-grid">
          <article class="demo-card" v-for="item in filteredVideos" :key="item.title">
            <video class="demo-video" controls preload="none" :poster="item.poster">
              <source :src="item.src" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <h3>{{ item.title }}</h3>
            <p class="demo-note">
              Place your video here:
              <code>{{ item.src }}</code>
            </p>
          </article>
          <p v-if="filteredVideos.length === 0" class="demo-empty">
            No videos added yet for this project.
          </p>
        </div>
      </section>
    </main>

    <footer>
      <p>Copyright {{ currentYear }} Awin.dev</p>
    </footer>
  </div>

  <div v-if="isLightboxOpen && lightboxImage" class="lightbox" @click.self="closeLightbox">
    <button
      class="lightbox-close"
      type="button"
      @click="closeLightbox"
      aria-label="Close image viewer"
    >
      X
    </button>

    <button
      class="lightbox-nav lightbox-prev"
      type="button"
      @click="showPreviousImage"
      aria-label="Previous image"
    >
      <
    </button>

    <figure class="lightbox-content">
      <img :src="lightboxImage.image" :alt="lightboxImage.title" />
      <figcaption>
        <strong>{{ lightboxImage.title }}</strong>
        <span>{{ activeImageIndex + 1 }} / {{ filteredScreenshots.length }}</span>
      </figcaption>
    </figure>

    <button
      class="lightbox-nav lightbox-next"
      type="button"
      @click="showNextImage"
      aria-label="Next image"
    >
      >
    </button>
  </div>
</template>
