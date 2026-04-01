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
          
        <SectionIntro
          title="Regenerative Soil Health"
          text="Omi reads the soil in indoor plants and home gardens, helping restore natural balance and support healthier plants. By working with mycelium, a natural network that supports roots, it invites a more thoughtful relationship with the living systems we care for."
        />
          <div class="mosaic-omi-section">
      <MosaicOmi />
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
            label="Température"
            value="94 °C"
            color="#FFC473"
            innerColor="#FF5A02"
            position="top-left"
          />
          <IconTooltip
            icon="/humidity-icon.svg"
            label="Humidité"
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
            label="Luminosité"
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
        <CardVideo src="/insertion.mp4" title="Mesurer les données de votre sol" />
        <CardVideo src="/mycélium 2.mp4" title="Ajout d'une recharge de mycélium" />
        <CardVideo src="/arrosage.mp4" title="Arrosage" />
      </div>
    </div>
    <div class="mosaic-section">
      <Mosaic />
    </div>

    <div id="footer" class="footer-3d">
      <div class="footer-3d-top">
        <div class="footer-3d-left">
          <p class="footer-3d-text">Restez informé de l'évolution du projet</p>
        </div>
        <div class="footer-3d-right">
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
        </div>
      </div>
      <div class="footer-3d-bottom">
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
