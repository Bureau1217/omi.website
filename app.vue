<template>
  <div class="scroll-container">
    <img src="/logo-omi-site.svg" alt="Omi" class="top-left-logo" :class="{ 'logo-orange': heroScrolled }" />
    <a href="#footer" class="keep-in-touch-btn">Keep in touch</a>
    <div class="hero-section" :class="{ scrolled: heroScrolled }" @wheel.prevent="onHeroWheel">
      <img src="/A4 - 169.png" alt="Hero background" class="hero-bg-image" />
      <div class="hero-overlay">
        <div class="hero-title">
          <div class="title-line">
            <span class="title-omi">omi</span>
            <img src="/Union.svg" alt="" class="title-picto picto-1" />
            <span class="title-text">Soil</span>
          </div>
          <div class="title-line">
            <img src="/Union-1.svg" alt="" class="title-picto picto-2" />
            <span class="title-text">Health</span>
            <img src="/Union-2.svg" alt="" class="title-picto picto-3" />
          </div>
          <div class="title-line">
            <span class="title-text">Compagnon</span>
          </div>
        </div>
        <a href="#product-section" class="scroll-arrow" @click.prevent="scrollToContent">
          <img src="/fleche-omi.svg" alt="Scroll down" />
        </a>
      </div>
    </div>
    <div id="product-section" class="content">
      <div class="main-content">
        <div class="product-intro">
          <h2 class="section-subtitle">Regenerative Soil Health</h2>
          <p class="section-description">
            Omi reads the soil in indoor plants and home gardens,
            helping restore natural balance and support healthier
            plants. By working with mycelium, a natural network
            that supports roots, it invites a more thoughtful
            relationship with the living systems we care for.
          </p>
        </div>
        <div class="hero-wrapper">
          <div class="model-glow"></div>
          <img src="/hero-image.png" alt="Omi Product" class="hero-image" />
          <IconTooltip
            icon="/health-icon.svg"
            label="Health Index"
            value="94 %"
            color="#F5A623"
            position="top-left"
          />
          <IconTooltip
            icon="/humidity-icon.svg"
            label="Humidity Level"
            value="67 %"
            color="#2196F3"
            position="top-right"
          />
          <IconTooltip
            icon="/luminosity-icon.svg"
            label="Light Exposure"
            value="82 %"
            color="#9C27B0"
            position="bottom-left"
          />
          <IconTooltip
            icon="/temperature-icon.svg"
            label="Temperature"
            value="21 °C"
            color="#4CAF50"
            position="bottom-right"
          />
        </div>
      </div>
    </div>
    <div class="two-columns">
      <div class="column-image">
        <img src="/Mask group.png" alt="Mask group" class="mask-image" />
      </div>
      <div class="column-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    <div id="footer" class="footer-3d">
      <div class="footer-3d-left">
        <p class="footer-3d-text">Restez informé de l'évolution du projet</p>
        <form class="newsletter-form footer-form" @submit.prevent="subscribe">
          <input
            v-model="fullName"
            type="text"
            placeholder="Nom Prénom"
            class="newsletter-input"
            required
          />
          <input
            v-model="email"
            type="email"
            placeholder="Votre adresse email"
            class="newsletter-input"
            required
          />
          <button type="submit" class="newsletter-button" :disabled="loading">
            {{ loading ? 'Envoi...' : "S'inscrire" }}
          </button>
        </form>
        <p v-if="message" :class="['newsletter-message', messageType]">{{ message }}</p>
        <div class="footer-contact">
          Contact : <a href="mailto:hello@bureau1217.com">hello@bureau1217.com</a>
        </div>
        <div class="footer-credits">
          Projet réalisé par Bureau 1217
        </div>
      </div>
      <div class="footer-3d-right">
        <ClientOnly>
          <OmiModel />
        </ClientOnly>
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

    message.value = 'Merci pour votre inscription !'
    messageType.value = 'success'
    fullName.value = ''
    email.value = ''
  } catch (error) {
    message.value = error.data?.message || 'Une erreur est survenue'
    messageType.value = 'error'
  } finally {
    loading.value = false
    setTimeout(() => {
      message.value = ''
    }, 5000)
  }
}
</script>
