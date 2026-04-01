<template>
  <div class="scroll-container">
    <img src="/logo-omi-site.svg" alt="Omi" class="top-left-logo" :class="{ 'logo-orange': heroScrolled }" />
    <a href="#footer" class="keep-in-touch-btn">Keep in touch</a>
    <div class="hero-section" :class="{ scrolled: heroScrolled }" @wheel.prevent="onHeroWheel">
      <div class="hero-overlay">
        <div class="hero-title">
          <div class="title-line">
            <span class="title-omi">omi</span>
            <img src="/Union.svg" alt="" class="title-picto-svg" />
            <span class="title-text">Soil</span>
          </div>
          <div class="title-line">
            <img src="/Union-1.svg" alt="" class="title-picto-svg title-picto-smaller" />
            <span class="title-text">Health</span>
            <img src="/Union-2.svg" alt="" class="title-picto-svg" />
          </div>
          <div class="title-line">
            <span class="title-text">Companion</span>
          </div>
        </div>
        <a href="#product-section" class="scroll-arrow" @click.prevent="scrollToContent">
          <img src="/fleche-omi.svg" alt="Scroll down" />
        </a>
      </div>
    </div>
    <div id="product-section" class="content">
      <div class="main-content">
          
        <SectionIntro
          title="Supporting Plants from the Ground Up"
          text="Omi focuses on what we usually don’t see: the soil.
By reading its signals and working with mycelium, it helps restore natural balance and support healthier indoor plants.
Instead of reacting to visible symptoms, Omi makes it possible to understand changes early, reinforce the soil, and care for plants more thoughtfully over time.
A regenerative approach to everyday plant care, built around observation, prevention, and long-term stability."
        />
          <div class="mosaic-omi-section">
      <MosaicOmi />
    </div>
        <div class="sliderbox-section">
          <div class="sliderbox-columns">
            <img src="/Group1-1.svg" alt="Group 1" class="group-image" />
            <img src="/Group2-2.svg" alt="Group 2" class="group-image" />
            <img src="/Group3-3.svg" alt="Group 3" class="group-image" />
          </div>
        </div>
        <div class="hero-wrapper">
          <div class="model-glow"></div>
          <img src="/hero-image.png" alt="Omi Product" class="hero-image" />
          <IconTooltip
            icon="/health-icon.svg"
            label="Temperature"
            value="94 °C"
            color="#FFC473"
            innerColor="#FF5A02"
            position="top-left"
          />
          <IconTooltip
            icon="/humidity-icon.svg"
            label="Humidity"
            value="67 %"
            color="#A3D9FF"
            innerColor="#2B7FFF"
            position="top-right"
            arrowFirst
          />
          <IconTooltip
            icon="/luminosity-icon.svg"
            label="CO²"
            value="82 %"
            color="#E9CBFB"
            innerColor="#CC77FE"
            position="bottom-left"
          />
          <IconTooltip
            icon="/temperature-icon.svg"
            label="Luminosity"
            value="21%"
            color="#F1FFA2"
            innerColor="#FAD900"
            position="bottom-right"
            arrowFirst
          />
        </div>
        </div>
    </div>
    <div class="video-section">
      <div class="video-columns">
        <div class="video-block">
          <div class="video-intro">
            <h2 class="video-title">Reading the soil</h2>
            <p class="video-description">Omi measures key signals from the soil and surrounding environment.<br />A simple light indicator reflects the overall state, helping anticipate stress before symptoms appear.</p>
          </div>
          <CardVideo src="/insertion.mp4" />
        </div>
        <div class="video-block">
          <div class="video-intro">
            <h2 class="video-title">Adding mycelium</h2>
            <p class="video-description">A small amount of mycelium is introduced near the roots.<br />It acts as a natural extension of the plant, improving access to water and nutrients while stabilizing the soil.</p>
          </div>
          <CardVideo src="/mycélium 2.mp4" />
        </div>
        <div class="video-block">
          <div class="video-intro">
            <h2 class="video-title">Watering</h2>
            <p class="video-description">With a more balanced soil, plants become more resilient.<br />They tolerate variations better, require less frequent watering, and remain stable over time.</p>
          </div>
          <CardVideo src="/arrosage.mp4" />
        </div>
      </div>
    </div>
    <div class="mosaic-section">
      <Mosaic />
    </div>

    <div id="footer" class="footer-3d">
      <div class="footer-3d-top">
        <div class="footer-3d-left">
          <p class="footer-3d-text">Stay informed about the project's progress</p>
        </div>
        <div class="footer-3d-right">
          <form class="newsletter-form footer-form" @submit.prevent="subscribe">
            <input
              v-model="fullName"
              type="text"
              placeholder="Full Name"
              class="newsletter-input"
              required
            />
            <input
              v-model="email"
              type="email"
              placeholder="Your email address"
              class="newsletter-input"
              required
            />
            <button type="submit" class="newsletter-button" :disabled="loading">
              {{ loading ? 'Sending...' : "Subscribe" }}
            </button>
          </form>
          <p v-if="message" :class="['newsletter-message', messageType]">{{ message }}</p>
        </div>
      </div>
      <div class="footer-3d-bottom">
        <div class="footer-contact">
          Contact : <a href="mailto:hello@bureau1217.com">hello@bureau1217.com</a>
        </div>
        <div class="footer-credits">
          Project by Bureau 1217
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const fullName = ref('')
const email = ref('')
const loading = ref(false)
const message = ref('')
const messageType = ref('')
const heroScrolled = ref(false)

const unlockScroll = () => {
  setTimeout(() => {
    window.scrollTo(0, 0)
    document.body.style.overflow = 'auto'
    document.documentElement.style.overflow = 'auto'
  }, 1000)
}

const lockScroll = () => {
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}

const scrollToContent = () => {
  heroScrolled.value = true
  unlockScroll()
}

const onHeroWheel = (e) => {
  if (e.deltaY > 0 && !heroScrolled.value) {
    heroScrolled.value = true
    unlockScroll()
  }
}

const handleScroll = () => {
  if (heroScrolled.value && window.scrollY <= 0) {
    heroScrolled.value = false
    lockScroll()
  }
}

const preventScroll = (e) => {
  if (!heroScrolled.value) {
    e.preventDefault()
    window.scrollTo(0, 0)
  }
}

onMounted(() => {
  window.scrollTo(0, 0)
  lockScroll()
  window.addEventListener('scroll', preventScroll)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', preventScroll)
  window.removeEventListener('scroll', handleScroll)
})

const subscribe = async () => {
  if (!email.value || !fullName.value) return

  loading.value = true
  message.value = ''

  try {
    await $fetch('/api/subscribe', {
      method: 'POST',
      body: {
        email: email.value,
        fullName: fullName.value
      }
    })

    message.value = 'Thank you for subscribing!'
    messageType.value = 'success'
    fullName.value = ''
    email.value = ''
  } catch (error) {
    message.value = error.data?.message || 'An error occurred'
    messageType.value = 'error'
  } finally {
    loading.value = false
    setTimeout(() => {
      message.value = ''
    }, 5000)
  }
}
</script>
