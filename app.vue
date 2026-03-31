<template>
  <div class="scroll-container">
    <img src="/logo-omi-site.svg" alt="Omi" class="top-left-logo" :class="{ 'logo-orange': heroScrolled }" />
    <a href="#footer" class="keep-in-touch-btn">Keep in touch</a>
    <div class="hero-section" :class="{ scrolled: heroScrolled }" @wheel.prevent="onHeroWheel">
      <div class="hero-overlay">
        <div class="hero-title">
          <div class="title-line">
            <span class="title-omi">omi</span>
            <svg class="title-picto-svg" viewBox="0 0 159 159" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="img1" patternUnits="userSpaceOnUse" width="159" height="159">
                  <image href="/A4 - 169.png" x="0" y="0" width="159" height="159" preserveAspectRatio="xMidYMid slice"/>
                </pattern>
              </defs>
              <path d="M10.2079 103.647C-3.38989 90.0492 -3.40404 68.017 10.1763 54.4367C12.8452 51.7677 15.8407 49.6239 19.0344 48.005C29.1381 42.8835 42.8838 29.1378 48.0053 19.0341C49.6242 15.8404 51.7681 12.8449 54.437 10.176C68.0173 -3.40435 90.0495 -3.39019 103.647 10.2076C106.369 12.9293 108.546 15.989 110.18 19.2511C115.225 29.328 128.724 42.8277 138.801 47.8727C142.063 49.5059 145.123 51.6834 147.845 54.4051C161.443 68.0029 161.457 90.0351 147.876 103.615C145.207 106.284 142.212 108.428 139.018 110.047C128.915 115.169 115.169 128.914 110.048 139.018C108.429 142.212 106.285 145.207 103.616 147.876C90.0354 161.456 68.0032 161.442 54.4054 147.845C51.6837 145.123 49.5061 142.063 47.8729 138.801C42.828 128.724 29.3284 115.224 19.2516 110.179C15.9894 108.546 12.9297 106.369 10.2079 103.647Z" fill="url(#img1)"/>
            </svg>
            <span class="title-text">Soil</span>
          </div>
          <div class="title-line">
            <svg class="title-picto-svg" viewBox="0 0 159 159" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="img2" patternUnits="userSpaceOnUse" width="159" height="159">
                  <image href="/A4 - 169.png" x="0" y="0" width="159" height="159" preserveAspectRatio="xMidYMid slice"/>
                </pattern>
              </defs>
              <path d="M10.2079 103.647C-3.38989 90.0492 -3.40404 68.017 10.1763 54.4367C12.8452 51.7677 15.8407 49.6239 19.0344 48.005C29.1381 42.8835 42.8838 29.1378 48.0053 19.0341C49.6242 15.8404 51.7681 12.8449 54.437 10.176C68.0173 -3.40435 90.0495 -3.39019 103.647 10.2076C106.369 12.9293 108.546 15.989 110.18 19.2511C115.225 29.328 128.724 42.8277 138.801 47.8727C142.063 49.5059 145.123 51.6834 147.845 54.4051C161.443 68.0029 161.457 90.0351 147.876 103.615C145.207 106.284 142.212 108.428 139.018 110.047C128.915 115.169 115.169 128.914 110.048 139.018C108.429 142.212 106.285 145.207 103.616 147.876C90.0354 161.456 68.0032 161.442 54.4054 147.845C51.6837 145.123 49.5061 142.063 47.8729 138.801C42.828 128.724 29.3284 115.224 19.2516 110.179C15.9894 108.546 12.9297 106.369 10.2079 103.647Z" fill="url(#img2)"/>
            </svg>
            <span class="title-text">Health</span>
            <svg class="title-picto-svg" viewBox="0 0 159 159" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="img3" patternUnits="userSpaceOnUse" width="159" height="159">
                  <image href="/A4 - 169.png" x="0" y="0" width="159" height="159" preserveAspectRatio="xMidYMid slice"/>
                </pattern>
              </defs>
              <path d="M10.2079 103.647C-3.38989 90.0492 -3.40404 68.017 10.1763 54.4367C12.8452 51.7677 15.8407 49.6239 19.0344 48.005C29.1381 42.8835 42.8838 29.1378 48.0053 19.0341C49.6242 15.8404 51.7681 12.8449 54.437 10.176C68.0173 -3.40435 90.0495 -3.39019 103.647 10.2076C106.369 12.9293 108.546 15.989 110.18 19.2511C115.225 29.328 128.724 42.8277 138.801 47.8727C142.063 49.5059 145.123 51.6834 147.845 54.4051C161.443 68.0029 161.457 90.0351 147.876 103.615C145.207 106.284 142.212 108.428 139.018 110.047C128.915 115.169 115.169 128.914 110.048 139.018C108.429 142.212 106.285 145.207 103.616 147.876C90.0354 161.456 68.0032 161.442 54.4054 147.845C51.6837 145.123 49.5061 142.063 47.8729 138.801C42.828 128.724 29.3284 115.224 19.2516 110.179C15.9894 108.546 12.9297 106.369 10.2079 103.647Z" fill="url(#img3)"/>
            </svg>
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
        <div class="sliderbox-section">
          <div class="sliderbox-columns">
            <SliderBox
              number="1"
              title="Analyse du sol"
              text="Omi mesure en temps réel les nutriments, l'humidité et la santé de votre sol pour des plantes en pleine forme."
              image="/photo.webp"
            />
            <SliderBox
              number="2"
              title="Mycélium actif"
              text="Le réseau fongique naturel renforce les racines et améliore l'absorption des nutriments essentiels."
              image="/photo.webp"
            />
            <SliderBox
              number="3"
              title="Conseils personnalisés"
              text="Recevez des recommandations adaptées à chaque plante pour optimiser leur croissance."
              image="/photo.webp"
            />
          </div>
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
    <div class="video-section">
      <div class="video-columns">
        <CardVideo src="/insertion.mp4" />
        <CardVideo src="/mycélium 2.mp4" />
        <CardVideo src="/arrosage.mp4" />
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
    <div class="mosaic-section">
      <Mosaic />
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
