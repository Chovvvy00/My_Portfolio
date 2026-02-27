<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { useTheme } from '../composables/useTheme'

import hrisLoginImage from '../assets/screenshot/hris/Login.png'
import hrisDashboardImage from '../assets/screenshot/hris/Dashboard.png'
import hrisNavbarImage from '../assets/screenshot/hris/navbar.png'
import hrisEmployeesTabImage from '../assets/screenshot/hris/employees-tab.png'
import hrisEmployeeDetailsImage from '../assets/screenshot/hris/Employee-Details.png'
import hrisAppointmentTabImage from '../assets/screenshot/hris/Appointment-tab.png'
import hrisAppointmentShowImage from '../assets/screenshot/hris/Appointment-show.png'
import hrisPositionTabImage from '../assets/screenshot/hris/Position-Tab.png'
import hrisItemImage from '../assets/screenshot/hris/Item.png'
import hrisAttendanceTabImage from '../assets/screenshot/hris/attendance-tab.png'
import hrisLeaveTabImage from '../assets/screenshot/hris/leave.png'
import hrisLeaveSummaryImage from '../assets/screenshot/hris/leave-summary.png'
import hrisShiftTabImage from '../assets/screenshot/hris/shift-tab.png'
import hrisTravelAuthorityTabbImage from '../assets/screenshot/hris/Travel-Authority Tab.png'
import hrisEmployeeAttendanceImage from '../assets/screenshot/hris/Employee Attendance.png'
import hrisSalaryTableImage from '../assets/screenshot/hris/Salary-table.png'
import hrisOfficeTabImage from '../assets/screenshot/hris/office-tab.png'
import hrisActivityLogsTabImage from '../assets/screenshot/hris/Activity-logs tab.png'
import hrisHolidayTabImage from '../assets/screenshot/hris/holiday-tab.png'

import animalShelterHomeImage from '../assets/screenshot/animal_shelter/front-page.png'
import animalShelterHomeImage2 from '../assets/screenshot/animal_shelter/front-page-2.png'
import animalShelterHomeImage3 from '../assets/screenshot/animal_shelter/front-page-3.png'
import animalShelterHomeImage4 from '../assets/screenshot/animal_shelter/adoption-process.png'
import animalShelterHomeImage5 from '../assets/screenshot/animal_shelter/Adoption-Dog.png'
import animalShelterHomeImage6 from '../assets/screenshot/animal_shelter/Adoption-Cat.png'
import animalShelterHomeImage7 from '../assets/screenshot/animal_shelter/Adoption-Dog-index.png'
import animalShelterHomeImage8 from '../assets/screenshot/animal_shelter/Adoption-Cat-index.png'
import animalShelterHomeImage9 from '../assets/screenshot/animal_shelter/Posted_Dogs.png'
import animalShelterHomeImage10 from '../assets/screenshot/animal_shelter/Posted_Cats.png'
import animalShelterHomeImage11 from '../assets/screenshot/animal_shelter/Dog_Adoption_Request.png'
import animalShelterHomeImage12 from '../assets/screenshot/animal_shelter/Rescue_Request_Form.png'
import animalShelterHomeImage13 from '../assets/screenshot/animal_shelter/Dashboard.png'
import animalShelterHomeImage14 from '../assets/screenshot/animal_shelter/About.png'
import animalShelterHomeImage15 from '../assets/screenshot/animal_shelter/Pet_Posting.png'

import chatAppImage from '../assets/screenshot/chat-app/register.png'
import chatAppImage1 from '../assets/screenshot/chat-app/login.png'
import chatAppImage2 from '../assets/screenshot/chat-app/light-mode.png'
import chatAppImage3 from '../assets/screenshot/chat-app/emoji.png'
import chatAppImage4 from '../assets/screenshot/chat-app/chat-box.png'
import chatAppImage5 from '../assets/screenshot/chat-app/add-group.png'
import chatAppImage6 from '../assets/screenshot/chat-app/chat-box-info.png'

import hrisVideo from '../assets/videos/hris.mp4'
import animelShelterVideo from '../assets/videos/animal_shelter.mp4'
import chatApp from '../assets/videos/chat-app.mp4'

const route = useRoute()
const { theme, toggleTheme } = useTheme()

const projectNames = {
  hris: 'Human Resource Information System',
  'cookies-nest': 'Cookies Nest Animal Shelter Website',
  'chat-app': 'Chat-App',
}

const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const screenshots = [
  {
    projectId: 'hris',
    title: 'HRIS Login Screen',
    image: hrisLoginImage,
    detail: 'Login screen for the HRIS application.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Navbar',
    image: hrisNavbarImage,
    detail: 'Navigation bar for the HRIS application.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Dashboard',
    image: hrisDashboardImage,
    detail: 'Main dashboard with metrics overview.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Employees Tab',
    image: hrisEmployeesTabImage,
    detail: 'Employees tab showing employee list and management options.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Employee Details',
    image: hrisEmployeeDetailsImage,
    detail: 'Employee details view showing comprehensive employee information.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Appointment Tab',
    image: hrisAppointmentTabImage,
    detail: 'Appointment tab showing upcoming and past appointments.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Appointment Show',
    image: hrisAppointmentShowImage,
    detail: 'Detailed view of a specific appointment.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Position Tab',
    image: hrisPositionTabImage,
    detail: 'Position tab showing available job positions and details .',
  },
  {
    projectId: 'hris',
    title: 'HRIS Item',
    image: hrisItemImage,
    detail: 'Item management view showing available items and their details .',
  },
  {
    projectId: 'hris',
    title: 'HRIS Attendance Tab',
    image: hrisAttendanceTabImage,
    detail: 'Attendance tab showing employee attendance records.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Leave Tab',
    image: hrisLeaveTabImage,
    detail: 'Leave tab showing employee leave requests and approvals.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Leave Summary',
    image: hrisLeaveSummaryImage,
    detail: 'Leave summary showing employee leave statistics.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Shift Tab',
    image: hrisShiftTabImage,
    detail: 'Shift tab showing employee shift schedules.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Travel Authority Tab',
    image: hrisTravelAuthorityTabbImage,
    detail: 'Travel authority tab showing employee travel requests and approvals.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Employee Attendance',
    image: hrisEmployeeAttendanceImage,
    detail: 'Employee attendance tab showing employee attendance records.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Salary Tranche',
    image: hrisSalaryTableImage,
    detail: 'Salary Tranche showing employee salary details.',
  },
  {
    projectId: 'hris',
    title: 'Office Management',
    image: hrisOfficeTabImage,
    detail: 'Office tab showing list of offices in the HRIS system.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Activity Logs Tab',
    image: hrisActivityLogsTabImage,
    detail: 'Real-time system activity logs for the information system.',
  },
  {
    projectId: 'hris',
    title: 'HRIS Holiday Tab',
    image: hrisHolidayTabImage,
    detail: 'Holiday tab showing employee holiday information.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Home Page',
    image: animalShelterHomeImage,
    detail: 'Home page of the Cookies Nest Animal Shelter Website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Home Page',
    image: animalShelterHomeImage2,
    detail: 'Home page of the Cookies Nest Animal Shelter Website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Home Page',
    image: animalShelterHomeImage3,
    detail: 'Home page of the Cookies Nest Animal Shelter Website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Adoption Process',
    image: animalShelterHomeImage4,
    detail: 'Adoption process page of the Cookies Nest Animal Shelter Website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Adoption Dog',
    image: animalShelterHomeImage5,
    detail: 'Adoption dog page of the Cookies Nest Animal Shelter Website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Adoption Cat',
    image: animalShelterHomeImage6,
    detail: 'Adoption cat page of the Cookies Nest Animal Shelter Website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Adoption Dog Index',
    image: animalShelterHomeImage7,
    detail: 'Adoption dog index page of the Cookies Nest Animal Shelter Website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Adoption Cat Index',
    image: animalShelterHomeImage8,
    detail: 'Adoption cat index page of the Cookies Nest Animal Shelter Website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Posted Dogs',
    image: animalShelterHomeImage9,
    detail: 'Posted dogs page of the Cookies Nest Animal Shelter Website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Posted Cats',
    image: animalShelterHomeImage10,
    detail: 'Posted cats page of the Cookies Nest Animal Shelter Website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Dog Adoption Request Form',
    image: animalShelterHomeImage11,
    detail: 'Dog adoption request form page of the Cookies Nest Animal Shelter Website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Rescue Request Form',
    image: animalShelterHomeImage12,
    detail: 'Rescue request form page of the Cookies Nest Animal Shelter Website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Dashboard',
    image: animalShelterHomeImage13,
    detail: 'Dashboard view for the cookies nest website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'About Us Page',
    image: animalShelterHomeImage14,
    detail: 'About us view for the cookies nest website.',
  },
  {
    projectId: 'cookies-nest',
    title: 'Pet Posting Page',
    image: animalShelterHomeImage15,
    detail: 'Pet posting view for the cookies nest website.',
  },
  {
    projectId: 'chat-app',
    title: 'Chat App Home Page',
    image: chatAppImage,
    detail: 'Home page of the Chat App.',
  },
  {
    projectId: 'chat-app',
    title: 'Chat App Login Page',
    image: chatAppImage1,
    detail: 'Login page of the Chat App.',
  },
  {
    projectId: 'chat-app',
    title: 'Chat App Light Mode',
    image: chatAppImage2,
    detail: 'Light mode view of the Chat App.',
  },
  {
    projectId: 'chat-app',
    title: 'Chat App Emoji Picker',
    image: chatAppImage3,
    detail: 'Emoji picker view of the Chat App.',
  },
  {
    projectId: 'chat-app',
    title: 'Chat App Chat Box',
    image: chatAppImage4,
    detail: 'Chat box view of the Chat App.',
  },
  {
    projectId: 'chat-app',
    title: 'Chat App Add Group',
    image: chatAppImage5,
    detail: 'Add group view of the Chat App.',
  },
  {
    projectId: 'chat-app',
    title: 'Chat App Chat Box Info',
    image: chatAppImage6,
    detail: 'Chat box info view of the Chat App.',
  },
]

const videos = [
  {
    projectId: 'hris',
    title: 'HRIS Walkthrough',
    src: hrisVideo,
    // poster: withBase('demo/posters/hris-video-poster.svg'),
  },
  {
    projectId: 'chat-app',
    title: 'Chat App Demo',
    src: chatApp,
    // poster: withBase('demo/posters/chat-video-poster.svg'),
  },
  {
    projectId: 'cookies-nest',
    title: 'Cookies Nest Animal Shelter Website Demo',
    src: animelShelterVideo,
    // poster: withBase('demo/posters/animal-shelter-video-poster.svg'),
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
        <h1>Demo</h1>
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
